// Components
import SingleUser from "./SingleUser";

// Hooks
import { useState, useEffect } from "react";

import { setUsers } from "../slices/users.slice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const Users = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const getUsers = async () => {
    const response = await fetch("/users");
    const data = await response.json();

    dispatch(setUsers(data));
  }

  useEffect(() => {
    getUsers()
  }, []);

  return (
   <div className="bg-[#F6F6F6] py-5 rounded-2xl flex-1 h-full overflow-scroll">
    {users.map((user) => {
      return <SingleUser key={user._id} user={user}/>
    })}
   </div>
  );
};

export default Users;
