import React from 'react';
import { Clock, MapPin, Users, Brain, HelpCircle, Sparkles, Gift, LogOut } from 'lucide-react';

interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}

export default function App() {
  const scheduleItems: ScheduleItem[] = [
    {
      id: 1,
      time: "14:00 ~ 14:30",
      title: "入場",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      time: "14:30 ~ 15:00",
      title: "產前大競猜",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      time: "15:00 ~ 16:00",
      title: "性別猜猜猜",
      icon: <HelpCircle className="w-6 h-6" />,
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: 4,
      time: "16:00",
      title: "性別公布",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 5,
      time: "16:05 ~ 16:15",
      title: "頒獎典禮",
      icon: <Gift className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 6,
      time: "17:00",
      title: "散場",
      icon: <LogOut className="w-6 h-6" />,
      color: "bg-gray-100 text-gray-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4 relative overflow-hidden">
      {/* Background decorative emojis - scattered throughout */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top row - evenly spaced for mobile */}
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-50"
          style={{ top: "1rem", left: "8%", transform: "rotate(12deg)" }}
        >
          🎈
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-55"
          style={{ top: "1.5rem", left: "25%", transform: "rotate(-6deg)" }}
        >
          🎉
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-45"
          style={{ top: "1rem", left: "42%", transform: "rotate(45deg)" }}
        >
          🎊
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-50"
          style={{ top: "1.5rem", right: "42%", transform: "rotate(-12deg)" }}
        >
          🥳
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-55"
          style={{ top: "1rem", right: "25%", transform: "rotate(6deg)" }}
        >
          🎈
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-50"
          style={{ top: "1.5rem", right: "8%", transform: "rotate(-45deg)" }}
        >
          🎉
        </div>

        {/* Upper middle row */}
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-45"
          style={{ top: "22%", left: "10%", transform: "rotate(45deg)" }}
        >
          👶🏻
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-50"
          style={{ top: "20%", left: "30%", transform: "rotate(-12deg)" }}
        >
          🍼
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-55"
          style={{ top: "24%", left: "50%", transform: "rotate(6deg)" }}
        >
          🤰🏻
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-50"
          style={{ top: "22%", right: "30%", transform: "rotate(-45deg)" }}
        >
          🎈
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-45"
          style={{ top: "20%", right: "10%", transform: "rotate(12deg)" }}
        >
          🎉
        </div>

        {/* Center row - avoiding main content area */}
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-50"
          style={{ top: "45%", left: "5%", transform: "rotate(-12deg)" }}
        >
          🎈
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-45"
          style={{ top: "47%", left: "25%", transform: "rotate(45deg)" }}
        >
          🎉
        </div>
        <div
          className="absolute flex items-center justify-center text-3xl md:text-6xl opacity-55"
          style={{ top: "45%", left: "50%", transform: "rotate(-6deg)" }}
        >
          👶🏻
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-50"
          style={{ top: "47%", right: "25%", transform: "rotate(12deg)" }}
        >
          🍼
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-45"
          style={{ top: "45%", right: "5%", transform: "rotate(-12deg)" }}
        >
          🎉
        </div>

        {/* Lower middle row */}
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-50"
          style={{ top: "60%", left: "8%", transform: "rotate(6deg)" }}
        >
          🤰🏻
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-45"
          style={{ top: "62%", left: "25%", transform: "rotate(-45deg)" }}
        >
          🎈
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-55"
          style={{ top: "60%", left: "42%", transform: "rotate(12deg)" }}
        >
          🎉
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-50"
          style={{ top: "62%", right: "42%", transform: "rotate(-6deg)" }}
        >
          🎊
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-45"
          style={{ top: "60%", right: "25%", transform: "rotate(45deg)" }}
        >
          🥳
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-50"
          style={{ top: "62%", right: "8%", transform: "rotate(-12deg)" }}
        >
          👶🏻
        </div>

        {/* Bottom row */}
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-50"
          style={{ bottom: "1rem", left: "8%", transform: "rotate(-12deg)" }}
        >
          🎈
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-55"
          style={{ bottom: "1.5rem", left: "25%", transform: "rotate(45deg)" }}
        >
          🎉
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-45"
          style={{ bottom: "1rem", left: "42%", transform: "rotate(-6deg)" }}
        >
          🎊
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-50"
          style={{ bottom: "1.5rem", right: "42%", transform: "rotate(12deg)" }}
        >
          🥳
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-5xl opacity-55"
          style={{
            bottom: "1rem",
            right: "25%",
            transform: "rotate(-45deg)",
          }}
        >
          🎈
        </div>
        <div
          className="absolute flex items-center justify-center text-2xl md:text-4xl opacity-50"
          style={{ bottom: "1.5rem", right: "8%", transform: "rotate(6deg)" }}
        >
          🎉
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-5xl md:text-6xl mb-8 drop-shadow-2xl"
            style={{
              color: "#7c3aed",
              WebkitTextStroke: "1px white",
              fontFamily:
                "'Luckiest Guy', 'ZCOOL KuaiLe', 'ZCOOL QingKe HuangYou', 'Noto Sans TC', 'Noto Sans SC', 'Bungee', 'Righteous', 'Microsoft YaHei', '微软雅黑', sans-serif",
              fontWeight: "900",
              letterSpacing: "0.05em",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textShadow:
                "4px 4px 8px rgba(0, 0, 0, 0.3), -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
            }}
          >
            Lisa & YC Baby Gender Reveal Party
          </h1>

          {/* Event Info */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              {/* Google Calendar Icon */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" 
                alt="Google Calendar" 
                className="w-5 h-5"
              />
              <a
                className="text-black hover:text-gray-800 cursor-pointer transition-all duration-200 hover:bg-gray-50 px-2 py-1 rounded"
                style={{ textDecoration: "underline", textDecorationColor: "#9ca3af" }}
                href="https://www.google.com/calendar/event?action=TEMPLATE&text=LisaYC寶寶性別派對&dates=20260201T060000Z%2F20260201T090000Z&location=Big Apple Swing Studio 搖擺舞教室&pli=1&uid=&sf=true&output=xml"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>2026/02/01 14:00 ~ 17:00</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              {/* Google Maps Icon */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/39/Google_Maps_icon_%282015-2020%29.svg" 
                alt="Google Maps" 
                className="w-5 h-5"
              />
              <a
                href="https://maps.app.goo.gl/PFCxbGwubQoU5JVL6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 cursor-pointer transition-all duration-200 hover:bg-gray-50 px-2 py-1 rounded"
                style={{ textDecoration: "underline", textDecorationColor: "#9ca3af" }}
              >
                Big Apple Swing Studio 搖擺舞教室
              </a>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 md:p-12">
          <div className="space-y-6">
            {scheduleItems.map((item, index) => {
              const isHighlighted = item.id === 4;
              return (
                <div key={item.id} className="relative">
                  <div
                    className={`flex gap-6 items-stretch group hover:transform hover:scale-[1.02] transition-all duration-300 ${
                      isHighlighted ? "z-10" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`${
                        item.color
                      } rounded-2xl p-3 md:p-5 shrink-0 shadow-md group-hover:shadow-lg transition-shadow flex items-center justify-center relative ${
                        isHighlighted ? "sparkle-animation" : ""
                      }`}
                    >
                      <div className={isHighlighted ? "glow-animation" : ""}>
                        {item.icon}
                      </div>
                      {/* Timeline connector */}
                      {index < scheduleItems.length - 1 && (
                        <div
                          className="absolute left-1/2 bottom-0 w-0.5 h-6 bg-gradient-to-b from-gray-300 to-gray-200"
                          style={{
                            transform: "translateX(-50%) translateY(150%)",
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 rounded-2xl p-3 md:p-5 group-hover:bg-gray-100 transition-colors ${
                        isHighlighted
                          ? "bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 shimmer-effect border-2 border-yellow-300"
                          : "bg-gray-50"
                      }`}
                    >
                      <div className="flex flex-row items-center justify-between gap-2">
                        <h3
                          className={`flex-1 ${
                            isHighlighted
                              ? "text-yellow-800 text-base md:text-xl font-bold"
                              : "text-gray-800 text-xs md:text-base"
                          }`}
                          style={{
                            fontWeight: isHighlighted ? 900 : 700,
                          }}
                        >
                          {item.title}
                        </h3>
                        <div
                          className={`flex items-center gap-1 md:gap-2 shrink-0 ${
                            isHighlighted ? "text-yellow-700" : "text-gray-600"
                          }`}
                        >
                          <Clock
                            className={`w-3 h-3 md:w-4 md:h-4 ${
                              isHighlighted ? "glow-animation" : ""
                            }`}
                          />
                          <span
                            className={`${
                              isHighlighted
                                ? "text-xs md:text-xl font-semibold"
                                : "text-xs md:text-lg"
                            }`}
                          >
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500 text-xs">
              ✨就讓我們一同揭開寶寶性別的秘密吧✨
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center gap-3">
          <div
            className="w-3 h-3 rounded-full bg-pink-400 animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}