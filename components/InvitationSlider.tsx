import IntroCountdownSlide from "./slides/IntroCountdownSlide";
import MainInvitationSlide from "./slides/MainInvitationSlide";
import CoupleSlide from "./slides/CoupleSlide";
import CalendarDateSlide from "./slides/CalendarDateSlide";
import VenueSlide from "./slides/VenueSlide";
import WeddingListSlide from "./slides/WeddingListSlide";
import GiftSlide from "./slides/GiftSlide";
import RSVPSlide from "./slides/RSVPSlide";

import { Guest } from "@/types";

interface InvitationSliderProps {
  guest: Guest;
  onBack: () => void;
}

const InvitationSlider: React.FC<InvitationSliderProps> = ({
  guest,
  onBack,
}) => {
  const slides = [
    IntroCountdownSlide,
    MainInvitationSlide,
    CoupleSlide,
    CalendarDateSlide,
    VenueSlide,
    WeddingListSlide,
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
          {" "}
          {/* space-y-12 creates vertical spacing between slides */}
          {slides.map((SlideComponent, index) => (
            <div key={index} className="flex justify-center">
              {/* Pass guest prop only if the component expects it */}
              {/* WeddingListSlide, IntroCountdownSlide, MainInvitationSlide, CalendarDateSlide, CoupleSlide, VenueSlide and GiftSlide do not need the guest prop */}
              {index === 7 ? ( // RSVPSlide is at index 7
                <SlideComponent guest={guest} />
              ) : (
                <SlideComponent />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvitationSlider;
