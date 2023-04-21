import React from "react";
import "./question.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  faBars } from "@fortawesome/free-solid-svg-icons";

import Logout from "../logout/Logout";
import { useState, useEffect } from "react";
import axios from "axios";

const Question = () => {
  const [input, setInput] = useState({
    title: "",
    question: "",
  });
  const [err, setErr] = useState("");

  const handleChange = ({ target: ip }) => {
    setInput({ ...input, [ip.name]: ip.value });
  };

  const handleSubmit = async (e) => {
    try {
      const url = "http://localhost:8080/api/question";
      // const url = "https://jwt-crud-f29g.onrender.com/api/users";
      const { input: res } = await axios.post(url, input);
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErr(error.response.data.message);
      }
    }
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/api/question/read";
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
          <div className={"col-3"}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className={"form-control"}
                name="title"
                placeholder="Question Title"
                onChange={handleChange}
                value={input.title}
                required
              ></input>

              <textarea
                className={"form-control mt-3"}
                rows="3"
                placeholder="Your question please"
                name="question"
                onChange={handleChange}
                value={input.question}
                required
              ></textarea>

              {err && <div>{err}</div>}
              <div>
                <button type="submit" className={"btn btn-primary mt-3 me-5"}>
                  Post your Question
                </button>
              </div>
            </form>
          </div>

          <div className={"col-7"}>
            <h4 className={"view_question"}> All Questions</h4>
            {data.map((q) => (
              <div key={q._id}>
                <div className={"titleClass"}>{q.title.toUpperCase()}</div>

                <div className={"questionClass"}>{q.question} </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Question;
