import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const MyReview = () => {
  const stars = Array(5).fill(0);

  const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9",
  };

  const [currentValue, setCurrentValue] = useState(0);
  const [user] = useAuthState(auth);
  const { id } = useParams();

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;

    const customerFeedback = {
      email: user.email,
      name: user.displayName,
      rating: currentValue,
      customerFeedback: feedback,
    };

    fetch(`http://localhost:5000/review/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customerFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire("Thank you!!", "Your review succed", "success");
        }
      });
  };

  return (
    <div className="card lg:mx-40 my-24 bg-base-100 shadow-xl flex justify-center items-center">
      <div className="card-body">
        <div className="flex gap-3 mb-5 cursor-pointer">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                color={currentValue > index ? colors.orange : colors.gray}
                onClick={() => handleClick(index + 1)}
              />
            );
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="textarea textarea-bordered px-12"
            name="feedback"
            placeholder="What's your feedback"
          ></textarea>
          <br />
          <button className="btn btn-success w-full mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyReview;
