import React from "react";
import Navbar from "./Navbar";

const Teams = () => {
  return (
    <div>
      <Navbar />
      <div className={"container mt-5"}>
        <div class="row justify-content-center">
          <h1> StackOverflow For Teams </h1>
          
          <div className={"col-7 m-5"}>
            <h5>
              {" "}
             The answer to your DevOps' Problems
            </h5>

            <h5>
             One tool to house everything your developers need to know.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
