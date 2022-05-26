import React from 'react';

const Blogs = () => {
    return (
      <section className="max-w-7xl mx-auto px-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 flex justify-center items-center my-10">
          <div>
            <h5 className="text-2xl font-semibold">
              1. How will you improve the performance of a React Application?
            </h5>
            <p>
              Optimizing performance in a React application Keeping component
              state local where necessary. Memoizing React components to prevent
              unnecessary re-renders. Code-splitting in React using dynamic
              import() Windowing or list virtualization in React. Lazy loading
              images in React.
            </p>
          </div>
          <div>
            <h5 className="text-2xl font-semibold">
              2. What  are the different ways to manage a state in a React
              application?
            </h5>
            <p>
              There are four main types of state you need to properly manage in
              your React apps: Local (UI).  state – Local state is data we manage
              in one or another component. Global (UI) state– Global state is
              data we manage across multiple components. Server state– Data that
              comes from an external server that must be integrated with our UI
              state. URL state– Data that exists on our URLs, including the
              pathname and query parameters. There are many more elements, but
              these are the major categories worth focusing on for most
              applications you build build.
            </p>
          </div>
          <div>
            <h5 className="text-2xl font-semibold">
              3.How does prototypical inheritance work ?
            </h5>
            <p>
              3.How does prototypical inheritance work? Every object with its
              methods and properties contains an internal and hidden property
              known as [[Prototype]]. The Prototypal Inheritance is a feature in
              javascript used to add methods and properties in objects. It is a
              method by which an object can inherit the properties and methods
              of another object. Traditionally, in order to get and set the
              [[Prototype]] of an object, we use Object.getPrototypeOf and
              Object.setPrototypeOf. Nowadays, in modern language, it is being
              set using _proto.
            </p>
          </div>
          <div>
            <h5 className="text-2xl font-semibold">
              4. What is a unit test? Why should write unit tests?
            </h5>
            <p>
              4. What is a unit test? Why should write unit tests? Unit tests
              are typically automated tests written and run by software
              developers to ensure that a section of an application (known as
              the "unit") meets its design and behaves as intended. In
              procedural programming, a unit could be an entire module, but it
              is more commonly an individual function or procedure.
            </p>
          </div>
          <div>
            <h5 className="text-2xl font-semibold">
              5.Why you do not set the state directly in React?
            </h5>
            <p>
              5.Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts? Every
              object with its methods and properties contains an internal and
              hidden property known as [[Prototype]]. The Prototypal Inheritance
              is a feature in javascript used to add methods and properties in
              objects. It is a method by which an object can inherit the
              properties and methods of another object. Traditionally, in order
              to get and set the [[Prototype]] of an object, we use
              Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in
              modern language, it is being set using _proto_.
            </p>
          </div>
          <div>
            <h5 className="text-2xl font-semibold">
              6. You have an array of products?
            </h5>
            <p>
              6. You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name? Unit tests are typically automated tests written and run
              by software developers to ensure that a section of an application
              (known as the "unit") meets its design and behaves as intended. In
              procedural programming, a unit could be an entire module, but it
              is more commonly an individual function or procedure.
            </p>
          </div>
        </div>
      </section>
    );
};

export default Blogs;