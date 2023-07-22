import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Review from "./Review";
import Slider from "react-slick";

const ReviewCard = () => {
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://bike-manufacturer-website-server-site.onrender.com/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user]);

/*  add */

  var settings = {
    autoplay: true,
     dots: true,
     infinite: true,
     speed: 500,
     horizontal: true,
     horizontalSwiping: true,
     slidesToShow: 3,
     slidesToScroll: 3,
 
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true,
         },
       },
       
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };


  return (
   
    <section className="sm:mx-14">
        <div className="my-8">
        <h3 className="text-gradient_color text-center sm:text-2xl lg:text-2xl font-bold">review{reviews.length}</h3>
        </div>
        <>
          <Slider {...settings}>
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </Slider>
        </>
        <div>
        <Link to="/dashboard/review">Review</Link>
      </div>
    </section>

  );
};

export default ReviewCard;
