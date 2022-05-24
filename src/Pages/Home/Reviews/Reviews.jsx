import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Review from "../Review/Review.jsx";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://stark-chamber-51963.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-12">
      <h2 className="text-center text-3xl font-bold">User Reviews</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {reviews.map((userReview) => (
          <Review userReview={userReview} key={userReview._id}></Review>
        ))}
      </div>
      <div className="my-12">
        <Link to="/review" className="text-red-500">
          <button class="btn btn-active btn-accent">User Your Feedback</button>
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
