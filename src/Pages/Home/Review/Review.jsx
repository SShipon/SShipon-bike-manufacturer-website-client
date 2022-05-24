import React from 'react';
import Rating from 'react-rating';

const Review = ({ userReview }) => {
  const { stars, review, user, email, photo } = userReview;
    return (
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img style={{borderRadius:'50%'}} src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title">{user}</h1>
          <p>{email}</p>
          <h2 className="card-title">{review}</h2>
          <Rating
            className="d-block text-end"
            readonly
            initialRating={stars}
            fullSymbol="fas fa-star text-warning"
            emptySymbol="far fa-star"
          ></Rating>
        </div>
      </div>
    );
   
};

export default Review;

