'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error">
      <div className="error-container">
        <div className="error-icon">
          <i className="fi fi-ts-times-hexagon"></i>
        </div>

        <div className="wrapper">
          <h2>Something went wrong!</h2>
          <button className="button-link error-link" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
