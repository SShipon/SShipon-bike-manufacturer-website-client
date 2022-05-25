import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init.jsx";
import'./AddReview.css'
const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    reset();
  };
  return (
    <div className="card lg:max-w-lg mx-auto  p-2 shadow-lg justify-center items-center my-10">
      <h3 className="text-center text-3xl my-5 font-semibold text-emerald-500">
        Customer Feedback
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 my-1 w-100"
          placeholder="Enter your name"
          defaultValue={user?.displayName}
          {...register("user")}
        />
        <br />
        <input
          className="p-2 my-1 w-100"
          placeholder="Enter Your Email"
          defaultValue={user?.email}
          {...register("email")}
        />
        <br />
        <input
          className="p-2 my-1 w-100"
          placeholder="write your review, maximum 100 characters"
          {...register("review", { required: true, maxLength: 100 })}
        />
        <br />
        <input
          className="p-2 my-1 w-100"
          type="number"
          placeholder="Give a rating between 0 to 5"
          {...register("stars", { min: 0, max: 5, required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <p className="w-50 m-auto p-2">
          <input
            type="submit"
            value="Give Review"
            className="btn d-block m-auto px-3"
          />
        </p>
      </form>
    </div>
  );
};

export default AddReview;
