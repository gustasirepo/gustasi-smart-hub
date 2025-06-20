import { useLanguage } from "@/utils/localization";
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
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
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
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const currentLang = useLanguage();

  const fraudTypes = [
    {
      title: "Order Tampering",
      description: "Bills altered after payment or before kitchen punch",
      icon: FileText,
      color: "text-blue-500"
    },
    {
      title: "Fake Discounts/Voids",
      description: "Unauthorized reductions to steal money",
      icon: AlertTriangle,
      color: "text-amber-500"
    },
    {
      title: "Inventory Manipulation",
      description: "Falsified consumption or wastage entries",
      icon: Boxes,
      color: "text-emerald-500"
    },
    {
      title: "Unauthorized Refunds",
      description: "Refunding to friends or dummy customers",
      icon: RefreshCw,
      color: "text-rose-500"
    },
    {
      title: "Parallel Billing",
      description: "Duplicate bills or ghost orders",
      icon: Copy,
      color: "text-purple-500"
    },
    {
      title: "Shift ID Abuse",
      description: "Using another staff's credentials to hide identity",
      icon: UserCog,
      color: "text-cyan-500"
    }
  ];

  const features = [
    {
      title: "Staff Accounts & Permissions",
      description: "Role-based access control for all sensitive actions",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Fraud Debugging Dashboard",
      description: "Complete audit trail of all system activities",
      icon: Eye,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Real-Time Alerts",
      description: "Instant notifications for suspicious activities",
      icon: Bell,
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className={cn("min-h-screen", isDark ? "bg-background" : "bg-[#faf8f5]")}>
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-playfair"
              variants={fadeInUp}
            >
              Eliminate Restaurant Fraud with Confidence
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Prevent internal theft, order tampering, and inventory misuse with smart detection and full visibility.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeInUp}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book a Demo with Our Fraud Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/30" />
        </div>
      </motion.section>

      {/* How We Prevent Fraud */}
      <motion.section 
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              Fraud Prevention
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-playfair mb-4">
              How We Prevent Fraud
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools to protect your restaurant's revenue and integrity
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <div className={`h-1 w-full bg-gradient-to-r ${feature.color}`}></div>
                  <CardHeader>
                    <div className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center bg-gradient-to-br ${feature.color} text-white`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl mt-4 text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Common Types of Restaurant POS Frauds */}
      <motion.section 
        className="py-20 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-playfair mb-4">
              Common Types of Restaurant POS Frauds
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about the most common fraud types in the restaurant industry
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {fraudTypes.map((type, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20"
              >
                <div className={`${type.color} mb-4`}>
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Our System is Different */}
      <motion.section 
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-playfair mb-4">
              Why Our System is Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced protection tailored for the modern restaurant
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                title: "Transparent Audit Logs",
                description: "Every transaction and modification is logged with timestamps and user details",
                icon: FileText,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "User Accountability",
                description: "Each action is tied to a specific staff member with role-based permissions",
                icon: Users,
                color: "from-purple-500 to-violet-500"
              },
              {
                title: "Smart Detection",
                description: "AI-powered analysis to detect unusual patterns and potential fraud",
                icon: BarChart2,
                color: "from-amber-500 to-orange-500"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative py-24 overflow-hidden bg-gradient-to-r from-primary to-primary/90 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair"
            variants={fadeInUp}
          >
            Protect Your Restaurant from Day One
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Join thousands of restaurants that trust our system to safeguard their business
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeInUp}
          >
            <Button 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 shadow-lg"
            >
              Talk to Fraud Expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-background text-background hover:bg-background/10 hover:text-background"
            >
              Explore Full POS Features
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-30" />
      </motion.section>

      <Footer />
      
      {/* Smooth scroll behavior */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default FraudPrevention;
