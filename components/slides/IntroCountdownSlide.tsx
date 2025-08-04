import { useState, useEffect } from "react";
import { Heart, Calendar } from "lucide-react";

const IntroCountdownSlide: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-09-27T00:00:00");

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
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-theme-beige/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <h1 className="font-serif text-3xl text-theme-dark-green mb-2">
          We are getting MARRIED
        </h1>
        <p className="text-xl font-bold text-theme-secondary mb-6">
          On 27 September 2025
        </p>

        <Heart className="w-16 h-16 mx-auto text-theme-secondary mb-6 animate-pulse" />

        <div className="bg-theme-beige rounded-2xl p-6">
          <p className="text-sm text-theme-dark-green mb-4 uppercase tracking-wide">
            Countdown
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-theme-primary">
                {timeLeft.days}
              </div>
              <div className="text-xs text-theme-dark-green uppercase">
                Days
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-theme-primary">
                {timeLeft.hours}
              </div>
              <div className="text-xs text-theme-dark-green uppercase">
                Hours
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-theme-primary">
                {timeLeft.minutes}
              </div>
              <div className="text-xs text-theme-dark-green uppercase">
                Minutes
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-theme-primary">
                {timeLeft.seconds}
              </div>
              <div className="text-xs text-theme-dark-green uppercase">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCountdownSlide;
