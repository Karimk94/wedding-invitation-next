import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { Guest } from "@/types";

export async function GET() {
  try {
    const guestKeys = await kv.keys("guest:*");
    if (guestKeys.length === 0) {
      return NextResponse.json({});
    }
    const guests = await kv.mget(...guestKeys);

    const guestObject: Record<string, Guest> = {};
    guests.forEach((guest, index) => {
      if (guest) {
        const key = guestKeys[index].replace("guest:", "");
        guestObject[key] = guest as Guest;
      }
    });

    return NextResponse.json(guestObject);
  } catch (error) {
    return NextResponse.json(
      { message: "Error reading guest data from KV" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { guestId, guestCount, attendance } = await request.json();

    const guestKey = `guest:${guestId}`;
    const guest = (await kv.get(guestKey)) as Guest | null;

    if (guest) {
      guest.attendingCount = guestCount;
      guest.attendance = attendance;

      await kv.set(guestKey, guest);
      return NextResponse.json({ message: "Guest updated successfully" });
    } else {
      return NextResponse.json({ message: "Guest not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating guest data in KV" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const newGuestList: Record<string, Guest> = await request.json();
    const pipeline = kv.pipeline();

    const existingKeys = await kv.keys("guest:*");
    if (existingKeys.length > 0) {
      await kv.del(...existingKeys);
    }

    for (const guestId in newGuestList) {
      pipeline.set(`guest:${guestId}`, newGuestList[guestId]);
    }
    await pipeline.exec();

    return NextResponse.json({ message: "Guest list replaced successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error writing guest data to KV" },
      { status: 500 }
    );
  }
}
