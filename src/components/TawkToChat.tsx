import { useState, useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    console.log('TawkToChat component mounted');
    return () => console.log('TawkToChat component unmounted');
  }, []);
  const [isHovered, setIsHovered] = useState(false);

  const openChat = () => {
    // Open Tawk.to in a new window
    window.open(
      'https://tawk.to/chat/5f644095f0e7167d00117318/1j4vgptkl',
      'tawkto',
      'width=400,height=500,resizable=yes,scrollbars=yes'
    );
  };

  console.log('Rendering TawkToChat component');
  
  return (
    <div 
      className="fixed bottom-6 right-6 z-[9999] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={openChat}
      id="tawkto-chat-button"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 9999,
        backgroundColor: 'red', // Make it highly visible for testing
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="relative">
        {/* Chat bubble */}
        <div className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-110">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
            />
          </svg>
        </div>
        
        {/* Label that appears on hover */}
        {isHovered && (
          <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 bg-gray-800 text-white text-sm font-medium px-3 py-1 rounded whitespace-nowrap shadow-lg">
            Chat with us!
          </div>
        )}
      </div>
    </div>
  );
};

export default TawkToChat;
