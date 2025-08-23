import { t, useLanguage } from "@/utils/localization";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Clock, BarChart4, Sparkles } from 'lucide-react';

const SuccessStories = () => {
  const currentLang = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stories = [
    {
      metric: "230%",
      description: t("success.growth"),
      company: t("success.company.restaurantB"),
      icon: (
        <div className="relative w-14 h-14 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          <div className="relative z-10 bg-gradient-to-r from-amber-400 to-orange-400 p-3 rounded-xl text-white">
            <TrendingUp className="w-8 h-8" />
          </div>
        </div>
      )
    },
    {
      metric: "800 hrs",
      description: t("success.time"),
      company: t("success.company.cafeCentral"),
      icon: (
        <div className="relative w-14 h-14 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <div className="relative z-10 bg-gradient-to-r from-blue-400 to-cyan-400 p-3 rounded-xl text-white">
            <Clock className="w-8 h-8" />
          </div>
        </div>
      )
    },
    {
      metric: "25+",
      description: t("success.reports"),
      company: t("success.company.hotelPlaza"),
      icon: (
        <div className="relative w-14 h-14 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          <div className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-400 p-3 rounded-xl text-white">
            <BarChart4 className="w-8 h-8" />
          </div>
        </div>
      )
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#0F0E16] via-[#191B24] to-[#0F0E16]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-[#D8C7AA]/15 to-[#B59469]/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#B59469]/10 to-[#D8C7AA]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D8C7AA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-white to-[#F5F2ED] bg-clip-text text-transparent">
                {t("success.title")}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("success.subtitle")}
            </p>
          </motion.div>

          <motion.div variants={container} className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-amber-600/30 transition-all duration-300 group"
              >
                <motion.div 
                  className="mb-6 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {story.icon}
                </motion.div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
                  {story.metric}
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  {story.description}
                </p>
                <p className="text-amber-400 font-medium">
                  — {story.company}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
