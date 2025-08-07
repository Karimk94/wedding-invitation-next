"use client";

import { useEffect, useState } from "react";
import { utils, writeFile, read } from "xlsx";
import { Guest } from "@/types";

export default function AdminPage() {
  const [guestList, setGuestList] = useState<Guest[]>([]);
  const [totalAttending, setTotalAttending] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [newGuest, setNewGuest] = useState({ id: "", name: "", maxGuests: 1 });

  const fetchData = async () => {
    try {
      const response = await fetch("/api/guests");
      if (!response.ok) throw new Error("Failed to fetch guest list");

      const guestData = await response.json();
      const guests = Object.values(guestData) as Guest[];

      const attendingCount = guests.reduce(
        (acc, guest) => acc + (guest.attendingCount || 0),
        0
      );

      setTotalAttending(attendingCount);
      setGuestList(guests);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsClient(true);
    fetchData();
  }, []);

  useEffect(() => {
    if (guestList.length > 0) {
      const maxId = Math.max(...guestList.map(guest => parseInt(guest.id, 10)).filter(id => !isNaN(id)));
      if (isFinite(maxId)) {
        setNewGuest(prev => ({ ...prev, id: (maxId + 1).toString() }));
      } else {
        setNewGuest(prev => ({ ...prev, id: "1" }));
      }
    } else {
      setNewGuest(prev => ({ ...prev, id: "1" }));
    }
  }, [guestList]);

  const handleAddGuest = async () => {
    if (!newGuest.id || !newGuest.name || newGuest.maxGuests < 1) {
      alert("Please fill all fields for the new guest.");
      return;
    }
    const isCouple =
      newGuest.name.toLowerCase().includes("&") ||
      newGuest.name.toLowerCase().includes(" and ");

    const guestToAdd = {
        ...newGuest,
        isCouple,
        attendingCount: 0,
        attendance: "pending",
    };

    const response = await fetch("/api/guests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        guestId: guestToAdd.id,
        ...guestToAdd
      }),
    });

    if (response.ok) {
      alert("Guest added successfully!");
      setNewGuest({ id: "", name: "", maxGuests: 1 });
      fetchData();
    } else {
      alert("Failed to add guest.");
    }
  };

  const handleRemoveGuest = async (guestId: string) => {
    if (confirm("Are you sure you want to remove this guest?")) {
      const response = await fetch(`/api/guests/${guestId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Guest removed successfully!");
        fetchData();
      } else {
        alert("Failed to remove guest.");
      }
    }
  };


  const handleExport = () => {
    const headers = ["Guest Code", "Guest Name", "Max Guests", "Status", "Guest Count"];
    const dataToExport = guestList.map((guest) => ({
      "Guest Code": guest.id,
      "Guest Name": guest.name,
      "Max Guests": guest.maxGuests,
      Status: guest.attendance || "pending",
      "Guest Count": guest.attendingCount || 0,
    }));
    const worksheet = utils.json_to_sheet(dataToExport);
    utils.sheet_add_aoa(worksheet, [headers], { origin: "A1" });
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "RSVP List");
    writeFile(workbook, "Wedding_RSVP_List.csv");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const data = event.target?.result;
        const workbook = read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet, {
          header: ["id", "name", "maxGuests", "attendance", "attendingCount"],
        });

        if (json.length > 0 && (json[0] as any).id === "id") {
          json.shift();
        }

        const newGuestList: Record<string, Guest> = {};
        let isValid = true;

        (json as any[]).forEach((row, index) => {
          if (!row.id || !row.name || !row.maxGuests) {
            isValid = false;
            alert(
              `Error: Row ${
                index + 2
              } is missing required data. Please ensure 'id', 'name', and 'maxGuests' columns are filled.`
            );
          }
          const isCouple =
            String(row.name).toLowerCase().includes("&") ||
            String(row.name).toLowerCase().includes(" and ");
          newGuestList[row.id] = {
            id: String(row.id),
            name: String(row.name),
            maxGuests: Number(row.maxGuests),
            isCouple: isCouple,
            attendingCount: Number(row.attendingCount) || 0,
            attendance: row.attendance || "pending",
          };
        });

        if (!isValid) return;

        const response = await fetch("/api/guests", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newGuestList),
        });

        if (!response.ok) {
          throw new Error("Failed to update guest list on the server.");
        }

        alert("Guest list imported successfully!");
        fetchData();
      } catch (error) {
        console.error("Import failed:", error);
        alert(
          "Import failed. Please check the file format and console for errors."
        );
      }
    };
    reader.readAsBinaryString(file);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8" dir="ltr">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Guest</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                    type="text"
                    placeholder="Guest ID"
                    value={newGuest.id}
                    disabled
                    className="p-2 border rounded bg-gray-200 text-gray-800"
                />
                <input
                    type="text"
                    placeholder="Guest Name"
                    value={newGuest.name}
                    onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                    className="p-2 border rounded text-gray-800"
                />
                <input
                    type="number"
                    placeholder="Max Guests"
                    min="1"
                    value={newGuest.maxGuests}
                    onChange={(e) => setNewGuest({ ...newGuest, maxGuests: parseInt(e.target.value, 10) })}
                    className="p-2 border rounded text-gray-800"
                />
            </div>
            <button
                onClick={handleAddGuest}
                className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Guest
            </button>
        </div>
        <div className="flex justify-end mb-4 space-x-2">
          <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            <span>Import from Excel</span>
            <input
              type="file"
              className="hidden"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              onChange={handleImport}
            />
          </label>
          <button
            onClick={handleExport}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Export to Excel
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-serif text-3xl text-gray-800">
              Admin - Guest List
            </h1>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-700">
                Total Attending:
              </p>
              <p className="text-2xl font-bold text-green-600">
                {totalAttending}
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Guest Code</th>
                  <th className="py-3 px-6 text-left">Guest Name</th>
                  <th className="py-3 px-6 text-left">Max Guests</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-center">Guest Count</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {guestList.map((guest) => (
                  <tr
                    key={guest.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">
                      <span className="font-mono text-xs bg-gray-200 px-2 py-1 rounded">
                        {guest.id}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <span className="font-medium">{guest.name}</span>
                    </td>
                     <td className="py-3 px-6 text-left">
                      <span className="font-medium">{guest.maxGuests}</span>
                    </td>
                    <td className="py-3 px-6 text-left">
                      {guest.attendance === "yes" && (
                        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                          Yes
                        </span>
                      )}
                      {guest.attendance === "no" && (
                        <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                          No
                        </span>
                      )}
                      {(guest.attendance === "pending" ||
                        !guest.attendance) && (
                        <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>
                        {(guest.attendingCount || 0) > 0
                          ? guest.attendingCount
                          : "-"}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                        <button
                        onClick={() => handleRemoveGuest(guest.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                        >
                        Remove
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
