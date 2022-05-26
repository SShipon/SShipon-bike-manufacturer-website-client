import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [products, setProducts] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const url = `https://immense-reef-29849.herokuapp.com/order?customerEmail=${user?.email}`;
            fetch(url, {
                method: 'GET',
                headers:{
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if(res.status === 401 || res.status === 403){
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => setProducts(data))
        }
    }, [user]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {

        if (result.value) {
            const url = `https://immense-reef-29849.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                })


        }
        if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
    })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>{products.length}</th>
                        <th>Product name</th>
                        <th>Email</th>
                        <th>quantity</th>
                        <th>Prize</th>
                        <th>Payment</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       products.map((product,index) =>  <tr key={product._id}>
                        <th>{index + 1}</th>
                        <td>{product.productName}</td>
                        <td>{product.customerEmail}</td>
                        <td>{product.productQuantity}</td>
                        <td>{product.totalPrize}</td>
                        <td>
                            {!product.paid && <Link to={`/dashboard/payment/${product._id}`}><button className='btn btn-secondary'>Pay</button></Link>}
                            {product.paid && <span className='text-success'>paid</span>}
                        </td>
                        <td><button className='btn btn-accent' onClick={() => handleDelete(product._id)}>Delete</button></td>
                    </tr>
                        )
                   }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;