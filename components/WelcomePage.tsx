import { Heart, Users } from "lucide-react";
import { Guest } from "@/types";

interface WelcomePageProps {
  guest: Guest;
  onEnterInvitation: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({
  guest,
  onEnterInvitation,
}) => {
  return (
    // The main container now has your background image and is set to cover the screen.
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.imghippo.com/files/yX6849egc.jpeg')",
      }}
    >
      {/* The white background has been removed, but the padding and structure are kept. */}
      <div className="max-w-md w-full p-8 text-center">
        <div className="mb-8">
          {/* Icons and text are now white with a drop shadow for readability. */}
          <Heart
            className="w-16 h-16 mx-auto text-white mb-4 animate-pulse"
            style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.7))" }}
          />
          <h1
            className="font-serif text-3xl text-white mb-2"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            أنتم مدعوون!
          </h1>
          {/* The divider now uses the new accent color from the theme. */}
          <div className="w-16 h-1 bg-theme-accent mx-auto"></div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Users
              className="w-6 h-6 text-white ms-2"
              style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.7))" }}
            />
            <span
              className="text-sm text-white uppercase tracking-wide"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
            >
              عزيزي
            </span>
          </div>
          <h2
            className="font-serif text-2xl text-white mb-2"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            {guest.name}
          </h2>
          <p
            className="text-white text-sm"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
          >
            {guest.isCouple ? "نتشرف بدعوتكم" : "نتشرف بدعوتك"} للاحتفال معنا
          </p>
        </div>

        {/* Updated button style:
          - Uses the new 'theme-primary' color with 80% opacity.
          - Text color is white for high contrast.
          - The `bg-opacity-80` class makes it semi-transparent.
        */}
        <button
          onClick={onEnterInvitation}
          className="w-full bg-theme-primary bg-opacity-80 hover:bg-opacity-95 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          عرض دعوة الزفاف
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
