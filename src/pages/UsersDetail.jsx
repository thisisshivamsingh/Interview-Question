import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../redux/reducers";
import { useNavigate } from "react-router-dom";

const UsersDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.userReducer.userLists);
  const navigateToPostsPage = () => {
    navigate("/users/posts");
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status === 200) {
          dispatch(addUsers(res.data));
        }
        console.log(res);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);
  return (
    <div>
      {/* {console.log(users)} */}
      {users[0] &&
        users[0].map((element) => (
          <h1 key={element.id} onClick={() => navigateToPostsPage()}>
            {element.name}
          </h1>
        ))}
    </div>
  );
};

export default UsersDetail;
