// Google Analytics 4 Configuration
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = (): void => {
  if (typeof window === 'undefined') return;

  // Check if gtag script already exists
  if (document.getElementById('ga-gtag')) return;

  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script1.id = 'ga-gtag';
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_title: document.title,
      page_path: window.location.pathname,
      anonymize_ip: true,
    });
  `;
  document.head.appendChild(script2);
};

// Track page views
export const trackPageView = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string): void => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string): void => {
  trackEvent('cta_click', 'engagement', ctaName);
};

// Track phone calls
export const trackPhoneCall = (phoneNumber: string): void => {
  trackEvent('phone_call', 'contact', phoneNumber);
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (): void => {
  trackEvent('whatsapp_click', 'contact', 'WhatsApp Chat');
};

// Check if user has given consent
export const hasConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookieConsent') === 'accepted';
};

// Remove Google Analytics (if user revokes consent)
export const removeGA = (): void => {
  if (typeof window === 'undefined') return;

  // Remove gtag script
  const gtagScript = document.getElementById('ga-gtag');
  if (gtagScript) gtagScript.remove();

  // Remove all GA cookies
  const cookies = document.cookie.split(';');
  cookies.forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (name.startsWith('_ga')) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });

  // Remove dataLayer
  if (window.dataLayer) {
    window.dataLayer = [];
  }
};

// Declare gtag type for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
