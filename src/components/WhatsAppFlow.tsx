import { useState, useEffect, useCallback } from 'react';
import { t, useLanguage } from '@/utils/localization';
import { 
  ArrowRight, 
  BarChart2, 
  Check, 
  CheckCircle, 
  ChevronRight, 
  Clock, 
  Download, 
  Home, 
  MapPin, 
  Menu, 
  MessageCircle, 
  Phone, 
  QrCode, 
  ShoppingBag, 
  Smartphone, 
  Truck, 
  User, 
  UserCheck 
} from 'lucide-react';

// Step component
interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const Step = ({ icon, title, description, isActive, isCompleted, onClick }: StepProps) => {
  return (
    <div 
      className={`relative flex items-start p-4 rounded-xl cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-white shadow-lg scale-105 border-2 border-green-100' 
          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
      }`}
      onClick={onClick}
    >
      <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
        isCompleted 
          ? 'bg-green-100 text-green-600' 
          : isActive 
            ? 'bg-green-600 text-white' 
            : 'bg-gray-200 text-gray-600'
      }`}>
        {isCompleted ? <Check className="h-5 w-5" /> : icon}
      </div>
      <div className="ml-4">
        <h3 className={`text-sm font-medium ${
          isActive ? 'text-gray-900' : 'text-gray-700'
        }`}>
          {title}
        </h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="ml-auto flex items-center">
        <ChevronRight className={`h-5 w-5 ${
          isActive ? 'text-green-600' : 'text-gray-400'
        }`} />
      </div>
    </div>
  );
};

const WhatsAppFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentLang = useLanguage(); // This ensures the component re-renders on language change

  // Steps configuration
  const steps = [
    {
      id: 1,
      title: t('wa.scan') || '',
      description: t('wa.scanDesc') || '',
      icon: <QrCode className="h-5 w-5" />,
      content: (
        <div className="p-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm inline-block mb-4">
            <img 
              src="/lovable-uploads/qr.jpeg" 
              alt="QR Code" 
              className="w-48 h-48 object-contain mx-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0idy0yNCBoLTI0Ij48cGF0aCBkPSJNMyAxMWg4VjNIM3Y4em0xMC04aDh2OGg4VjNoLTh6TTMgMjFoOHYtOEgzdjh6bTEwLTZoOHY4aC04di04eiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+';
              }}
            />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{t('wa.scanHeadline')}</h3>
          <p className="text-gray-600">{t('wa.scanBody')}</p>
        </div>
      )
    },
    {
      id: 2,
      title: t('wa.chat') || '',
      description: t('wa.chatDesc') || '',
      icon: <MessageCircle className="h-5 w-5" />,
      content: (
        <div className="p-6 text-center">
          <div className="bg-green-50 p-6 rounded-full inline-flex items-center justify-center mb-6">
            <MessageCircle className="h-16 w-16 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{t('wa.chatHeadline')}</h3>
          <p className="text-gray-600 mb-6">{t('wa.chatBody')}</p>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {t('wa.openWhatsApp')}
          </a>
        </div>
      )
    },
    {
      id: 3,
      title: t('wa.menu'),
      description: t('wa.menuDesc'),
      icon: <Menu className="h-5 w-5" />,
      content: (
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">{t('wa.menuHeadline')}</h3>
          <div className="grid grid-cols-1 gap-4">
            {[t('wa.menuCat.appetizers'), t('wa.menuCat.mainCourse'), t('wa.menuCat.desserts'), t('wa.menuCat.drinks')].map((category) => (
              <div key={category} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{category}</h4>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: t('wa.order'),
      description: t('wa.orderDesc'),
      icon: <CheckCircle className="h-5 w-5" />,
      content: (
        <div className="p-6 text-center">
          <div className="bg-green-50 p-6 rounded-full inline-flex items-center justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{t('wa.orderPlaced')}</h3>
          <p className="text-gray-600 mb-6">{t('wa.orderPlacedBody')}</p>
          <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
            Order #ORD-{Math.floor(100000 + Math.random() * 900000)}
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: t('wa.track'),
      description: t('wa.trackDesc'),
      icon: <Smartphone className="h-5 w-5" />,
      content: (
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">{t('wa.trackHeadline')}</h3>
          <div className="space-y-6">
            {[
              { status: t('wa.trackStatus.placed'), time: t('wa.trackTime.justNow'), active: true },
              { status: t('wa.trackStatus.preparing'), time: t('wa.trackTime.eta10'), active: false },
              { status: t('wa.trackStatus.ready'), time: t('wa.trackTime.eta25'), active: false },
              { status: t('wa.trackStatus.onWay'), time: t('wa.trackTime.eta40'), active: false },
              { status: t('wa.trackStatus.delivered'), time: t('wa.trackTime.eta50'), active: false },
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                  step.active ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.active ? <Check className="h-4 w-4" /> : index + 1}
                </div>
                <div className="ml-4">
                  <p className={`text-sm font-medium ${
                    step.active ? 'text-green-700' : 'text-gray-700'
                  }`}>
                    {step.status}
                  </p>
                  <p className="text-xs text-gray-500">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  // Handle step change with animation
  const goToStep = (stepIndex: number) => {
    if (stepIndex === currentStep || isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(stepIndex);
      setTimeout(() => setIsAnimating(false), 100);
    }, 200);
  };

  // Define the complete flow for restaurant owners
  const allSteps = [
    // Step 1: Customer Scans QR Code
    {
      id: 1,
      title: t('wa.scan'),
      description: t('wa.scanDesc'),
      icon: <QrCode className="h-5 w-5" />,
      content: (
        <div className="p-6">
          <div className="bg-blue-50 p-6 rounded-xl mb-6 border border-blue-100">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <QrCode className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">Customer Scans QR Code</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Customers can scan from their table or your takeaway counter to start ordering
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Home className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-xs font-medium text-gray-700">Dine-in</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-xs font-medium text-gray-700">Takeaway</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Step 2: Menu Sent via WhatsApp
    {
      id: 2,
      title: t('wa.menu'),
      description: t('wa.menuDesc'),
      icon: <MessageCircle className="h-5 w-5" />,
      content: (
        <div className="p-6">
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">Interactive Menu Sent</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Customers receive your digital menu directly in WhatsApp
            </p>
            <div className="space-y-3 mt-4">
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-700">Real-time menu updates</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-700">High-quality food images</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-700">Custom categories and items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Step 3: Order Placed
    {
      id: 3,
      title: t('wa.order'),
      description: t('wa.orderDesc'),
      icon: <ShoppingBag className="h-5 w-5" />,
      content: (
        <div className="p-6">
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <ShoppingBag className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">Order Confirmed</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Customer completes their order through WhatsApp
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-500">Order #</span>
                <span className="text-xs font-mono font-medium">ORD-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-500">Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Confirmed
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-gray-500">Time</span>
                <span className="text-xs text-gray-700">
                  {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Step 4: Order Processing
    {
      id: 4,
      title: t('wa.process'),
      description: t('wa.processDesc'),
      icon: <Clock className="h-5 w-5" />,
      content: (
        <div className="p-6">
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">Order Processing</h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Kitchen staff receives and prepares the order
            </p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">Order Received</span>
                  <span className="text-green-600 font-medium">Completed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">Food Preparation</span>
                  <span className="text-amber-600 font-medium">In Progress</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-amber-400 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">Ready for Pickup/Delivery</span>
                  <span className="text-gray-500">Pending</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-300 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-amber-100">
              <p className="text-xs text-center text-gray-500">
                Estimated completion: <span className="font-medium">15-20 minutes</span>
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Step 5: Customer Data Captured
    {
      id: 5,
      title: t('wa.customer'),
      description: t('wa.customerDesc'),
      icon: <UserCheck className="h-5 w-5" />,
      content: (
        <div className="p-6">
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <UserCheck className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">Customer Profile Created</h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Valuable customer data captured for future marketing
            </p>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h4 className="text-sm font-medium text-gray-700">Customer Information</h4>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center">
                  <User className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">John D.</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Table 12 / Takeaway</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">First visit: Today</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between">
                <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
                  View Full Profile
                </button>
                <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
                  Send Special Offer
                </button>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-white p-2 rounded border border-gray-200">
                <div className="font-medium text-gray-900">3</div>
                <div className="text-gray-500">Orders</div>
              </div>
              <div className="bg-white p-2 rounded border border-gray-200">
                <div className="font-medium text-gray-900">₹2,450</div>
                <div className="text-gray-500">Total Spent</div>
              </div>
              <div className="bg-white p-2 rounded border border-gray-200">
                <div className="font-medium text-gray-900">4.8★</div>
                <div className="text-gray-500">Avg. Rating</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Step 6: Business Analytics
    {
      id: 6,
      title: t('wa.analytics'),
      description: t('wa.analyticsDesc'),
      icon: <BarChart2 className="h-5 w-5" />,
      content: (
        <div className="p-6">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <BarChart2 className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">Business Insights</h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Track performance and customer behavior
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium text-gray-700">Today's Orders</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    +12% from yesterday
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900">47</div>
                <div className="h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">Avg. Order Value</div>
                  <div className="font-bold text-gray-900">₹1,250</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">Repeat Customers</div>
                  <div className="font-bold text-gray-900">68%</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Popular Items</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Butter Chicken', orders: 32 },
                    { name: 'Garlic Naan', orders: 28 },
                    { name: 'Paneer Tikka', orders: 24 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700 flex-1">{item.name}</span>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                        {item.orders} orders
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-blue-100 flex justify-between">
              <button className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center">
                <Download className="h-3 w-3 mr-1" /> {t('wa.exportReport')}
              </button>
              <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                {t('wa.viewDetailedAnalytics')}
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Auto-advance steps (for demo purposes)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-green-600 p-6 text-white">
        <h2 className="text-2xl font-bold">{t('digitalOrderingSystem')}</h2>
        <p className="text-green-100">{t('wa.subtitle')}</p>
      </div>

      {/* Progress */}
      <div className="px-6 pt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-600 h-2 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 text-right mt-1">
          {t('wa.stepIndicator', { current: currentStep + 1, total: steps.length })}
        </p>
      </div>

      <div className="md:flex">
        {/* Steps - Left Side */}
        <div className="w-full md:w-1/3 p-6 border-r border-gray-200">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <Step
                key={step.id}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isActive={index === currentStep}
                isCompleted={index < currentStep}
                onClick={() => goToStep(index)}
              />
            ))}
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="w-full md:w-2/3">
          <div className={`p-6 transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}>
            {steps[currentStep].content}
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between">
            <button
              onClick={() => goToStep((currentStep - 1 + steps.length) % steps.length)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentStep === 0}
            >
              {t('wa.previous')}
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: steps.length }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToStep(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentStep ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={t('wa.goToStep', { step: i + 1 })}
                />
              ))}
            </div>
            <button
              onClick={() => goToStep((currentStep + 1) % steps.length)}
              className="px-4 py-2 text-sm font-medium text-green-600 hover:text-green-800"
            >
              {currentStep === steps.length - 1 ? t('wa.finish') : t('wa.next')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFlow;



