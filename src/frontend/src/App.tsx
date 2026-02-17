import { useEffect } from 'react';
import SecureHealthKeralaLandingPage from './components/SecureHealthKeralaLandingPage';

export default function App() {
  useEffect(() => {
    // Handle hash navigation on mount
    const hash = window.location.hash;
    if (hash === '#arya-vineeth-tata-aig-advisor') {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById('arya-vineeth-tata-aig-advisor');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return <SecureHealthKeralaLandingPage />;
}
