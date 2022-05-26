import React from 'react';
import useProducts from '../hooks/useProduct';
import Parts from './Parts';

const AllParts = () => {
    const [products] = useProducts()
    return (
        <div>
            <h1 className='text-3xl uppercase text-center font-bold mt-8 text-teal-600'>our products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-12 my-12'>
                {
                    products.map(parts => <Parts key={parts._id} parts={parts}></Parts>)
                }
            </div>
        </div>
    );
};

export default AllParts;