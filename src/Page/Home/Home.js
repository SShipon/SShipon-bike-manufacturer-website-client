import React from 'react';
import ReviewCard from '../Dashboard/ReviewCard';
import Products from '../Products/Products';
import Banner from './Banner/Banner.jsx';
import Brand from './Brand/Brand.jsx';
import CardInfo from './CardInfo/CardInfo.jsx';
import Projects from './Projects/Projects.jsx';

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

