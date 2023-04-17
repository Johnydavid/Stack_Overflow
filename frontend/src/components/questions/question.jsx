import React from "react";
import {  useNavigate  } from "react-router-dom";
import "./question.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  faBars } from "@fortawesome/free-solid-svg-icons";
// import index from "../login/index"
// import Home from "../home/Home";
import Logout from "../logout/Logout";
import { useState } from "react";
import axios from 'axios';




const Question = () => {

  const[input, setInput] = useState({
    title : "",
    question: ""

  })
  const[err, setErr] = useState("");

  const handleChange = ({ target: ip }) => {
    setInput({ ...input, [ip.name]: ip.value })
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log("handlesubmit !!!");
    // e.preventDefault();
    try {
     
      const url = "http://localhost:8080/api/question";
      // const url = "https://jwt-crud-f29g.onrender.com/api/users";
      const { input: res } = await axios.post(url, input);
      // navigate("/logout");
      console.log(res.message);
    } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500) {
        setErr(error.response.data.message);
      }

    }
  }
    // const navigate = useNavigate();
    //   const handleLogout = () =>{
    //     navigate("/login");
    //       localStorage.removeItem("token");
    //       window.location.reload();     
    //      }

  return (
    <>
<Logout />
    

      <div>
        <form onSubmit={handleSubmit}>

        <input type = "text" placeholder="Question Title" name = "title" onChange={handleChange}   value={input.title}
       required
        ></input>
        <h1> Enter your Question</h1>
        <input type = "text" placeholder="Your question please" name = "question" onChange={handleChange}
       value={input.question}
       required
        ></input>
             {err && <div >{err}</div>}
             <button type="submit" >Post Question</button>
        </form>
      </div>
    </>
  );
};
export default Question


             