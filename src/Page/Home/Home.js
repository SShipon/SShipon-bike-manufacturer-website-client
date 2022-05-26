import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import ReviewCard from '../Dashboard/ReviewCard';
import Products from '../Products/Products';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';

const Home = () => {
    return (
        <div>
          
            <Products></Products>
            <BusinessSummery></BusinessSummery>
            <ReviewCard></ReviewCard>
            
        </div>
    );
};

export default Home;


/* const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jgbqt.mongodb.net/?retryWrites=true&w=majority`; */