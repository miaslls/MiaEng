import * as React from 'react';
import { SVGProps } from 'react';
const PortfolioIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4 19h9v2H3c-.5 0-1-.5-1-1V4c0-.5.5-1 1-1h7.4l2 2H21c.5 0 1 .5 1 1v6h-2V7h-8.4l-2-2H4v14z" />
    <path d="M20.8 13.4c-.7-.1-1.5.1-2.2.6-.6-.6-1.3-.9-2-1-.8-.1-1.5.2-2.1.7s-1 1.3-1.1 2.1c-.3 3.3 2.7 5.5 4 6.4l.4.3.4-.2c1.5-.7 4.9-2.2 5.2-5.5v-.4c0-1.5-1.1-2.8-2.6-3zm-1.4 6.5c-.3.2-.7.4-1.2.7-.1.1-.2.1-.3.1-.1-.1-.2-.1-.2-.2-.4-.3-.7-.6-1-.9-1.3-1.2-1.8-2.4-1.7-3.6.1-.8.6-1.4 1.3-1.4h.1c.4 0 .8.3 1.1.7l.8 1 1-.8c.4-.3.9-.5 1.3-.4.3 0 .7.2.9.5.2.3.3.7.3 1.2-.1 1.1-.9 2.1-2.4 3.1z" />
  </svg>
);
export default PortfolioIcon;
