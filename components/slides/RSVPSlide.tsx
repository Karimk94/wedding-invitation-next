import { useState } from "react";
import { Users, Check, X } from "lucide-react";
import { Guest } from "@/types";

interface RSVPSlideProps {
  guest: Guest;
}

const RSVPSlide: React.FC<RSVPSlideProps> = ({ guest }) => {
  const [attendance, setAttendance] = useState<"yes" | "no" | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    const newAttendingCount = attendance === "yes" ? guestCount : 0;

    await fetch("/api/guests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guestId: guest.id,
        guestCount: newAttendingCount,
        attendance: attendance,
      }),
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md w-full text-center animate-fade-in-up">
        <div className="bg-theme-beige/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="font-serif text-3xl text-theme-dark-green mb-4">
            شكرًا لك!
          </h2>
          <div className="w-16 h-1 bg-theme-accent mx-auto mb-6"></div>
          <p className="text-theme-dark-green mb-6">
            تم استلام ردك.{" "}
            {attendance === "yes"
              ? "نتطلع للاحتفال معكم"
              : "نأسف لعدم تمكنك من الحضور"}
            !
          </p>
          {attendance === "yes" && (
            <div className="bg-theme-beige rounded-2xl p-6">
              <p className="text-theme-dark-green">
                <span className="font-semibold">{guest.name}</span>
              </p>
              <p className="text-sm text-theme-dark-green">
                {guestCount} {guestCount > 1 ? "ضيوف" : "ضيف"} سيحضرون
              </p>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-6">
            يمكنك تغيير ردك عن طريق تحديث الصفحة وإعادة الإرسال
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-theme-beige/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <Users className="w-16 h-16 mx-auto text-theme-secondary mb-6" />
        <h2 className="font-serif text-3xl text-theme-dark-green mb-4">
          تأكيد الحضور
        </h2>
        <div className="w-16 h-1 bg-theme-accent mx-auto mb-6"></div>
        <p className="text-theme-dark-green mb-8">
          لتأكيد الحضور يرجى التواصل قبل 5/9/2025
        </p>
        <div className="space-y-6">
          <div className="space-y-3">
            <button
              onClick={() => setAttendance("yes")}
              className={`w-full p-4 rounded-2xl border-2 transition-all ${
                attendance === "yes"
                  ? "border-theme-primary bg-theme-primary/20 text-theme-primary"
                  : "border-gray-200 hover:border-theme-primary/50 text-theme-dark-green"
              }`}
            >
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 ms-2" />
                <span className="font-medium">نعم، سأحضر!</span>
              </div>
            </button>
            <button
              onClick={() => setAttendance("no")}
              className={`w-full p-4 rounded-2xl border-2 transition-all ${
                attendance === "no"
                  ? "border-red-500 bg-red-50 text-red-700"
                  : "border-gray-200 hover:border-red-300 text-theme-dark-green"
              }`}
            >
              <div className="flex items-center justify-center">
                <X className="w-5 h-5 ms-2" />
                <span className="font-medium">عذراً، لا يمكنني الحضور</span>
              </div>
            </button>
          </div>
          {attendance === "yes" && (
            <div className="bg-theme-beige rounded-2xl p-6">
              <label
                htmlFor="guest-count"
                className="block text-sm font-medium text-theme-dark-green mb-3"
              >
                عدد الضيوف الحاضرين
              </label>
              <select
                id="guest-count"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {Array.from({ length: guest.maxGuests }, (_, i) => i + 1).map(
                  (num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  )
                )}
              </select>
              <p className="text-xs text-gray-500 mt-2">
                الحد الأقصى {guest.maxGuests}{" "}
                {guest.maxGuests > 1 ? "ضيوف" : "ضيف"}
              </p>
            </div>
          )}
          {attendance && (
            <button
              onClick={handleSubmit}
              className="w-full bg-theme-primary hover:bg-theme-dark-green text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              إرسال الرد
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVPSlide;
