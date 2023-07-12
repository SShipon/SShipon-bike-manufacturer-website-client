import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner/Banner.jsx';
import Brand from './Brand/Brand.jsx';
import CardInfo from './CardInfo/CardInfo.jsx';
import Projects from './Projects/Projects.jsx';
import ReviewCard from '../Dashboard/ReviewCard';

const Home = () => {
    return (
      <div className="max-w-7xl mx-auto px-12">
        <Banner></Banner>
        <Products></Products>
        <CardInfo></CardInfo>
        <Projects></Projects>
         <ReviewCard></ReviewCard>
        <Brand></Brand>
      </div>
    );
};

export default Home;

