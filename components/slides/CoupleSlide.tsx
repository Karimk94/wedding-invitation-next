import { Ampersand, Heart } from "lucide-react";

const CoupleSlide: React.FC = () => {
  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-theme-beige/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <Heart className="w-16 h-16 mx-auto text-theme-secondary mb-6 animate-pulse" />

        <div className="flex items-center justify-center mb-6">
          <div className="flex flex-col items-end text-right flex-1 pe-2">
            <h1 className="font-serif text-xl text-theme-dark-green leading-tight">
              وليد <span className="text-theme-secondary">و</span> أمال
            </h1>
            <h1 className="font-serif text-xl text-theme-dark-green leading-tight">
              الأيوبي
            </h1>
          </div>
          <Ampersand className="w-8 h-8 text-theme-secondary mx-4 flex-shrink-0" />
          <div className="flex flex-col items-start text-left flex-1 ps-2">
            <h1 className="font-serif text-xl text-theme-dark-green leading-tight">
              محمد <span className="text-theme-secondary">و</span> وفاء
            </h1>
            <h1 className="font-serif text-xl text-theme-dark-green leading-tight">
              الأيوبي
            </h1>
          </div>
        </div>

        <div className="w-24 h-1 bg-theme-accent mx-auto mb-6"></div>

        <p className="text-lg text-theme-dark-green mb-6 leading-relaxed">
          يتشرفون بدعوتكم لحضور حفل زفاف ولديهما
        </p>

        <h2 className="font-serif text-4xl text-theme-primary mb-4">
          محمد <span className="text-theme-dark-green">&</span> ديالا
        </h2>

        <div className="mt-6 flex justify-center space-x-4 flex-row-reverse">
          <div className="w-12 h-12 bg-theme-beige rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-theme-secondary" />
          </div>
          <div className="w-12 h-12 bg-theme-beige rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-theme-secondary" />
          </div>
          <div className="w-12 h-12 bg-theme-beige rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-theme-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleSlide;
