import React from 'react';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import'./NotFound.css'
const NotFound = () => {
    return (
      <section className='my-30'>
        <div className="page-error">
          <h3 className="text-center text">Oops! Something went wrong.</h3>
          <PageNotFound></PageNotFound>
        </div>
      </section>
    );
};

export default NotFound;