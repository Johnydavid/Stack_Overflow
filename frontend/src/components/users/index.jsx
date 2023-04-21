import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Logout from "../logout/Logout";
import "./users.css";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/api/users/read";
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Logout />
      <div className={"container mt-5"}>
        <div class="row justify-content-center">
          <div className={"col-10"}>
            <div className={"titleClass"}>List of Users</div>
            {data.map((user) => (
              <table key={user._id} className={"table table-danger table-info"}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                  </tr>
                </tbody>       
              </table>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
