import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Review from './Review';

const ReviewCard = () => {
    const [user] = useAuthState(auth)
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(
          `https://immense-reef-29849.herokuapp.com/review?email=${user?.email}`
        )
          .then((res) => res.json())
          .then((data) => setReviews(data));

    }, [user])
    return (
      <div className="text-center">
        <h2 className="text-4xl font-bold text-teal-400">Our Reviews</h2>
        <div className="flex justify-center items-center my-12">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div>
        </div>
        <div>
          <Link to="/dashboard/review">Review</Link>
        </div>
      </div>
    );
};

export default ReviewCard;