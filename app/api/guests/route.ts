import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const dataFilePath = path.join(process.cwd(), "guests.json");

async function getGuestData() {
  const fileContents = await fs.readFile(dataFilePath, "utf8");
  return JSON.parse(fileContents);
}

export async function GET() {
  try {
    const data = await getGuestData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Error reading guest data" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { guestId, guestCount, attendance } = await request.json();
    const allGuests = await getGuestData();

    if (allGuests[guestId]) {
      allGuests[guestId].attendingCount = guestCount;
      allGuests[guestId].attendance = attendance;

      await fs.writeFile(dataFilePath, JSON.stringify(allGuests, null, 2));
      return NextResponse.json({ message: "Guest updated successfully" });
    } else {
      return NextResponse.json({ message: "Guest not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating guest data" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const newGuestList = await request.json();
    await fs.writeFile(dataFilePath, JSON.stringify(newGuestList, null, 2));
    return NextResponse.json({ message: "Guest list replaced successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error writing guest data" },
      { status: 500 }
    );
  }
}
