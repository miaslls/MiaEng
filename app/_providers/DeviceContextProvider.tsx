'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Device = 'desktop' | 'tablet' | 'mobile';

const mobileMaxWidth = 700;
const tabletMaxWidth = 1120;

export const DeviceContext = createContext<Device | null>(null);

export function useDevice() {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error(
      'useDevice must be used within a component wrapped with DeviceProvider. ' +
        'DeviceProvider sets up the device context based on window width, ' +
        'ensuring accurate device type information for responsive behavior.',
    );
  }

  return context;
}

interface ProviderProps {
  children: React.ReactNode;
}

export default function DeviceProvider({ children }: ProviderProps) {
  const [device, setDevice] = useState<Device | null>(null);

  // useEffect to dynamically update the device type based on window width and set the corresponding value in the DeviceContext. The device type is determined using breakpoints for mobile, tablet, and desktop.

  useEffect(() => {
    // Function to update the device type
    const updateDevice = () => {
      const windowInnerWidth = window.innerWidth;

      switch (true) {
        // If the window width is less than or equal to 700px, set the device to 'mobile'
        case windowInnerWidth <= mobileMaxWidth: {
          setDevice('mobile');
          break;
        }

        // If the window width is less than or equal to 1120px, set the device to 'tablet'
        case windowInnerWidth <= tabletMaxWidth: {
          setDevice('tablet');
          break;
        }

        // Default case: Set the device to 'desktop' for larger window widths
        default: {
          setDevice('desktop');
        }
      }
    };

    // Initial call to updateDevice
    updateDevice();

    // Event listener for window resize to dynamically update the device type
    window.addEventListener('resize', updateDevice);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
}
