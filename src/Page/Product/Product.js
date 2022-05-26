import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, quantity, prize, description } = product
    const navigate = useNavigate();

    const navigatorProductDetail = id =>{
        navigate(`/product/${id}`)
    }
    return ( 
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="Shoes" />
                </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h5 className='text-lime-500 font-bold'>Prize: ${prize}</h5>
                <h5 className='text-lime-300 font-bold'>Quantity: {quantity}</h5>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigatorProductDetail(_id)} className="btn btn-accent">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;