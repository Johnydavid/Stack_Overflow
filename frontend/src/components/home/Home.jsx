import React from "react";
import { useNavigate, Link } from "react-router-dom";
// import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";



const Home = () => {
    const handleLogout = () =>{
        localStorage.removeItem("token");
        window.location.reload();
    }

  return (
    <>
      <nav className={"navbar navbar-expand-lg bg-body-tertiary"}>
        <div className={"container-fluid"}>
          <div>
            <div class="dropdown">
              <button onclick="myFunction()" class="dropbtn">
                Dropdown
              </button>
              <div id="myDropdown" class="dropdown-content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>

          <Link to="/"  className={"navbar-brand ms-5"}>
       
       <img
         src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
         alt="Stack Overflow"
         width="150"
         height="30"
       ></img>
     
     </Link>
          <button
            className={"navbar-toggler"}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div
            className={"collapse navbar-collapse"}
            id="navbarSupportedContent"
          >
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
              <li className={"nav-item"}>
                <a className={"nav-link active"} aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link active"} aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link active"} aria-current="page" href="#">
                  For Teams
                </a>
              </li>
            </ul>
            <form className={"d-flex  w-50"} role="search">
              <span>
                <faMagnifyingGlass />{" "}
              </span>

              <input
                className={"form-control me-5  w-100"}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <div>
              <Link to="/logout">
              <button className={"btn btn-light me-3"} onClick = {handleLogout} > Log Out</button>
              </Link>             
           
             
            </div>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home
