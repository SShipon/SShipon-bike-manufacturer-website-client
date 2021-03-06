import React from 'react';
import { useNavigate } from 'react-router-dom';

const Parts = ({ parts }) => {
    const { _id, img, name, description, price, stock, order } = parts;
    const navigate = useNavigate();

    const navigatorProductDetail = id =>{
        navigate(`/product/${id}`)
    }
    return (
      <div class="card lg:max-w-lg bg-base-100  shadow-xl">
        <figure class="px-10 pt-10">
          <img
            style={{ width: "200px" }}
            src={img}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body ">
          <h2 class="card-title">{name}</h2>
          <p> {description}</p>
          <div>
            <h5>
              <span className="font-semibold">Price: BDT:</span>
              <span className="text-purple-700 font-bold"> {price}/pcs</span>
            </h5>
            <p>
              <span className="font-semibold">Minimum-quantity: </span> {order}
            </p>
            <p>
              <span className="font-semibold">Available Quantity:</span> {stock}
            </p>
          </div>

          <button
            onClick={() => navigatorProductDetail(_id)}
            class="btn btn-block btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    );
};

export default Parts;