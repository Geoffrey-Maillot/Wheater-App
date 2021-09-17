import React from 'react';

// Import Syle =>
import './styles.scss';

const Error = () => (
  <div className="error">
    <div className="error_container-flex">
      <p className="error_message">
        This city is not part of the test API
        <span style={{ margin: '12px 0', display: 'block' }}>or</span>
        An error occurred during data recovery
      </p>
      <hr style={{ margin: '20px 0 ' }} />
      <a href="/" style={{ textDecoration: 'underline' }}>
        Return To Home
      </a>
    </div>
  </div>
);

export default Error;
