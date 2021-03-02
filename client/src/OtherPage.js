import React from 'react';
import { Link } from 'react-router-dom';
function OtherPage() {
  return (
    <div>
      <h1>I am other pages</h1>
      <Link to='/'>Go back to home page</Link>
    </div>
  );
}

export default OtherPage;
