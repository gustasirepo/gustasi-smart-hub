import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/utils/localization';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface ContactUsProps {
  defaultTab?: 'contact' | 'demo';
}

const ContactUs: React.FC<ContactUsProps> = ({ defaultTab = 'contact' }) => {
  const currentLang = useLanguage();
  const [activeTab, setActiveTab] = useState<'contact' | 'demo'>(defaultTab);
  
  // Update active tab when defaultTab prop changes
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: '',
  });

  // Demo booking state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [demoData, setDemoData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDemoSubmitted, setIsDemoSubmitted] = useState(false);
  
  // Available time slots for demo
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: '',
    });
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) return;
    
    // Handle demo booking submission
    console.log('Demo booked:', { 
      ...demoData, 
      date: selectedDate.toISOString().split('T')[0],
      time: demoData.time
    });
    
    setIsDemoSubmitted(true);
    // Reset form
    setDemoData({
      name: '',
      email: '',
      phone: '',
      time: '',
      notes: ''
    });
    setSelectedDate(undefined);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleDemoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDemoData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0E16] via-[#191B24] to-[#0F0E16] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {activeTab === 'contact' ? "Let's Talk – We're Here to Help" : "Schedule a Live Demo"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {activeTab === 'contact' 
              ? "Have questions? Send us a message and we'll get back to you soon."
              : "Book a personalized demo to see how Gustasi can transform your restaurant operations."}
          </p>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'contact' 
                    ? 'bg-amber-600 text-white' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'demo' 
                    ? 'bg-amber-600 text-white' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          {activeTab === 'contact' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-slate-300 mb-8">We've received your message and will get back to you soon.</p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleContactChange}
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleContactChange}
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleContactChange}
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="+1 (___) ___-____"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-slate-300 mb-2">
                        I'm interested in...
                      </label>
                      <Select 
                        value={formData.interest}
                        onValueChange={(value) => setFormData({...formData, interest: value})}
                      >
                        <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 text-white">
                          <SelectItem value="pos">POS System</SelectItem>
                          <SelectItem value="online-orders">Online Orders</SelectItem>
                          <SelectItem value="inventory">Inventory Management</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="all">All Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message / Requirements *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleContactChange}
                      className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Demo Booking Form */}
          {activeTab === 'demo' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10">
              {isDemoSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Demo Booked Successfully!</h3>
                  <p className="text-slate-300 mb-8">We've sent a confirmation to your email with the meeting details.</p>
                  <Button 
                    onClick={() => {
                      setIsDemoSubmitted(false);
                      setActiveTab('contact');
                    }}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    Back to Contact
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="demo-name" className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="demo-name"
                        name="name"
                        type="text"
                        required
                        value={demoData.name}
                        onChange={handleDemoChange}
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="demo-email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="demo-email"
                        name="email"
                        type="email"
                        required
                        value={demoData.email}
                        onChange={handleDemoChange}
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="demo-phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="demo-phone"
                        name="phone"
                        type="tel"
                        required
                        value={demoData.phone}
                        onChange={handleDemoChange}
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="+1 (___) ___-____"
                      />
                    </div>
                    <div>
                      <label htmlFor="demo-time" className="block text-sm font-medium text-slate-300 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="demo-time"
                        name="time"
                        required
                        value={demoData.time}
                        onChange={(e) => setDemoData({...demoData, time: e.target.value})}
                        className="flex h-10 w-full rounded-md border border-slate-600 bg-slate-700 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Select a Date *
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-slate-700 border-slate-600 text-white hover:bg-slate-600 hover:text-white",
                              !selectedDate && "text-slate-400"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-700">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                            className="bg-slate-800 text-white"
                            classNames={{
                              day_selected: "bg-amber-600 hover:bg-amber-700 text-white",
                              day_today: "bg-slate-700 text-white",
                              day_range_middle: "bg-slate-700",
                              day_disabled: "text-slate-500",
                              day_outside: "text-slate-500",
                              day_hidden: "invisible"
                            }}
                            disabled={(date) => {
                              // Disable past dates
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today;
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <label htmlFor="demo-notes" className="block text-sm font-medium text-slate-300 mb-2">
                        Additional Notes
                      </label>
                      <Textarea
                        id="demo-notes"
                        name="notes"
                        rows={3}
                        value={demoData.notes}
                        onChange={handleDemoChange}
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Tell us what you'd like to focus on during the demo..."
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit"
                      disabled={!selectedDate || !demoData.time}
                      className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Confirm Demo Booking
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
