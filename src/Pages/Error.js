import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error-container'>
      <h1>oops! Page Not Found</h1>
      <Link to='/' className='btn-primary'>
        back home
      </Link>
    </div>
  );
};

export default Error;
