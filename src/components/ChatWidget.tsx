
import { useState } from "react";
import { t } from "@/utils/localization";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap animate-bounce-gentle">
          {t("chat.help")}
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-success-500 hover:bg-success-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <span className="text-2xl">💬</span>
      </button>

      {/* Chat Window (placeholder) */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 animate-fade-up">
          <div className="bg-success-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Gustasi Support</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="p-4 h-full flex items-center justify-center text-gray-500">
            Chat functionality coming soon...
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
