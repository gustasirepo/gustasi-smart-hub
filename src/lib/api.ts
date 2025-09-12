interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  details?: any;
}

export async function submitDemoRequest(
  data: Record<string, any>
): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/demo-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to submit demo request',
        details: result.details,
      };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting demo request:', error);
    return {
      success: false,
      error: 'Network error. Please try again later.',
      details: error,
    };
  }
}
