import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init.jsx';


const MyProfile = () => {


    const [user] = useAuthState(auth)
    const email = user?.email

    const handleSubmit = async e => {
        e.preventDefault()
        const name = e.target.name.value;
        const education = e.target.education.value;
        const city = e.target.city.value;
        const phone = e.target.phone.value;


        const info = {
            name,
            education,
            city,
            phone
        }
        const newInfo = {
            ...info, email: email
        }

        await axios
          .post("http://localhost:5000/myprofile", newInfo)
          .then(function (res) {
            if (res?.data?.insertedId) {
              // toast('Save Information')
            }
          });
    }


    // ///// showing information section ////////////

    const [profiles, setProfile] = useState([])
    useEffect(() => {

        const run = async () => {
            await axios
              .get(`http://localhost:5000/myprofile/${email}`)
              .then(function (res) {
                setProfile(res.data);
              });

        }
        run()
    }, [profiles, setProfile])
    return (
      <div>
        <h2 className="text-3xl font-semibold text-purple-500">
          My profile
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="my-12">
            <form className="px-10" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                disabled
                value={user?.displayName}
                class="input input-bordered w-full max-w-xs  mt-3"
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                name="email"
                disabled
                value={user?.email}
                class="input input-bordered w-full max-w-xs mt-2"
              />
              <br />
              <input
                type="text"
                placeholder="Education"
                name="education"
                required
                class="input input-bordered w-full max-w-xs mt-2"
              />
              <br />
              <input
                type="text"
                placeholder="City"
                name="city"
                required
                class="input input-bordered w-full max-w-xs mt-2"
              />
              <br />
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                required
                class="input input-bordered mt-2 w-full max-w-xs"
              />
              <br />
              <input
                type="submit"
                value="Submit"
                class="input input-bordered w-full mt-2 max-w-xs text-center bg-primary text-white text-lg"
              />
            </form>
          </div>
          {/* ///////////////////////  show information ///////////////////////// */}
          <div>
            {profiles.map((profile) => (
              <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">Name: {profile.name}</h2>
                    <h2>Email: {profile.email}</h2>
                    <h2>Education: {profile.education}</h2>
                    <h2>City: {profile.city}</h2>
                    <h2>Phone: {profile.phone}</h2>
                    <Link to={`/dashboard/updateprofile/${profile._id}`}>
                      {" "}
                      <button className="btn btn-accent mt-3">
                        Update Button
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MyProfile;