import { Gift, CreditCard, Heart } from "lucide-react";

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
          حضوركم هو أعظم هدية، ولكن إذا رغبتم في تكريمنا بهدية، فسنكون ممتنين
          لمساهمتكم في مستقبلنا معًا.
        </p>

        <div className="space-y-4">
          <div className="bg-theme-beige rounded-2xl p-6 text-left">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-theme-primary me-2" />
              <h3 className="font-semibold text-theme-dark-green">
                تحويل بنكي
              </h3>
            </div>
            <div className="text-sm text-theme-dark-green space-y-1">
              <p>
                <span className="font-medium">OMT :</span> @DialaMohammadWedding
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">شكرًا لكرمكم وحبكم</p>
      </div>
    </div>
  );
};

export default GiftSlide;
