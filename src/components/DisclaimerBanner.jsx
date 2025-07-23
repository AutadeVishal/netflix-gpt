import React, { useState } from 'react';

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full bg-blue-100 border-t border-blue-200 text-blue-800 p-3 z-50 flex justify-between items-center">
      <p className="text-center text-sm flex-grow">
        <strong>For Educational Purposes:</strong> This is a personal portfolio project inspired by streaming service UIs to demonstrate web development skills. It is not affiliated with Netflix.
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 px-3 py-1 text-sm font-semibold bg-blue-200 text-blue-800 rounded-lg hover:bg-blue-300 transition-colors"
        aria-label="Dismiss"
      >
        &times;
      </button>
    </div>
  );
}
