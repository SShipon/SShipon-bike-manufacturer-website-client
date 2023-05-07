import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const Manageproduct = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getItem = async () => {
      const url = `https://bike-manufacturer-website-server-site.onrender.com/manageproduct`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProducts(data);
      } catch (error) {
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItem();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        const url = `https://bike-manufacturer-website-server-site.onrender.com/product/${id}`;
        console.log(url);
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          });
      }
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Picture</th>
            <th>price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        {products.map((product, index) => (
          <tbody key={product._id}>
            <tr>
              <th>{index + 1}</th>
              <td>{product.name}</td>
              <td>
                <img className="w-16" src={product.img} alt="" />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => handleDelete(product._id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Manageproduct;
