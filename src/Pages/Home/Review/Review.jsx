import React from 'react';
import Rating from 'react-rating';

const Review = ({ userReview }) => {
  const { stars, review, user, email, photo } = userReview;
    return (
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img style={{width:'130px',height:'130px',borderRadius:'50%'}} src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center ">
          <h1 className="card-title">{user}</h1>
          <h5 className='text-1xl font-semibold'>{email}</h5>
          <p >{review.slice(0,100)}</p>
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

