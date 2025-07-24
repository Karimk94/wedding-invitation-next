import React from "react";
import { Heart, Users } from "lucide-react";

interface Guest {
  id: string;
  name: string;
  maxGuests: number;
  isCouple: boolean;
  attendingCount?: number;
}

interface WelcomePageProps {
  guest: Guest;
  onEnterInvitation: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({
  guest,
  onEnterInvitation,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-8">
          <Heart className="w-16 h-16 mx-auto text-rose-500 mb-4 animate-pulse" />
          <h1 className="font-serif text-3xl text-gray-800 mb-2">
            أنتم مدعوون!
          </h1>
          <div className="w-16 h-1 bg-rose-400 mx-auto"></div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-rose-500 ms-2" />
            <span className="text-sm text-gray-600 uppercase tracking-wide">
              عزيزي
            </span>
          </div>
          <h2 className="font-serif text-2xl text-gray-800 mb-2">
            {guest.name}
          </h2>
          <p className="text-gray-600 text-sm">
            {guest.isCouple ? "نتشرف بدعوتكم" : "نتشرف بدعوتك"} للاحتفال معنا
          </p>
        </div>

        <button
          onClick={onEnterInvitation}
          className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          عرض دعوة الزفاف
        </button>

        <p className="text-xs text-gray-500 mt-4">رمز الدعوة: {guest.id}</p>
      </div>
    </div>
  );
};

export default WelcomePage;
