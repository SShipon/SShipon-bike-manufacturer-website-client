import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const Manageorder = () => {
    const [products, setProducts] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/allorder?customerEmail=${user?.email}`;
            fetch(url)
                .then(res => res.json())
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
            const url = `http://localhost:5000/order/${id}`;
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
                        <th>Total :({products.length})</th>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Prize</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       products.map((product,index) =>  <tr key={product._id}>
                        <th>{index + 1}</th>
                        <td>{product.productName}</td>
                        <td>{product.customerEmail}</td>
                        <td>{product.phoneNumber}</td>
                        <td>{product.totalPrize}</td>
                        <td><button className='btn btn-accent' onClick={() => handleDelete(product._id)}>Delete</button></td>
                    </tr>
                        )
                   }
                </tbody>
            </table>
        </div>
    );
};

export default Manageorder;