import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/user/${id}`, id).then((data) => {
          console.log(data.data);
        });
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
        const remaining = users.filter((user) => user._id !== id);
        setUsers(remaining);
      }
    });
  };

  console.log(loadedUser);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>User name</th>
            <th>Email</th>
            <th>Created Time</th>
            <th>Last Login</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => (
            <tr className="space-y-4" key={user._id}>
              <th>name</th>
              <th>{user.email}</th>
              <td>{user.createdAt}</td>
              <td>Time</td>
              <td
                onClick={() => handleDelete(user._id)}
                className="btn btn-primary"
              >
                X
              </td>
            </tr>
          ))}
          {/* end */}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
