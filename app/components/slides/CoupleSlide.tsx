import { Heart } from "lucide-react";

const CoupleSlide: React.FC = () => {
  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <Heart className="w-16 h-16 mx-auto text-rose-500 mb-6 animate-pulse" />

        <h1 className="font-serif text-4xl text-gray-800 mb-4">
          ديالا <span className="text-rose-500">&</span> محمد
        </h1>

        <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          يتشرفون بدعوتكم لحضور حفل زفافهم والاحتفال بزواجهم
        </p>

        <div className="bg-rose-50 rounded-2xl p-6">
          <p className="text-rose-600 font-medium text-lg mb-2">مع عائلاتهم</p>
          <p className="text-gray-600 text-sm">
            يدعونكم للانضمام إليهم في الاحتفال بزفافهما
          </p>
        </div>

        <div className="mt-6 flex justify-center space-x-4 flex-row-reverse">
          <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-rose-500" />
          </div>
          <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-rose-500" />
          </div>
          <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-rose-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleSlide;
