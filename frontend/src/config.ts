// Environment configuration
// Vite exposes env vars with VITE_ prefix

export const config = {
    // Use empty string (relative URLs) in production when VITE_API_BASE_URL is not set
    // This allows the frontend to call the backend on the same domain
    // For local development, VITE_API_BASE_URL should be set to 'http://localhost:8000' in .env.development
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '',
} as const;
