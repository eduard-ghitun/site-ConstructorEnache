import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }

      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location]);

  return null;
}

export default ScrollManager;
