import { MapPin, Clock } from "lucide-react";

const VenueSlide: React.FC = () => {
  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <MapPin className="w-16 h-16 mx-auto text-rose-500 mb-6" />

        <h2 className="font-serif text-3xl text-gray-800 mb-6">تفاصيل الحفل</h2>
        <div className="w-16 h-1 bg-rose-400 mx-auto mb-8"></div>

        <div className="space-y-6">
          <div className="bg-rose-50 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-rose-600 ms-2" />
              <h3 className="font-semibold text-gray-800">منزل العريس</h3>
            </div>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">المكان:</span>
              <a
                href="https://maps.app.goo.gl/P5t8ASHrhBHHh3z97?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ms-2 text-rose-500 hover:text-rose-700 transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </p>
            <p className="text-gray-600 text-sm">6:00 مساءً</p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-pink-600 ms-2" />
              <h3 className="font-semibold text-gray-800">منزل العروس</h3>
            </div>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">المكان:</span>
              <a
                href="https://maps.app.goo.gl/X5jQcGQuMDjHiAVD6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ms-2 text-rose-500 hover:text-rose-700 transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </p>
            <p className="text-gray-600 text-sm">6:30 مساءً</p>
          </div>

          <div className="bg-rose-50 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-pink-600 ms-2" />
              <h3 className="font-semibold text-gray-800">الحفل</h3>
            </div>
            <div className="flex items-center justify-center text-gray-700 mb-1">
              <span className="font-medium">المكان:</span>
              <p className="text-gray-700 font-medium mx-1">أنابيا</p>
              <a
                href="https://maps.app.goo.gl/SMZfScqhKBYLhvBq6?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:text-rose-700 transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">8:00 مساءً</p>
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
