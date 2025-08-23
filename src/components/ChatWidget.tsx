
import { useState } from "react";
import { t, useLanguage } from "@/utils/localization";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  // This will make the component re-render when language changes
  useLanguage();

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

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 animate-fade-up overflow-hidden">
          <div className="bg-success-500 text-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t('whatsapp.modalTitle')}</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
                aria-label={t('common.close')}
              >
                ✕
              </button>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-6">{t('whatsapp.modalDescription')}</p>
            <a
              href="https://wa.me/919876543210" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
            >
              <span className="mr-2">💬</span>
              {t('whatsapp.openChat')}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
