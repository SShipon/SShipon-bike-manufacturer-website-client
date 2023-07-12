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
    
      <div className="card sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[350px] mx-8 bg-cyan-100 shadow-xl">
      <figure>
            <img
              src={user?.photoURL}
              className="rounded-full mt-8"
              alt="User"
            />
          </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h6>{email}</h6>
        <p> {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    color={rating > index ? colors.orange : colors.gray}
                  />
                );
              })}</p>

       <p>{customerFeedback}</p>
        
      </div>
    </div>

    );
};

export default Review;