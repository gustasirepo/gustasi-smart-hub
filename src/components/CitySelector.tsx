import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ChevronDown } from 'lucide-react';

interface CitySelectorProps {
  currentCity: string;
  onCitySelect: (city: string) => void;
}

const CitySelector = ({ currentCity, onCitySelect }: CitySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const cities = [
    'Hyderabad', 'Mumbai', 'Delhi', 
    'Bangalore', 'Chennai', 'Kolkata'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCitySelect = (city: string) => {
    setSearchTerm('');
    setIsOpen(false);
    onCitySelect(city);
    navigate(`/chefs/${city.toLowerCase()}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className="flex items-center text-sm text-gray-600 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MapPin className="w-4 h-4 mr-1 text-gray-600" />
        <span className="font-semibold">{currentCity}, Telangana</span>
        <ChevronDown className={`w-4 h-4 ml-1 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
          <div className="p-3 border-b">
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Search city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {cities
              .filter(city => 
                city.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((city) => (
                <div
                  key={city}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    currentCity === city ? 'bg-amber-50 text-amber-700' : 'text-gray-700'
                  }`}
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySelector;
