import React from "react";
import useProduct from "../../Hooks/useProduct.jsx";
import ExploreBike from "../ExploreBike/ExploreBike.jsx";


const Explore = () => {
  const [products, setProducts] = useProduct();

  return (
    <section className="max-w-7xl mx-auto px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ExploreBike key={product._id} product={product}></ExploreBike>
        ))}
      </div>
    </section>
  );
};

export default Explore;
