import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="error">
      <div className="error-container">
        <div className="error-icon">
          <i className="fi fi-ts-404"></i>
        </div>

        <div className="error-info">
          <h2>Page not found!</h2>
          <Link className="error-link" href="/">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
