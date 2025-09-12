import { useState } from 'react';
import { submitDemoRequest } from '@/lib/api';

interface UseDemoFormProps {
  onSuccess?: (data: any) => void;
  onError?: (error: string, details?: any) => void;
}

export function useDemoForm({ onSuccess, onError }: UseDemoFormProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData: Record<string, any>) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await submitDemoRequest(formData);

      if (result.success) {
        setSuccess(true);
        if (onSuccess) {
          onSuccess(result.data);
        }
      } else {
        setError(result.error || 'Failed to submit form');
        if (onError) {
          onError(result.error || 'Failed to submit form', result.details);
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      if (onError) {
        onError(errorMessage, err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
    setIsSubmitting(false);
  };

  return {
    submitForm,
    isSubmitting,
    error,
    success,
    reset,
  };
}
