import React from "react";
import Swal from "sweetalert2";

const UserAdminControl = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://bike-manufacturer-website-server-site.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to make an admin",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Admin!!", "Successfully made an admin", "success");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button className="btn btn-success btn-sm" onClick={makeAdmin}>
            Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-error btn-sm">Remove</button>
      </td>
    </tr>
  );
};

export default UserAdminControl;
