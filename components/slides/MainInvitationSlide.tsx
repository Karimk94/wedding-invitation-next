import { Heart } from "lucide-react";

const MainInvitationSlide: React.FC = () => {
  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-theme-beige/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <p className="text-lg text-theme-dark-green mb-8 leading-relaxed">
          بارك الله لنا هذا الجمع, وجمع بين قلوبنا على الخير والمحبة
        </p>

        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-theme-beige rounded-full flex items-center justify-center mb-4 relative">
            <Heart className="w-full h-full text-theme-secondary absolute inset-0 opacity-20" />
            <span className="font-serif text-2xl text-theme-primary z-10 whitespace-nowrap">
              M & D
            </span>
          </div>
        </div>

        <div className="w-16 h-1 bg-theme-accent mx-auto"></div>
      </div>
    </div>
  );
};

export default MainInvitationSlide;
