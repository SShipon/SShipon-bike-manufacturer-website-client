import useProducts from '../hooks/useProduct';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1 className='text-3xl uppercase text-center font-bold mt-8 text-teal-300'>our products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-12 my-12'>
                {
                    products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;