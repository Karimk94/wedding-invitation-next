import { MapPin, Clock, Calendar } from "lucide-react";

const VenueSlide: React.FC = () => {
  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <MapPin className="w-16 h-16 mx-auto text-rose-500 mb-6" />

        <h2 className="font-serif text-3xl text-gray-800 mb-6">
          تفاصيل حفل الزفاف
        </h2>
        <div className="w-16 h-1 bg-rose-400 mx-auto mb-8"></div>

        <div className="space-y-6">
          <div className="bg-rose-50 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5 text-rose-600 ms-2" />
              <h3 className="font-semibold text-gray-800">مراسم عقد القران</h3>
            </div>
            <p className="text-gray-700 mb-1">السبت، 27 سبتمبر، 2025</p>
            <p className="text-gray-600 text-sm">4:00 مساءً</p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-pink-600 ms-2" />
              <h3 className="font-semibold text-gray-800">حفل الاستقبال</h3>
            </div>
            <p className="text-gray-700 mb-1">بعد مراسم عقد القران</p>
            <p className="text-gray-600 text-sm">6:00 مساءً - 11:00 مساءً</p>
          </div>

          <div className="bg-rose-50 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-rose-600 ms-2" />
              <h3 className="font-semibold text-gray-800">المكان</h3>
            </div>
            <p className="text-gray-700 font-medium mb-1">لاس بيرلاس</p>
            <p className="text-gray-600 text-sm">القلمون</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          يرجى الالتزام بملابس الكوكتيل
        </p>
      </div>
    </div>
  );
};

export default VenueSlide;
