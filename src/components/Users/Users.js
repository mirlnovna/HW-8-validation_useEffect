import React, { useEffect, useState } from "react";
import Timer from "../TImer/Timer";

const Users = ({ state }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {state ? (
        <h1>
          <Timer />
        </h1>
      ) : (
        <ol>
          {posts.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Users;
