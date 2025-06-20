import { Loader2 } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0E16] bg-opacity-90 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* Animated outer ring */}
          <div className="w-20 h-20 border-4 border-amber-100 rounded-full">
            {/* Animated spinner */}
            <div className="absolute top-0 left-0 w-full h-full border-4 border-t-amber-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin">
            </div>
            
            {/* Center logo or icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-lg">
                <Loader2 className="w-6 h-6 text-white animate-spin" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-amber-100 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
