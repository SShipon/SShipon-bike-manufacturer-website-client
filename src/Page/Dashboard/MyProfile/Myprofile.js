import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init.jsx";
import "./MyProfile.css";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const [profile, setProfile] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:5000/profile?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [user?.email]);

  return (
    <div className="flex md:felx flex-wrap justify-center">
      <div className="w-60 flex justify-center mr-5">
        <div>
          <div class="avatar online">
            <div class="w-40 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=28212" alt="" />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div>
               <Link to="/updateProfile">
                <button className="hero-btn rounded-full">Edit Profile</button>
              </Link> 
            </div>
          </div>
        </div>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          defaultValue={user?.displayName}
          placeholder="Type here"
          readOnly
          className="input input-bordered  w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          defaultValue={user?.email}
          readOnly
          placeholder="Email Address"
          className="input input-bordered  w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input
          type="number"
          placeholder="Your Number"
          defaultValue={profile[0]?.phone}
          readOnly
          className="input input-bordered  w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Education</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          defaultValue={profile[0]?.education}
          readOnly
          className="input input-bordered  w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Country</span>
        </label>
        <input
          type="text"
          placeholder="type here"
          defaultValue={profile[0]?.country}
          readOnly
          className="input input-bordered  w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">city</span>
        </label>
        <input
          type="text"
          placeholder="type here"
          defaultValue={profile[0]?.city}
          readOnly
          className="input input-bordered  w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input
          type="text"
          placeholder="type here"
          defaultValue={profile[0]?.location}
          readOnly
          className="input input-bordered  w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Sociel Media</span>
        </label>
        <input
          type="text"
          placeholder="type here"
          defaultValue={profile[0]?.social}
          readOnly
          className="input input-bordered  w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default MyProfile;
