import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init.jsx";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data, e) => {
    console.log(data);
    const url = `http://localhost:5000/profile/${user.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset();
        toast.success("Successfully Updated");
        navigate("/dashboard");
      });
  };

  return (
    <div className="my-12 flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label font-semibold">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            value={user?.displayName}
            {...register("name")}
            placeholder="Type here"
            readOnly
            className="input input-bordered  w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text font-semibold">
              Email <span>(Email Address cannot be changed)</span>
            </span>
          </label>
          <input
            type="text"
            value={user?.email}
            {...register("email")}
            readOnly
            placeholder="Email Address"
            className="input input-bordered  w-full max-w-xs"
          />
          <label className="label font-semibold">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="number"
            placeholder="Your Number"
            {...register("phone")}
            className="input input-bordered  w-full max-w-xs"
          />
          <label className="label font-semibold">
            <span className="label-text">Education</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            {...register("education")}
            className="input input-bordered  w-full max-w-xs"
          />
          <label className="label font-semibold">
            <span className="label-text">Country</span>
          </label>
          <input
            type="text"
            placeholder="type here"
            {...register("country")}
            className="input input-bordered  w-full max-w-xs"
          />
          <label className="label font-semibold">
            <span className="label-text">city</span>
          </label>
          <input
            type="text"
            placeholder="type here"
            {...register("city")}
            className="input input-bordered  w-full max-w-xs"
          />
          <label className="label font-semibold">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            placeholder="type here"
            {...register("location")}
            className="input input-bordered  w-full max-w-xs"
          />
          <label className="label font-semibold">
            <span className="label-text">Social Media</span>
          </label>
          <input
            type="text"
            placeholder="type here"
            {...register("social")}
            className="input input-bordered  w-full max-w-xs"
          />
          <div className="flex justify-center mt-5">
            <div>
              <button
                style={{
                  padding: "20px 30px",
                  background: "rgb(14, 66, 66)",
                  color: "#ffff",
                }}
                type="submit"
                className="hero-btn rounded-full"
              >
                Save Change
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
