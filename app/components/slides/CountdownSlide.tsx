import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

const CountdownSlide: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-09-27T16:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <Calendar className="w-16 h-16 mx-auto text-rose-500 mb-6 animate-pulse" />

        <h1 className="font-serif text-3xl text-gray-800 mb-2">
          احفظوا التاريخ
        </h1>
        <div className="w-16 h-1 bg-rose-400 mx-auto mb-6"></div>

        <div className="mb-8">
          <p className="text-2xl font-bold text-gray-800 mb-2">
            27 سبتمبر 2025
          </p>
          <div className="flex items-center justify-center text-gray-600">
            <Clock className="w-4 h-4 ms-2" />
            <span>4:00 مساءً</span>
          </div>
        </div>

        <div className="bg-rose-50 rounded-2xl p-6">
          <p className="text-sm text-gray-600 mb-4 uppercase tracking-wide">
            العد التنازلي
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">
                {timeLeft.days}
              </div>
              <div className="text-xs text-gray-600 uppercase">أيام</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">
                {timeLeft.hours}
              </div>
              <div className="text-xs text-gray-600 uppercase">ساعات</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">
                {timeLeft.minutes}
              </div>
              <div className="text-xs text-gray-600 uppercase">دقائق</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">
                {timeLeft.seconds}
              </div>
              <div className="text-xs text-gray-600 uppercase">ثواني</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownSlide;
