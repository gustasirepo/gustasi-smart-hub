
import { t } from "@/utils/localization";
import { ChevronRight } from "lucide-react";

const WhatsAppFlow = () => {
  const steps = [
    { label: t("whatsapp.scan"), icon: "📱" },
    { label: t("whatsapp.verification"), icon: "✅" },
    { label: t("whatsapp.menu"), icon: "📋" },
    { label: t("whatsapp.capture"), icon: "📊" }
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
              Seamless customer journey from QR scan to order completion
            </p>
          </div>

          {/* Flow Visualization */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl p-6 text-white text-center min-w-[140px] shadow-lg animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <div className="font-semibold text-sm">{step.label}</div>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-gray-400 mx-2 hidden md:block" />
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
