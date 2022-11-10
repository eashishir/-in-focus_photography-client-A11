import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
      <div className='mb-5'>
          <div tabIndex={0} className="collapse collapse-arrow border bg-green-600 border-base-300   rounded-box">
            <div className="collapse-title text-xl font-medium">
                (Q-1)Difference between SQL and NoSQL?
            </div>
            <div className="collapse-content">
                <p>Ans:SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure  </p>
                
            </div>
        </div>
          <div tabIndex={0} className="collapse collapse-arrow border bg-green-600 border-base-300   rounded-box">
            <div className="collapse-title text-xl font-medium">
                (Q-2)What is JWT, and how does it work?
            </div>
            <div className="collapse-content">
                <p>Ans:JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed</p>
                
            </div>
        </div>
          <div tabIndex={0} className="collapse collapse-arrow border bg-green-600 border-base-300   rounded-box">
            <div className="collapse-title text-xl font-medium">
                (Q-3)What is the difference between javascript and NodeJS?
            </div>
            <div className="collapse-content">
                <p>Ans:JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                
            </div>
        </div>
          <div tabIndex={0} className="collapse collapse-arrow border bg-green-600 border-base-300   rounded-box">
            <div className="collapse-title text-xl font-medium">
                (Q-4)How does NodeJS handle multiple requests at the same time?
            </div>
            <div className="collapse-content">
                <p>Ans:NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                
            </div>
        </div>
      </div>
    );
};

export default Blog;