import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScheduleDemoRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Tawk.to chat immediately
    window.location.href = 'https://tawk.to/chat/5f644095f0e7167d00117318/1ij8sc0vj';
  }, [navigate]);

  return null; // No UI, just redirect
};

export default ScheduleDemoRedirect;
