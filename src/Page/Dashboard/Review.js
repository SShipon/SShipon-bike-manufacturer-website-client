import { useAuthState } from 'react-firebase-hooks/auth';
import { FaStar } from 'react-icons/fa';
import auth from '../../firebase.init';

const Review = ({ review }) => {
    const { rating, customerFeedback,name,email } = review;
    const [user] = useAuthState(auth)
    const stars = Array(5).fill(0);

    const colors = {
        orange: "#FFBA5A",
        gray: "#a9a9a9"
    } 

    return (
      <div className="carousel-item ">
        <div className="card w-48 bg-base-100 shadow-xl">
          <figure>
            <img
              src={user?.photoURL}
              className="rounded-full mt-8"
              alt="User"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-xl">{name}</h2>
            <h6 className="text-center font-bold text-xl">{email}</h6>
            <p className="flex mx-5 mb-3">
              {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    color={rating > index ? colors.orange : colors.gray}
                  />
                );
              })}
            </p>
            <p>{customerFeedback}</p>
          </div>
        </div>
      </div>
    );
};

export default Review;