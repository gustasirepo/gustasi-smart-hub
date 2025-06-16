import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Camera, 
  Check, 
  ChevronRight, 
  MessageCircle, 
  Mic, 
  MoreVertical, 
  Paperclip, 
  Phone, 
  Send, 
  Smile, 
  User, 
  Video,
  X
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  time: string;
  status?: 'sent' | 'delivered' | 'read';
}

const defaultMessages: Message[] = [
  {
    id: 1,
    text: 'Hello! How can I help you today?',
    sender: 'bot',
    time: '10:00 AM',
    status: 'read'
  },
  {
    id: 2,
    text: 'I would like to place an order',
    sender: 'user',
    time: '10:02 AM',
    status: 'read'
  },
  {
    id: 3,
    text: 'Great! Would you like to see our menu?',
    sender: 'bot',
    time: '10:02 AM',
    status: 'read'
  }
];

const WhatsAppFlow = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: 'Thanks for your message! How can I assist you further?',
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'delivered'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-white text-green-600 flex items-center justify-center">
              <User className="h-6 w-6" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h2 className="font-medium">Gustasi Support</h2>
            <p className="text-xs opacity-75">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 hover:bg-white/10 rounded-full">
            <Video className="h-5 w-5" />
          </button>
          <button className="p-1 hover:bg-white/10 rounded-full">
            <Phone className="h-5 w-5" />
          </button>
          <button 
            className="p-1 hover:bg-white/10 rounded-full relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MoreVertical className="h-5 w-5" />
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Info</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Select Messages</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mute Notifications</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Clear Messages</a>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete Chat</a>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <div className="text-center text-xs text-gray-500 my-2">
          Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user' 
                  ? 'bg-green-100 text-gray-800 rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className="text-xs text-gray-500">{message.time}</span>
                {message.sender === 'user' && (
                  <span className="text-xs">
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-gray-50 p-3 border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
            <Paperclip className="h-5 w-5" />
          </button>
          <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
            <Camera className="h-5 w-5" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message"
              className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Smile className="h-5 w-5" />
            </button>
          </div>
          <button 
            type="submit" 
            className={`p-2 rounded-full ${
              newMessage.trim() 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'text-gray-400'
            }`}
            disabled={!newMessage.trim()}
          >
            {newMessage.trim() ? (
              <Send className="h-5 w-5" />
            ) : (
              <Mic className="h-5 w-5" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
              { status: 'On the Way', time: 'Estimated 40 min', active: false },
              { status: 'Delivered', time: 'Estimated 50 min', active: false }
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
      title: getTranslation('scan'),
      description: getTranslation('scanDesc'),
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
      title: getTranslation('menu'),
      description: getTranslation('menuDesc'),
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
      title: getTranslation('order'),
      description: getTranslation('orderDesc'),
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
      title: getTranslation('process'),
      description: getTranslation('processDesc'),
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
      title: getTranslation('customer'),
      description: getTranslation('customerDesc'),
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
      </div>
    </div>
  )
},
// Step 3: Order Placed
{
  id: 3,
  title: getTranslation('order'),
  description: getTranslation('orderDesc'),
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
  title: getTranslation('process'),
  description: getTranslation('processDesc'),
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
  title: getTranslation('customer'),
  description: getTranslation('customerDesc'),
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
  title: getTranslation('analytics'),
  description: getTranslation('analyticsDesc'),
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
            <Download className="h-3 w-3 mr-1" /> Export Report
          </button>
          <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
            View Detailed Analytics →
          </button>
        </div>
      </div>
    </div>
  )
}
