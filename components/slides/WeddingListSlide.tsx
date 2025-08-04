import { Gift } from "lucide-react";

const WeddingListSlide: React.FC = () => {
  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-theme-beige/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <Gift className="w-16 h-16 mx-auto text-theme-secondary mb-6" />

        <h2 className="font-serif text-3xl text-theme-dark-green mb-4">
          قائمة الزفاف
        </h2>
        <div className="w-16 h-1 bg-theme-accent mx-auto mb-6"></div>

        <p className="text-theme-dark-green mb-8 leading-relaxed"></p>

        <p className="text-xs text-gray-500 mt-6">حضوركم هو أجمل هدية!</p>
      </div>
    </div>
  );
};

export default WeddingListSlide;
