import { useLanguage, t } from "@/utils/localization";
import { 
  ShieldCheck, 
  AlertTriangle, 
  Users, 
  Eye, 
  Bell, 
  FileText, 
  BarChart2, 
  Boxes, 
  RefreshCw, 
  Copy, 
  UserCog,
  ArrowRight,
  TrendingUp,
  Shield,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const FraudPrevention = () => {
  const currentLang = useLanguage();
  
  // Set dark theme by default for this page
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  const fraudTypes = [
    {
      title: t('fraud.types.orderTampering'),
      description: t('fraud.types.orderTamperingDesc'),
      icon: FileText,
      color: "text-blue-500"
    },
    {
      title: t('fraud.types.fakeDiscounts'),
      description: t('fraud.types.fakeDiscountsDesc'),
      icon: AlertTriangle,
      color: "text-amber-500"
    },
    {
      title: t('fraud.types.inventoryManipulation'),
      description: t('fraud.types.inventoryManipulationDesc'),
      icon: Boxes,
      color: "text-emerald-500"
    },
    {
      title: t('fraud.types.unauthorizedRefunds'),
      description: t('fraud.types.unauthorizedRefundsDesc'),
      icon: RefreshCw,
      color: "text-rose-500"
    },
    {
      title: t('fraud.types.parallelBilling'),
      description: t('fraud.types.parallelBillingDesc'),
      icon: Copy,
      color: "text-purple-500"
    },
    {
      title: t('fraud.types.shiftIdAbuse'),
      description: t('fraud.types.shiftIdAbuseDesc'),
      icon: UserCog,
      color: "text-cyan-500"
    }
  ];

  const features = [
    {
      title: t('fraud.features.staffAccounts'),
      description: t('fraud.features.staffAccountsDesc'),
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: t('fraud.features.dashboard'),
      description: t('fraud.features.dashboardDesc'),
      icon: Eye,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: t('fraud.features.realTimeAlerts'),
      description: t('fraud.features.realTimeAlertsDesc'),
      icon: Bell,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const howItWorksSteps = [
    {
      title: t('fraud.howItWorks.step1'),
      description: t('fraud.howItWorks.step1Desc'),
    },
    {
      title: t('fraud.howItWorks.step2'),
      description: t('fraud.howItWorks.step2Desc'),
    },
    {
      title: t('fraud.howItWorks.step3'),
      description: t('fraud.howItWorks.step3Desc'),
    },
  ];



  return (
    <div className="min-h-screen bg-gradient-bg text-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0F0E16] via-[#191B24] to-[#0F0E16] pb-16 pt-28 md:pt-32"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#D8C7AA]/20 to-[#B59469]/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#B59469]/15 to-[#D8C7AA]/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D8C7AA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[80vh]">
              
              {/* Left Column - Modern Content Layout */}
              <div className="lg:col-span-6 text-center lg:text-left space-y-8">
                
                {/* Main Headline */}
                <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                    <span className="block bg-gradient-to-r from-white via-white to-[#F5F2ED] bg-clip-text text-transparent mb-2">
                      {t('fraud.hero.title')}
                    </span>
                    <span className="block bg-gradient-to-r from-[#D8C7AA] via-[#C9B48C] to-[#B59469] bg-clip-text text-transparent mt-2">
                      {t('fraud.hero.subtitle')}
                    </span>
                  </h1>
                  <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                    {t('fraud.hero.description')}
                  </p>
                </div>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#2D2A3D] hover:border-[#D8C7AA]/30 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#D8C7AA] to-[#B59469] rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-[#191B24]" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">+35%</div>
                      <div className="text-xs text-slate-400">{t('fraud.hero.benefit1')}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#2D2A3D] hover:border-[#D8C7AA]/30 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#D8C7AA] to-[#B59469] rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#191B24]" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">99.9%</div>
                      <div className="text-xs text-slate-400">{t('fraud.hero.benefit2')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#D8C7AA] to-[#B59469] hover:from-[#C9B48C] hover:to-[#A58358] text-[#191B24] font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    {t('fraud.hero.cta')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Image Carousel */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#D8C7AA]/20 shadow-2xl">
                  <img 
                    src="./lovable-uploads/kdsscreen.PNG" 
                    alt="Fraud Prevention Dashboard" 
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* How We Prevent Fraud */}
      <motion.section 
        className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0F0E16] to-[#191B24]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D8C7AA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#D8C7AA] to-[#B59469] text-[#191B24] mb-6 font-medium">
              {t('fraud.howWePrevent.title')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
              {t('fraud.howWePrevent.subtitle')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t('fraud.howWePrevent.description')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#2D2A3D] hover:border-[#D8C7AA]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#D8C7AA]/5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} text-white`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Common Types of Restaurant POS Frauds */}
      <motion.section 
        className="relative py-24 bg-gradient-to-b from-[#191B24] to-[#0F0E16] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-[#D8C7AA]/10 to-[#B59469]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-6">
              {t('fraud.commonTypes.title')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t('fraud.commonTypes.description')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {fraudTypes.map((type, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-[#2D2A3D] hover:border-[#D8C7AA]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#D8C7AA]/5">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${type.color} bg-gradient-to-br from-[#D8C7AA] to-[#B59469]`}>
                    <type.icon className="h-6 w-6 text-[#191B24]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Our System is Different - White Theme */}
      <motion.section 
        className="relative py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#D8C7AA] to-[#B59469] text-white mb-6 font-medium shadow-sm">
              {t('fraud.whyOurSystem.title')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-playfair mb-6">
              {t('fraud.whyOurSystem.subtitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('fraud.whyOurSystem.description')}
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D8C7AA] to-[#B59469] rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative grid md:grid-cols-3 gap-8 bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              {[
                {
                  title: t('fraud.whyOurSystem.feature1.title'),
                  description: t('fraud.whyOurSystem.feature1.description'),
                  icon: FileText,
                  color: "from-blue-400 to-cyan-400"
                },
                {
                  title: t('fraud.whyOurSystem.feature2.title'),
                  description: t('fraud.whyOurSystem.feature2.description'),
                  icon: Users,
                  color: "from-purple-400 to-violet-400"
                },
                {
                  title: t('fraud.whyOurSystem.feature3.title'),
                  description: t('fraud.whyOurSystem.feature3.description'),
                  icon: BarChart2,
                  color: "from-amber-400 to-orange-400"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-sm`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative py-28 overflow-hidden bg-gradient-to-br from-[#0F0E16] to-[#191B24]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D8C7AA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#D8C7AA]/10 to-[#B59469]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="relative bg-gradient-to-br from-[#D8C7AA]/5 to-[#B59469]/5 backdrop-blur-sm rounded-3xl p-12 border border-[#D8C7AA]/20 shadow-2xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D8C7AA]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#B59469]/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair text-white"
                variants={fadeInUp}
              >
                {t('fraud.cta.title')}
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                {t('fraud.cta.description')}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-6"
                variants={fadeInUp}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#D8C7AA] to-[#B59469] hover:from-[#C9B48C] hover:to-[#A58358] text-[#191B24] font-semibold hover:shadow-lg hover:shadow-[#D8C7AA]/20 transition-all duration-300 px-8 py-6 text-base"
                >
                  {t('fraud.cta.scheduleDemo')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#D8C7AA] text-[#D8C7AA] hover:bg-[#D8C7AA]/10 hover:text-[#D8C7AA] font-medium px-8 py-6 text-base"
                >
                  {t('fraud.cta.contactSales')}
                </Button>
              </motion.div>
              <motion.p 
                className="mt-6 text-sm text-slate-400"
                variants={fadeInUp}
              >
                {t('fraud.cta.TOS')}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer is now handled by the Layout component */}
      
      {/* Smooth scroll behavior */}
      <style dangerouslySetInnerHTML={{
        __html: `
          html {
            scroll-behavior: smooth;
          }
        `
      }} />
    </div>
  );
};

export default FraudPrevention;
