import React from 'react';
import Banner from './Banner/Banner.jsx';
import Brand from './Brand/Brand.jsx';
import CardInfo from './CardInfo/CardInfo.jsx';
import Products from './Products/Products.jsx';
import Projects from './Projects/Projects.jsx';
import Simple from './Simple/Simple.jsx';


const Home = () => {
    return (
      <div className="max-w-7xl mx-auto px-12">
        <Banner />
        <Products/>
        <CardInfo></CardInfo>
        <Projects></Projects>
        <Simple></Simple>
        <Brand></Brand>
      </div>
    );
};

export default Home;