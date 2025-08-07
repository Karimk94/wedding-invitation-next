import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { Guest } from "@/types";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const guestId = params.id;
    const guestKey = `guest:${guestId}`;

    await kv.del(guestKey);

    // Re-index remaining guests
    const guestKeys = await kv.keys("guest:*");
    if (guestKeys.length > 0) {
      const guests = (await kv.mget(...guestKeys)) as Guest[];
      
      await kv.del(...guestKeys);

      const sortedGuests = guests.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));

      const pipeline = kv.pipeline();
      sortedGuests.forEach((guest, index) => {
          const newId = (index + 1).toString();
          guest.id = newId;
          pipeline.set(`guest:${newId}`, guest);
      });
      await pipeline.exec();
    }
    
    return NextResponse.json({ message: "Guest deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting guest data from KV" },
      { status: 500 }
    );
  }
}
