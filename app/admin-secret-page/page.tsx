"use client";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

interface Guest {
  id: string;
  name: string;
  maxGuests: number;
  isCouple: boolean;
  attendingCount?: number;
}

interface CombinedGuestData {
  guestId: string;
  guestName: string;
  attendance: "yes" | "no" | "pending";
  guestCount: number;
}

interface Guest {
  id: string;
  name: string;
  maxGuests: number;
  isCouple: boolean;
  attendingCount?: number;
}

export default function AdminPage() {
  const [combinedData, setCombinedData] = useState<CombinedGuestData[]>([]);
  const [totalAttending, setTotalAttending] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/guests");
        if (!response.ok) {
          throw new Error("Failed to fetch guest list");
        }
        const guestData = await response.json();
        const guests = Object.values(guestData) as Guest[];

        const attendingCount = guests.reduce(
          (acc, guest) => acc + (guest.attendingCount || 0),
          0
        );
        setTotalAttending(attendingCount);

        const displayData = guests.map((guest) => ({
          guestId: guest.id,
          guestName: guest.name,
          attendance: (guest.attendingCount || 0) > 0 ? "yes" : "pending",
          guestCount: guest.attendingCount || 0,
        }));
        setCombinedData(displayData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleExport = () => {
    const headers = ["Guest Code", "Guest Name", "Status", "Guest Count"];
    const dataToExport = combinedData.map((item) => ({
      guestId: item.guestId,
      guestName: item.guestName,
      attendance: item.attendance,
      guestCount: item.guestCount,
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    XLSX.utils.sheet_add_aoa(worksheet, [headers], { origin: "A1" });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "RSVP List");
    XLSX.writeFile(workbook, "Wedding_RSVP_List.csv");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8" dir="ltr">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleExport}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Export to CSV
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
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-center">Guest Count</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {combinedData.map((data) => (
                  <tr
                    key={data.guestId}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">
                      <span className="font-mono text-xs bg-gray-200 px-2 py-1 rounded">
                        {data.guestId}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <span className="font-medium">{data.guestName}</span>
                    </td>
                    <td className="py-3 px-6 text-left">
                      {data.attendance === "yes" && (
                        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                          Yes
                        </span>
                      )}
                      {data.attendance === "pending" && (
                        <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>{data.guestCount > 0 ? data.guestCount : "-"}</span>
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
