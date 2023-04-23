import React from "react";
import Navbar from "./Navbar";


const About = () => {
  return (
    <div>
      <Navbar />
      <div className={"container mt-5"}>
        <div class="row justify-content-center">
          <h1> Who we are </h1>
          <div className={"col-5"}>
            <h2>
              Empowering the world to develop technology through collective
              knowledge.
            </h2>
          </div>
          <div className={"col-7 m-5"}>
            <h5>
              {" "}
              Our public platform <b>serves 100 million people every month</b>,
              making it one of the most popular websites in the world.
            </h5>

            <h5>
              Our asynchronous knowledge management and collaboration offering,{" "}
              <b>Stack Overflow for Teams</b>, is transforming how people work.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
