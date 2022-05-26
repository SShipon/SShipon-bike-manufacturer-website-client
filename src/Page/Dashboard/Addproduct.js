import React from 'react';
import { useForm } from 'react-hook-form';

const Addproduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imgStorageKey = 'ab4ebcd5f1e4f3b6eb095aa66b95920e';

    const onSubmit = data => {
        const img = data.image[0];
        const formData = new FormData();
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        formData.append('image', img);
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const image = result.data.url;
                const product ={
                    name: data.productName,
                    email: data.email,
                    description: data.description,
                    quantity: data.quantity,
                    prize: data.prize,
                    img: image
                }

                const url = `https://immense-reef-29849.herokuapp.com/addproduct`;
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(product),
                    headers: {
                        'content-type': 'application/json',
                    },
           
                })
                .then(res=>res.json())
                    .then(result => {
                    console.log(result);
                })
            }
        })
    }
    return (
        <div className='flex h-screen justify-center items-center lg:my-40'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-4xl font-bold text-lime-300">Add a Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email Address"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'provide a valid email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className='level-text-alt text-rose-600'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='level-text-alt text-rose-600'>{errors.email.message}</span>}
                        </label>
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" placeholder="Product name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("productName", {
                                required: {
                                    value: true,
                                    message: 'Product name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.productName?.type === 'required' && <span className='level-text-alt text-rose-600'>{errors.productName.message}</span>}
                            </label>
                            <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'description is Required'
                                }
                            })}
                        />

                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            type="text"
                            placeholder="quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'quantity is Required'
                                }
                            })}
                        />

                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        </label>
                        <label className="label">
                            <span className="label-text">Prize</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Prize"
                            className="input input-bordered w-full max-w-xs"
                            {...register("prize", {
                                required: {
                                    value: true,
                                    message: 'prize is Required'
                                }
                            })}
                        />

                        <label className="label">
                            {errors.prize?.type === 'required' && <span className="label-text-alt text-red-500">{errors.prize.message}</span>}
                        </label>
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />

                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                        <input className='btn mt-8' type="submit" value='Add' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addproduct;