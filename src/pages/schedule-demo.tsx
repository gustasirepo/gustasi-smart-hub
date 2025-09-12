import { DemoForm } from '@/components/forms/DemoForm';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from '@/components/ui/toaster';

export default function ScheduleDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Schedule a Demo</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of Gustasi Smart Hub. Fill out the form below and our team will get in touch to schedule your personalized demo.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Request a Demo</h2>
            <p className="text-gray-600">Fill in your details and we'll contact you to schedule a demo at your convenience.</p>
          </div>
          
          <DemoForm 
            onSuccess={() => {
              // This will be called when the form is submitted successfully
              console.log('Demo request submitted successfully!');
            }}
          />
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Have questions?</h3>
          <p className="text-gray-600">
            Email us at{' '}
            <a href="mailto:support@gustasi.com" className="text-amber-600 hover:text-amber-700 font-medium">
              support@gustasi.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}