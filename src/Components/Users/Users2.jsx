import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Users2 = () => {
  const {
    isPending,
    isError,
    error,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user");
      return res.json();
    },
  });

  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:5000/user")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUsers(data);
  //       });
  //   }, []);

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
        // const remaining = users.filter((user) => user._id !== id);
        // setUsers(remaining);
      }
    });
  };
  if (isPending) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-xl font-bold">
            <th>User name</th>
            <th>Email</th>
            <th>Created Time</th>
            <th>Last Login</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users?.map((user) => (
            <tr className="space-y-4" key={user._id}>
              <th>name</th>
              <th>{user.email}</th>
              <td>{user.createdAt}</td>
              <td>{user.lastLogin}</td>
              <td
                onClick={() => handleDelete(user._id)}
                className="btn btn-primary"
              >
                Delete
              </td>
            </tr>
          ))}
          {/* end */}
        </tbody>
      </table>
    </div>
  );
};

export default Users2;
