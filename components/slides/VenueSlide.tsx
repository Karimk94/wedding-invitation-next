import { MapPin, Clock } from "lucide-react";

const VenueSlide: React.FC = () => {
  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-theme-beige/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <MapPin className="w-16 h-16 mx-auto text-theme-secondary mb-6" />

        <h2 className="font-serif text-3xl text-theme-dark-green mb-6">
          تفاصيل الحفل
        </h2>
        <div className="w-16 h-1 bg-theme-accent mx-auto mb-8"></div>

        <div className="space-y-6">
          <div className="bg-theme-beige rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-theme-primary ms-2" />
              <h3 className="font-semibold text-theme-dark-green">
                منزل العريس
              </h3>
            </div>
            <p className="text-theme-dark-green mb-1">
              <span className="font-medium">المكان:</span>
              <a
                href="https://maps.app.goo.gl/P5t8ASHrhBHHh3z97?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ms-2 text-theme-secondary hover:text-theme-primary transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </p>
            <p className="text-sm text-theme-dark-green">6:00 مساءً</p>
          </div>

          <div className="bg-theme-beige rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-theme-primary ms-2" />
              <h3 className="font-semibold text-theme-dark-green">
                منزل العروس
              </h3>
            </div>
            <p className="text-theme-dark-green mb-1">
              <span className="font-medium">المكان:</span>
              <a
                href="https://maps.app.goo.gl/X5jQcGQuMDjHiAVD6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ms-2 text-theme-secondary hover:text-theme-primary transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </p>
            <p className="text-sm text-theme-dark-green">6:30 مساءً</p>
          </div>

          <div className="bg-theme-beige rounded-2xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-theme-primary ms-2" />
              <h3 className="font-semibold text-theme-dark-green">الحفل</h3>
            </div>
            <div className="flex items-center justify-center text-theme-dark-green mb-1">
              <span className="font-medium">المكان:</span>
              <p className="text-theme-dark-green font-medium mx-1">أنابيا</p>
              <a
                href="https://maps.app.goo.gl/SMZfScqhKBYLhvBq6?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-secondary hover:text-theme-primary transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-theme-dark-green">8:00 مساءً</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">
        </p>
      </div>
    </div>
  );
};

export default VenueSlide;
