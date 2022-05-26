import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProducts] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data =>setProducts(data))
     },[])



    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mt-12">
        <div>
          <div class="card lg:max-w-lg mx-auto bg-base-100  shadow-xl">
            <figure class="px-10 pt-10">
              <img
                style={{ width: "200px" }}
                src={product.img}
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body ">
              <h2 class="card-title">{product.name}</h2>
              <p> {product.description}</p>
              <div>
                <h5>
                  <span className="font-semibold">Price: BDT:</span>
                  <span className="text-purple-700 font-bold">
                    {product.price}/pcs
                  </span>
                </h5>
                <p>
                  <span className="font-semibold">MOQ: </span> {product.order}
                </p>
                <p>
                  <span className="font-semibold">Available Quantity:</span>{" "}
                  {product.stock}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
            
        </div>
      </div>
    );
};

export default ProductDetails;