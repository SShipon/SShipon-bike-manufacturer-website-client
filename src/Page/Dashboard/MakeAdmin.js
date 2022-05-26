import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserAdminControl from './UserAdminControl';

const MakeAdmin = () => {
    const {
      data: users,
      isLoading,
      refetch,
    } = useQuery("user", () =>
      fetch("https://immense-reef-29849.herokuapp.com/user", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Remove User</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users?.map((user,index) => <UserAdminControl key={user._id} user={user} refetch={refetch} index={index}></UserAdminControl>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;