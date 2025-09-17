import React, { useState, useEffect } from 'react';

interface RollingNumberProps {
  value: number | string;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const RollingNumber: React.FC<RollingNumberProps> = ({
  value,
  duration = 2000,
  className = '',
  prefix = '',
  suffix = ''
}) => {
  const [displayValue, setDisplayValue] = useState<number | string>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    
    // If the value is a string, just display it directly
    if (typeof value === 'string') {
      setDisplayValue(value);
      return;
    }

    // For numbers, animate the counting
    const start = typeof displayValue === 'number' ? displayValue : 0;
    const end = value;
    const range = end - start;
    const minFrameDuration = 16; // ~60fps
    const totalFrames = Math.ceil(duration / minFrameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentValue = Math.floor(start + (range * progress));
      
      setDisplayValue(currentValue);
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setIsAnimating(false);
      }
    }, minFrameDuration);

    return () => clearInterval(counter);
  }, [value, duration]);

  return (
    <span className={`inline-block transition-all duration-300 ${isAnimating ? 'text-amber-400' : ''} ${className}`}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

export default RollingNumber;
