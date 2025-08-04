import React from "react";
import { Gift, CreditCard } from "lucide-react";

const GiftSlide: React.FC = () => {
  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-theme-beige/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <Gift className="w-16 h-16 mx-auto text-theme-secondary mb-6" />

        <h2 className="font-serif text-3xl text-theme-dark-green mb-4">
          هدية الزفاف
        </h2>
        <div className="w-16 h-1 bg-theme-accent mx-auto mb-6"></div>

        <p className="text-theme-dark-green mb-8 leading-relaxed">
          حضوركم هو أعظم هدية
        </p>

        <div className="space-y-4">
          <div className="bg-theme-beige rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <h3 className="font-semibold text-theme-dark-green">
                Western Union
              </h3>
            </div>
            <div className="text-sm text-theme-dark-green space-y-1">
              <p>Mohammad Ayoub</p>
              <p>Diala Ayoubi</p>
            </div>
          </div>
          <div className="bg-theme-beige rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <h3 className="font-semibold text-theme-dark-green">Whish</h3>
            </div>
            <div className="text-sm text-theme-dark-green space-y-1">
              <p>03130850</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">شكرًا لكرمكم وحبكم</p>
      </div>
    </div>
  );
};

export default GiftSlide;
