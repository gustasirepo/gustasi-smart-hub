import React, { useState, useEffect } from 'react';
import { useLanguage, t } from '@/utils/localization';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';

interface ContactUsProps {
  defaultTab?: 'contact' | 'demo';
}

interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  time: string;
  notes: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  interest: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ defaultTab = 'contact' }) => {
  const [activeTab, setActiveTab] = useState<'contact' | 'demo'>(defaultTab);
  const currentLang = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  
  // Update active tab when defaultTab prop changes
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  // Form state for Contact tab
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '+91 ', // Default Indian country code
    message: '',
    interest: ''
  });
  
  // Form state for Demo tab
  const [demoData, setDemoData] = useState<DemoFormData>({
    name: '',
    email: '',
    phone: '+91 ', // Default Indian country code
    time: '',
    notes: ''
  });
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDemoSubmitted, setIsDemoSubmitted] = useState(false);
  
  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    // Allow only numbers and + sign
    const cleaned = value.replace(/[^0-9+]/g, '');
    
    // Ensure it starts with +91
    if (!cleaned.startsWith('+91') && !cleaned.startsWith('91')) {
      return '+91 ' + cleaned.replace(/^\+?91?/, '');
    }
    
    // Format as +91 XXXXXXXXXX
    const match = cleaned.match(/^(\+?91|91|0)?(\d{0,10})/);
    if (match) {
      const number = match[2];
      if (number.length === 0) return '+91 ';
      if (number.length <= 5) return `+91 ${number}`;
      if (number.length <= 10) return `+91 ${number.slice(0, 5)} ${number.slice(5)}`;
      return `+91 ${number.slice(0, 5)} ${number.slice(5, 10)}`;
    }
    return value;
  };

  // Form field translations
  const formTranslations = {
    // Contact Form
    name: t('form.name') || 'Name *',
    email: t('form.email') || 'Email *',
    phone: t('form.phone') || 'Phone',
    interest: t('form.interest') || "I'm interested in...",
    message: t('form.message') || 'Message / Requirements *',
    sendMessage: t('form.sendMessage') || 'Send Message',
    
    // Demo Form
    fullName: t('form.fullName') || 'Full Name *',
    preferredTime: t('form.preferredTime') || 'Preferred Time *',
    selectDate: t('form.selectDate') || 'Select a Date *',
    additionalNotes: t('form.additionalNotes') || 'Additional Notes',
    confirmDemo: t('form.confirmDemo') || 'Confirm Demo Booking',
    
    // Common
    yourName: t('form.yourName') || 'Your name',
    yourEmail: t('form.yourEmail') || 'your.email@example.com',
    phonePlaceholder: t('form.phonePlaceholder') || '+1 (___) ___-____',
    tellUsMore: t('form.tellUsMore') || 'Tell us how we can help you...',
    
    // Select Options
    selectTime: t('form.selectTime') || 'Select a time',
    pickDate: t('form.pickDate') || 'Pick a date',
    
    // Success Messages
    thankYou: t('messages.thankYou') || 'Thank You!',
    messageReceived: t('messages.messageReceived') || "We've received your message and will get back to you soon.",
    sendAnother: t('actions.sendAnother') || 'Send Another Message',
    demoBooked: t('messages.demoBooked') || 'Demo Booked Successfully!',
    demoConfirmation: t('messages.demoConfirmation') || "We've sent a confirmation to your email with the meeting details.",
    backToContact: t('actions.backToContact') || 'Back to Contact',
    
    // Tab Labels
    contactUs: t('tabs.contactUs') || 'Contact Us',
    bookDemo: t('tabs.bookDemo') || 'Book Demo',
    
    // Select Options
    posSystem: t('options.posSystem') || 'POS System',
    onlineOrders: t('options.onlineOrders') || 'Online Orders',
    inventory: t('options.inventory') || 'Inventory Management',
    feedback: t('options.feedback') || 'Feedback',
    allServices: t('options.allServices') || 'All Services',
    
    // Demo Focus
    demoFocus: t('form.demoFocus') || "Tell us what you'd like to focus on during the demo..."
  };

  // Available time slots for demo with translations
  const timeSlots = [
    t('timeSlots.nineAM') || '09:00 AM',
    t('timeSlots.tenAM') || '10:00 AM',
    t('timeSlots.elevenAM') || '11:00 AM',
    t('timeSlots.twelvePM') || '12:00 PM',
    t('timeSlots.onePM') || '01:00 PM',
    t('timeSlots.twoPM') || '02:00 PM',
    t('timeSlots.threePM') || '03:00 PM',
    t('timeSlots.fourPM') || '04:00 PM'
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '+91 ',
        message: '',
        interest: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSending(false);
    }
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate) {
      setSubmitError('Please select a date');
      return;
    }
    
    if (!demoData.time) {
      setSubmitError('Please select a time');
      return;
    }
    
    setIsSending(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/send-demo-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...demoData,
          date: selectedDate.toISOString().split('T')[0]
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to book demo');
      }
      
      setIsDemoSubmitted(true);
      setDemoData({
        name: '',
        email: '',
        phone: '+91 ',
        time: '',
        notes: ''
      });
      setSelectedDate(undefined);
    } catch (error) {
      console.error('Error booking demo:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to book demo');
    } finally {
      setIsSending(false);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData(prev => ({
        ...prev,
        [name]: formatPhoneNumber(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleDemoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setDemoData(prev => ({
        ...prev,
        [name]: formatPhoneNumber(value)
      }));
    } else {
      setDemoData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Update document title based on active tab and language
  useEffect(() => {
    document.title = activeTab === 'contact' 
      ? t('contact.pageTitle') || 'Contact Us | Gustasi POS'
      : t('demo.pageTitle') || 'Schedule a Demo | Gustasi POS';
  }, [activeTab, currentLang]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0E16] via-[#191B24] to-[#0F0E16] text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {activeTab === 'contact' 
              ? t('contact.hero.title') || "Let's Talk – We're Here to Help"
              : t('demo.hero.title') || 'Schedule a Live Demo'}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {activeTab === 'contact' 
              ? t('contact.hero.subtitle') || "Have questions? Send us a message and we'll get back to you soon."
              : t('demo.hero.subtitle') || 'Book a personalized demo to see how Gustasi can transform your restaurant operations.'}
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
                {formTranslations.contactUs}
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'demo' 
                    ? 'bg-amber-600 text-white' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {formTranslations.bookDemo}
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
                  <h3 className="text-2xl font-bold mb-2">{formTranslations.thankYou}</h3>
                  <p className="text-slate-300 mb-8">{formTranslations.messageReceived}</p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    {formTranslations.sendAnother}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        {formTranslations.name}
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
                        {formTranslations.email}
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
                        {formTranslations.phone}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleContactChange}
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="+91 98765 43210"
                        maxLength={16} // +91 12345 67890
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-slate-300 mb-2">
                        {formTranslations.interest}
                      </label>
                      <Select 
                        value={formData.interest}
                        onValueChange={(value) => setFormData({...formData, interest: value})}
                      >
                        <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder={formTranslations.interest} />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 text-white">
                          <SelectItem value="pos">{formTranslations.posSystem}</SelectItem>
                          <SelectItem value="online-orders">{formTranslations.onlineOrders}</SelectItem>
                          <SelectItem value="inventory">{formTranslations.inventory}</SelectItem>
                          <SelectItem value="feedback">{formTranslations.feedback}</SelectItem>
                          <SelectItem value="all">{formTranslations.allServices}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      {formTranslations.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleContactChange}
                      className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                      placeholder={formTranslations.tellUsMore}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
                    >
                      {formTranslations.sendMessage}
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
                  <h3 className="text-2xl font-bold mb-2">{formTranslations.demoBooked}</h3>
                  <p className="text-slate-300 mb-8">{formTranslations.demoConfirmation}</p>
                  <Button 
                    onClick={() => {
                      setIsDemoSubmitted(false);
                      setActiveTab('contact');
                    }}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    {formTranslations.backToContact}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="demo-name" className="block text-sm font-medium text-slate-300 mb-2">
                        {formTranslations.fullName}
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
                        {formTranslations.email}
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
                        {formTranslations.phone}
                      </label>
                      <Input
                        id="demo-phone"
                        name="phone"
                        type="tel"
                        required
                        value={demoData.phone}
                        onChange={handleDemoChange}
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="+91 98765 43210"
                        maxLength={16} // +91 12345 67890
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
                        <option value="">{formTranslations.selectTime}</option>
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
                            {selectedDate ? format(selectedDate, "PPP") : <span>{formTranslations.pickDate}</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto max-w-[var(--radix-popover-trigger-width)] sm:max-w-none p-0 bg-slate-800 border-slate-700">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                            className="bg-slate-800 text-white w-full min-w-[300px]"
                            classNames={{
                              nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                              nav_button_previous: "absolute left-1",
                              nav_button_next: "absolute right-1",
                              month: "space-y-4 p-3 w-full",
                              caption: "flex justify-center pt-1 relative items-center mb-4",
                              caption_label: "text-sm font-medium",
                              table: "w-full border-collapse space-y-1",
                              head_row: "flex justify-between mb-2",
                              head_cell: "text-slate-400 rounded-md w-8 text-xs font-normal",
                              row: "flex w-full mt-1",
                              cell: "h-8 w-8 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-slate-700/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                              day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-slate-700/50 rounded-md flex items-center justify-center transition-colors",
                              day_selected: "bg-amber-600/80 hover:bg-amber-600 text-white focus:bg-amber-600 focus:text-white",
                              day_today: "bg-slate-700 text-white",
                              day_range_middle: "bg-slate-700/50",
                              day_disabled: "text-slate-500 hover:bg-transparent",
                              day_outside: "text-slate-500/50 hover:bg-transparent",
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
                        placeholder={formTranslations.demoFocus}
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    {submitError && (
                      <div className="text-red-400 text-sm text-center">
                        {submitError}
                      </div>
                    )}
                    <Button 
                      type="submit"
                      disabled={!selectedDate || !demoData.time || isSending}
                      className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative"
                    >
                      {isSending ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t('form.sending') || 'Sending...'}
                        </>
                      ) : (
                        formTranslations.confirmDemo
                      )}
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
