import { t, useLanguage } from "@/utils/localization";
import { ChevronRight } from "lucide-react";
import { ShieldCheck, ClipboardList, BarChart2 } from "lucide-react";

const WhatsAppFlow = () => {
  const currentLang = useLanguage();

  const steps = [
    {
      label: t("whatsapp.scan"),
      icon: <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/919999999999" alt="QR Code" className="w-12 h-12 mx-auto rounded-lg border border-gray-200 bg-white" />
    },
    {
      label: "WhatsApp",
      icon: <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" className="w-10 h-10 mx-auto" />
    },
    {
      label: t("whatsapp.verification"),
      icon: <ShieldCheck className="w-10 h-10 mx-auto text-green-500" />
    },
    {
      label: t("whatsapp.menu"),
      icon: <ClipboardList className="w-10 h-10 mx-auto text-amber-500" />
    },
    {
      label: t("whatsapp.capture"),
      icon: <BarChart2 className="w-10 h-10 mx-auto text-blue-500" />
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
              {t("whatsapp.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("whatsapp.subtitle")}
            </p>
          </div>

          {/* Flow Visualization */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center min-w-[140px] shadow-lg animate-fade-up border border-green-200" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="mb-2 flex justify-center">{step.icon}</div>
                  <div className="font-semibold text-sm text-green-900">{step.label}</div>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-green-400 mx-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center">
            <p className="text-gray-600 bg-gray-50 rounded-lg p-4 inline-block">
              <span className="font-semibold">💡 Smart Insight:</span> {t("whatsapp.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppFlow;
