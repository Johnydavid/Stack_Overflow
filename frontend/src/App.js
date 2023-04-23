import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/home/About";
import Product from "./components/home/Product";
import Teams from "./components/home/Teams";
import Login from "./components/login/index";
import Signup from "./components/signup/index";
import Question from "./components/questions/question";
import Logout from "./components/logout/Logout";
import Users from "./components/users";
import StackOverflow from "./components/stackOverflow/StackOverflow";

function App() {
      return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/product" exact element={<Product />}></Route>
        <Route path="/teams" exact element={<Teams />}></Route>
        <Route path="/question" exact element={<Question />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/users" exact element={<Users />}></Route>
        <Route path="/home" exact element={<StackOverflow />}></Route>
        
        <Route path="/logout" exact element={<Logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
