import React from "react";
import CountdownSlide from "./slides/CountdownSlide";
import CoupleSlide from "./slides/CoupleSlide";
import VenueSlide from "./slides/VenueSlide";
import GiftSlide from "./slides/GiftSlide";
import RSVPSlide from "./slides/RSVPSlide";
import { Guest } from "../data/guests";

interface InvitationSliderProps {
  guest: Guest;
  onBack: () => void;
}

const InvitationSlider: React.FC<InvitationSliderProps> = ({
  guest,
  onBack,
}) => {
  const slides = [
    CountdownSlide,
    CoupleSlide,
    VenueSlide,
    GiftSlide,
    RSVPSlide,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200">
      {/* Navigation Header */}
      <div className="sticky top-0 z-20 p-4 bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200/80 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-white transition-colors"
          >
            → رجوع
          </button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="p-4 pt-8">
        <div className="space-y-12">
          {slides.map((SlideComponent, index) => (
            <div key={index} className="flex justify-center">
              <SlideComponent guest={guest} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvitationSlider;
