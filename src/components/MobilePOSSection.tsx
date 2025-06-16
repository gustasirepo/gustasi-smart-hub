import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export function MobilePOSSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images with different screens
  const screenshots = [
    'https://placehold.co/360x780/4f46e5/ffffff?text=POS+Dashboard',
    'https://placehold.co/360x780/7c3aed/ffffff?text=Orders+Screen',
    'https://placehold.co/360x780/8b5cf6/ffffff?text=Menu+Management',
    'https://placehold.co/360x780/a78bfa/ffffff?text=Sales+Reports',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="mobile-pos" className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={item} className="space-y-4">
              <div className="inline-block mb-6 transform hover:scale-105 transition-transform duration-300">
                <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  🚀 Now Available on Mobile
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-gray-800 to-gray-700 dark:from-white dark:via-white dark:to-[#F5F2ED] bg-clip-text text-transparent">
                  The Future of Restaurant Management
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-orange-500 dark:from-[#D8C7AA] dark:via-[#C9B48C] dark:to-[#B59469] bg-clip-text text-transparent">
                  Is in Your Hands
                </span>
              </h2>
            </motion.div>
            
            <motion.div variants={item} className="space-y-6">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Transform your smartphone into a powerful POS system. Manage orders, track inventory, and grow your business—all from the palm of your hand.
              </p>
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="w-8 h-0.5 bg-blue-400"></div>
                <span className="text-sm font-medium">NO HARDWARE REQUIRED</span>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="space-y-4 pt-4">
              {[
                'Accept Swiggy & Zomato Orders from Mobile',
                'Receive Online Orders via Gustasi',
                'Print Bills & KOTs via Bluetooth Printer',
                'Manage Menu, Orders & Billing — Anytime, Anywhere'
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={item} className="pt-4">
              <a
                href="https://www.gustasi.com/Signup"
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-amber-500/20"
              >
                Sign Up Now
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: inView ? 1 : 0, 
              x: inView ? 0 : 50,
              transition: { duration: 0.8, delay: 0.3 }
            }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-[280px] md:max-w-[320px]">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-20 sm:opacity-30 blur-lg sm:blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-1.5 sm:p-2 shadow-2xl border-6 sm:border-8 border-gray-800 overflow-hidden">
                <div className="bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Phone mockup with screenshot carousel */}
                  <div className="aspect-[9/18] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center bg-gray-900"
                      >
                        <img 
                          src={screenshots[currentSlide]} 
                          alt={`Gustasi POS Screenshot ${currentSlide + 1}`}
                          className="w-full h-full object-cover object-top"
                          style={{ objectFit: 'cover', objectPosition: 'top center' }}
                          onError={(e) => {
                            // Extra fallback in case the placeholder fails
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/360x700/${['4f46e5', '7c3aed', '8b5cf6', 'a78bfa'][currentSlide]}/ffffff?text=Gustasi+POS+${['Dashboard', 'Orders', 'Menu', 'Reports'][currentSlide]}`;
                          }}
                          loading="eager"
                          fetchPriority="high"
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Navigation Arrows */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center z-10 hover:bg-black/70 transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center z-10 hover:bg-black/70 transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                      {screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentSlide ? 'bg-white w-6' : 'bg-white/50 w-2'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification */}
              <motion.div 
                className="absolute -right-8 -top-4 bg-white rounded-xl shadow-lg p-3 w-48 z-10"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    delay: 1.5,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  } 
                } : {}}
              >
                <div className="flex items-start space-x-2">
                  <div className="bg-green-100 p-1.5 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-xs font-medium">New Order</p>
                    <p className="text-xs text-gray-500">Table #5 - $42.50</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
