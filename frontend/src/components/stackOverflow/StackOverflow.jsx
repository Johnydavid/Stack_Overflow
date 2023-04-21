import React from "react";
import "./stackOverflow.css";
import Logout from "../logout/Logout";

const StackOverflow = () => {
  return (
    <div>
      <Logout />

      <div className={"stackContainer"}>
           <h2>Welcome to StackOverflow </h2>
      </div>
      <div className={"container mt-5"}>
        <div class="row justify-content-center">
          <div className={"col-5"}>
            <h4>
              Stack Overflow helps people find the answers they need, when they
              need them. We're best known for our public Q&A platform that over
              100 million people visit every month to ask questions, learn, and
              share technical knowledge.
            </h4>
          </div>
          <div className={"col-5"}>
            <h4>
              Our products and tools empower people to find what they need to
              develop technology at work or at home. These products include,
              Stack Overflow for Teams, Stack Overflow Advertising, Collectives™
              on Stack Overflow, and Stack Overflow Talent.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackOverflow;
