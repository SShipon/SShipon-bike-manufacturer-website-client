import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const Information = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [user] = useAuthState(auth);
  const [num, setNum] = useState(30);

  useEffect(() => {
    const url = `https://bike-manufacturer-website-server-site.onrender.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data[0]));
  }, [product, id]);

  const incNum = () => {
    if (num < product.quantity) {
      setNum(Number(num) + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sorry your product not available",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };
  const decNum = () => {
    if (num > 30) {
      setNum(num - 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sorry, products cannot be ordered below this",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const total2 = parseInt(num) * parseInt(product.price);
  const navigete = useNavigate();

  const handleOrder = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.phone.value;

    const order = {
      customerName: name,
      productName: product.name,
      productQuantity: num,
      totalprice: total2,
      customerEmail: user.email,
      phoneNumber: number,
    };
    console.log(order);

    fetch(`https://bike-manufacturer-website-server-site.onrender.com/order/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire("Orderd!!", "Your order succed", "success");
        }
        navigete("/parts");
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-24 mx-24 gap-5">
      <div className="card my-52 lg:max-w-xl  lg:card-side bg-base-100">
        <figure>
          <img className="mx-8" src={product.img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl text-purple-400 font-bold mb-4">
            {product.name}
          </h2>
          <p className="text-xl font-bold">
            Stock:{product.stock}{" "}
            <span className="text-green-400">{product.quantity}</span>
          </p>
          <p className="text-xl font-bold">
            Menimum order: <span className="text-green-400">30</span>
          </p>
          <div className="col-xl-1">
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={decNum}
                >
                  -
                </button>
              </div>
              <input
                type="text"
                className="form-control w-12 text-center"
                value={num}
                onChange={handleChange}
              />
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={incNum}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold text-lime-300">
            Account of goods!!
          </h2>
          <form onSubmit={handleOrder} className="mt-8 mx-12 text-xl">
            <h4 className="text-xl font-bold mb-2">Name</h4>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <h4 className="text-xl font-bold mb-2">Email</h4>
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <h4 className="text-xl font-bold mb-2">Phone number</h4>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <h4 className="text-xl font-bold mb-2">Price</h4>
            <input
              type="text"
              disabled
              value={product.price}
              placeholder="Product quantity"
              className="input input-bordered w-full max-w-xs"
            />
            <h4 className="text-xl font-bold mb-2">Product quantity</h4>
            <input
              type="text"
              disabled
              value={num}
              placeholder="price"
              className="input input-bordered w-full max-w-xs mb-4"
            />
            <h4 className="text-xl font-bold mb-2">Total amount</h4>
            <input
              type="text"
              disabled
              value={total2}
              placeholder="price"
              className="input input-bordered w-full max-w-xs mb-4"
            />
            <input
              type="submit"
              value="Purchase"
              className="btn btn-secondary uppercase w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Information;
