import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';
import Loading from '../Shared/Loading';

const stripePromise = loadStripe('pk_test_51L42E3KpCfeDjJCAhXqtEWyaXoq7sqI3sCrzqFA0P260ezaanN96EQbfVKpcLuKSkKB0JV2UVGiJAdeIuT6Q0FcV00RJ9zaTRR');


const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/order/${id}`;

    const { data: product, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-12 p-12 mt-12">
            <div className='mx-12 text-center'>
                <h2 className='uppercase text-teal-600 text-2xl font-bold mx-8 mt-4 mb-4 '>Hello... {product?.customerName}</h2>
                <h3 className='font-bold text-xl mb-2'><span className='text-green-400'>Product Name:</span> {product?.productName}</h3>
                <h3 className='font-bold text-xl'><span className='text-green-400'>Please Pay for:</span> ${product?.totalPrize}</h3>
            </div>
            <div className="divider lg:divider-horizontal"></div> 
            <div className="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutFrom product={product}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;