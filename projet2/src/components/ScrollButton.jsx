import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToDown = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <div className="scrollToDown">
          <button
            className="fixed bottom-5 right-7 z-50 cursor-pointer p-4"
            onClick={handleScrollToDown}
          >
            <img src="/icons/new-up-arrow.png" alt="scrollToDown" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollButton;