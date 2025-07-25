import { Heart } from "lucide-react";

const MainInvitationSlide: React.FC = () => {
  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          بارك الله لنا هذا الجمع, وجمع بين قلوبنا على الخير والمحبة
        </p>

        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-rose-100 rounded-full flex items-center justify-center mb-4 relative">
            <Heart className="w-full h-full text-rose-500 absolute inset-0 opacity-20" />
            <span className="font-serif text-4xl text-rose-700 z-10">
              M & D
            </span>
          </div>
        </div>

        <div className="w-16 h-1 bg-rose-400 mx-auto"></div>
      </div>
    </div>
  );
};

export default MainInvitationSlide;
