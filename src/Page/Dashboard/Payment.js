import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import CheckoutFrom from "./CheckoutFrom";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
const stripePromise = loadStripe(
  "pk_test_51L4ZV2GMgR7IvukHJQVXN4nUPglHpydrLkHQlRwQ8JnxAxwVq1h4EM8X9xflA0gnBsI1oc8rduCaRTPstQZHfmiW00scukA4Nl"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://bike-manufacturer-website-server-site.onrender.com/order/${id}`;

  const { data: product, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mx-12 p-12 mt-12">
      <div className="mx-12 text-center">
        <h2 className="uppercase text-teal-600 text-2xl font-bold mx-8 mt-4 mb-4 ">
          Hello... {product?.customerName}
        </h2>
        <h3 className="font-bold text-xl mb-2">
          <span className="text-green-400">Product Name:</span>{" "}
          {product?.productName.slice(0, 10)}..more
        </h3>
        <h3 className="font-bold text-xl">
          <span className="text-green-400">Please Pay for:</span> $
          {product?.totalprice}.
        </h3>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="card-body">
        <Elements stripe={stripePromise}>
          <CheckoutFrom product={product} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
