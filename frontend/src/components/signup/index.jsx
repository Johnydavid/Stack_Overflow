import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useState } from 'react';
import axios from 'axios';
// import Login from '../login/index';
import Navbar from '../home/Navbar';

const Signup = () => {
  const [input, setInput] = useState({
    userName: "",
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
      const url = "http://localhost:8080/api/users";
      // const url = "https://jwt-crud-f29g.onrender.com/api/users";
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
    <div>
      <Navbar />
      
   
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h2>Welcome to </h2>
            <h1> Stack Overflow</h1> 
          <Link to="/login">
            <button type='button' className={styles.white_btn}>Sign in</button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="User Name"
              name="userName"
              onChange={handleChange}
              value={input.userName}
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
    </div>
  )
}

export default Signup;