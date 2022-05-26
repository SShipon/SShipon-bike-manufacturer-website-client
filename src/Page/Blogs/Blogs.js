import React from 'react';

const Blogs = () => {
    return (

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-12 my-12'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> 1. How will you improve the performance of a React Application?</h2>
                    <p>Optimizing performance in a React application
                        Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> 2. What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state you need to properly manage in your React apps:
                        Local (UI) state – Local state is data we manage in one or another component
                        Global (UI) state– Global state is data we manage across multiple components
                        Server state– Data that comes from an external server that must be integrated with our UI state
                        URL state– Data that exists on our URLs, including the pathname and query parameters
                        There are many more elements, but these are the major categories worth focusing on for most applications you build.
                    </p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> 3.How does prototypical inheritance work?</h2>
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using _proto_.
                    </p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">4. What is a unit test? Why should write unit tests?</h2>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                    </p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> 5.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using _proto_.</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> 6. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;