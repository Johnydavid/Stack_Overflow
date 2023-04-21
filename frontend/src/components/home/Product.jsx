import React from "react";
import Navbar from "./Navbar";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className={"container mt-5"}>
        <div class="row justify-content-center">
          <h1> Our Products </h1>
          
          <div className={"col-7 m-5"}>
            <h5>
              {" "}
              Our public platform 
            </h5>

            <h5>
              Where developers and technologists go to gain and share knowledge
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
