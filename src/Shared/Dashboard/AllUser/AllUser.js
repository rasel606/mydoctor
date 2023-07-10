import React from "react";
import { useQuery } from "react-query";
import Loding from "../../Loding/Loding";
import UserList from "./UserList";

const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://doctors-backend.vercel.app//user`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loding></Loding>;
  }
  return (
    <div>
      <p className="text-blue-500 text-xl font-bold">
        ALl User : {users.length}
      </p>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Favorite Color</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <UserList refetch={refetch} key={user._id} user={user}></UserList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
