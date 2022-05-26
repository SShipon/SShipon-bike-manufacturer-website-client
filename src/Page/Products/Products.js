import useProducts from '../hooks/useProduct';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
      <div>
        <h1 className="text-3xl uppercase text-center font-bold mt-8 text-teal-300">
          Our products
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;