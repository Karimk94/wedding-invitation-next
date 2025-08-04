import { Calendar, Heart } from "lucide-react";

const CalendarDateSlide: React.FC = () => {
  const year = 2025;
  const month = 8; // September is month 8 (0-indexed)
  const weddingDay = 27;

  // Function to get the number of days in a month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const days = [];
  // Add empty cells for days before the 1st
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="text-gray-400"></div>);
  }
  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const isWeddingDay = i === weddingDay;
    days.push(
      <div
        key={i}
        className={`relative flex items-center justify-center p-2 rounded-lg font-medium ${
          isWeddingDay
            ? "bg-theme-secondary text-white shadow-lg transform scale-105 transition-all duration-200"
            : "text-theme-dark-green hover:bg-theme-beige hover:text-theme-primary transition-colors"
        }`}
      >
        {isWeddingDay && (
          <Heart className="absolute w-full h-full text-white/50 animate-pulse" />
        )}
        <span className="relative z-10">{i}</span>
      </div>
    );
  }

  const monthNames = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  const dayNames = ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"];

  return (
    <div className="max-w-md w-full text-center animate-fade-in-up">
      <div className="bg-theme-beige/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <Calendar className="w-16 h-16 mx-auto text-theme-secondary mb-6" />
        <h2 className="font-serif text-3xl text-theme-dark-green mb-4">
          تاريخ الزفاف
        </h2>
        <div className="w-16 h-1 bg-theme-accent mx-auto mb-6"></div>

        <div className="bg-theme-beige rounded-2xl p-6">
          <h3 className="text-xl font-bold text-theme-primary mb-4">
            {monthNames[month]} {year}
          </h3>
          <div className="grid grid-cols-7 gap-2 text-sm mb-4">
            {dayNames.map((day) => (
              <div key={day} className="font-semibold text-theme-dark-green">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 text-base">{days}</div>
        </div>

        <p className="text-sm text-gray-500 mt-6">يوم سعيد ينتظرنا!</p>
      </div>
    </div>
  );
};

export default CalendarDateSlide;
