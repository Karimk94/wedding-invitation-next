import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Define the path to your JSON file
const dataFilePath = path.join(process.cwd(), "guests.json");

// Function to read the guest list
async function getGuestData() {
  const fileContents = await fs.readFile(dataFilePath, "utf8");
  return JSON.parse(fileContents);
}

// GET handler: To fetch all guests
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

// POST handler: To update a guest's attendance
export async function POST(request: Request) {
  try {
    const { guestId, guestCount } = await request.json();
    const allGuests = await getGuestData();

    if (allGuests[guestId]) {
      allGuests[guestId].attendingCount = guestCount;
      // Write the updated data back to the file
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
