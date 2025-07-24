"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import WelcomePage from "./components/WelcomePage";
import InvitationSlider from "./components/InvitationSlider";

interface Guest {
  id: string;
  name: string;
  maxGuests: number;
  isCouple: boolean;
  attendingCount?: number;
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
    </div>
  );
}

function GuestPortal() {
  const searchParams = useSearchParams();
  const guestCode = searchParams.get("code");

  const [guestList, setGuestList] = useState<Record<string, Guest>>({});
  const [currentGuest, setCurrentGuest] = useState<Guest | null>(null);
  const [showInvitation, setShowInvitation] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch("/api/guests");
        if (!response.ok) {
          throw new Error("Failed to fetch guest list");
        }
        setGuestList(await response.json());
      } catch (err) {
        setError("لا يمكن تحميل قائمة الضيوف. يرجى المحاولة مرة أخرى لاحقًا.");
        setIsLoading(false);
      }
    };
    fetchGuests();
  }, []);

  useEffect(() => {
    if (Object.keys(guestList).length === 0) return;

    if (guestCode) {
      const guest = guestList[guestCode];
      if (guest) {
        setCurrentGuest(guest);
      } else {
        setError("رمز الدعوة غير صالح. يرجى التحقق من رابط الدعوة الخاص بك.");
      }
    } else {
      setError("لم يتم تقديم رمز دعوة. يرجى استخدام الرابط من دعوتك.");
    }
    setIsLoading(false);
  }, [guestList, guestCode]);

  const handleEnterInvitation = () => setShowInvitation(true);
  const handleBackToWelcome = () => setShowInvitation(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">❌</span>
          </div>
          <h1 className="font-serif text-2xl text-gray-800 mb-4">عفواً!</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <p className="text-sm text-gray-500">
            يرجى الاتصال بـ ديالا ومحمد إذا كنت بحاجة إلى مساعدة.
          </p>
        </div>
      </div>
    );
  }

  if (currentGuest) {
    return showInvitation ? (
      <InvitationSlider guest={currentGuest} onBack={handleBackToWelcome} />
    ) : (
      <WelcomePage
        guest={currentGuest}
        onEnterInvitation={handleEnterInvitation}
      />
    );
  }

  return <LoadingSpinner />;
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GuestPortal />
    </Suspense>
  );
}
