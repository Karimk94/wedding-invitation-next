import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Guest } from "@/types";

export async function GET() {
  try {
    const dataFilePath = path.join(process.cwd(), "guests.json");
    const fileContents = await fs.readFile(dataFilePath, "utf8");
    const guests: Record<string, Guest> = JSON.parse(fileContents);

    // Use a pipeline for efficiency
    const pipeline = kv.pipeline();

    for (const guestId in guests) {
      const guest = guests[guestId];
      // Store each guest with a key like "guest:001"
      pipeline.set(`guest:${guestId}`, guest);
    }

    await pipeline.exec();

    return NextResponse.json({
      message: `Successfully seeded ${Object.keys(guests).length} guests.`,
    });
  } catch (error) {
    // Log the detailed error on the server
    console.error("Seeding failed:", error);
    // Return a generic error message to the client
    return NextResponse.json(
      { message: "Error seeding database", error: (error as Error).message },
      { status: 500 }
    );
  }
}
