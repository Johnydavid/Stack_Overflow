import { Link, useNavigate } from 'react-router-dom';
import styles from './signup.module.css';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ target: ip }) => {
    setInput({ ...input, [ip.name]: ip.value })
  }

  const handleSubmit = async (e) => {
    console.log("handlesubmit !!!");
    e.preventDefault();
    try {
      // const url = "http://localhost:8080/api/users";
      const url = "https://jwt-crud-f29g.onrender.com/api/users";
      const { input: res } = await axios.post(url, input);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500) {
        setErr(error.response.data.message);
      }

    }
  }

  return (
    <>
    <nav className={"navbar navbar-expand-lg bg-body-tertiary"}>
        <div class={"container-fluid"}>
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
            
              <Link to="/login">
            <button type='button' className={"btn btn-primary me-3"}>Log In</button>
          </Link>
            </div>
            
          </div>
        </div>
      </nav>
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome GUVI </h1>
          <Link to="/login">
            <button type='button' className={styles.white_btn}>Sign in</button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={input.firstName}
              required
              className={styles.input}
            ></input>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={input.lastName}
              required
              className={styles.input}
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={input.email}
              required
              className={styles.input}
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="on"
              onChange={handleChange}
              value={input.password}
              required
              className={styles.input}
            ></input>
            {err && <div className={styles.error_msg} >{err}</div>}
            <button type="submit" className={styles.green_btn}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup;