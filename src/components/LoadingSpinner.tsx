export default function LoadingSpinner() {
  // Inline style for the spinning animation
  const spinAnimation = {
    animation: 'spin 1s linear infinite',
  };

  // Inline style for the pulsing text
  const getPulseAnimation = (index: number) => ({
    animation: `pulse 1.5s infinite ${index * 0.1}s`,
    display: 'inline-block',
    minWidth: '0.5rem',
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Animated outer ring */}
        <div className="w-20 h-20 border-4 border-amber-100 rounded-full">
          {/* Animated spinner */}
          <div 
            className="absolute top-0 left-0 w-full h-full border-4 border-t-amber-600 border-r-transparent border-b-transparent border-l-transparent rounded-full"
            style={spinAnimation}
          ></div>
          
          {/* Center logo or icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-lg">
              <svg 
                className="w-6 h-6 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M13 6.00003C13 5.44774 12.5523 5.00003 12 5.00003C11.4477 5.00003 11 5.44774 11 6.00003V11H6C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6.00003Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Loading text with animation */}
        <div className="mt-6 flex justify-center space-x-1">
          {['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'].map((char, index) => (
            <span 
              key={index}
              className="text-slate-700 font-medium text-sm"
              style={getPulseAnimation(index)}
            >
              {char}
            </span>
          ))}
        </div>
        
        {/* Global styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.3; transform: translateY(0); }
              50% { opacity: 1; transform: translateY(-3px); }
            }
          `
        }} />
      </div>
    </div>
  );
}
