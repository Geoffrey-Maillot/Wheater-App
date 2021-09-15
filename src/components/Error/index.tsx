import React from 'react';

// Import Syle =>
import './styles.scss';

const Error = () => (
  <div className="error">
    <p className="error_message">
      This city is not part of the test API <br /> or <br />
      An error occurred during data recovery{' '}
      <hr style={{ margin: '20px 0 ' }} />
      <a href="/" style={{ textDecoration: 'underline' }}>
        Return To Home
      </a>
    </p>
  </div>
);

export default Error;
