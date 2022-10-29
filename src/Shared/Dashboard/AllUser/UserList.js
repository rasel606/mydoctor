import React from "react";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

const UserList = (props) => {
  const { user, refetch } = props;
  const { email, role } = user;
  console.log(user);

  const makeAdmin = () => {
    fetch(`https://mysterious-ocean-90913.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Faild to Make Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Make Addmin");
        }
      });
  };

  return (
    <tr>
      <th>Name</th>
      <th>{email}</th>
      <th>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </th>
      <th>
        <button class="btn btn-xs">Remove Admin</button>
      </th>
    </tr>
  );
};

export default UserList;
