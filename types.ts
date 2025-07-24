export interface Guest {
  id: string;
  name: string;
  maxGuests: number;
  isCouple: boolean;
  attendingCount?: number;
  attendance?: "yes" | "no" | "pending";
}
