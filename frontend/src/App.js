// import './App.css';
import{Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/home/index';
import Login from './components/login/index';
import Signup from './components/signup/index';


function App() {
  return (
    <div>
      
        <Routes>
          <Route path = "/" exact element = {<Home />}></Route>
          <Route path = "/login" exact element = {<Login />}></Route>
          <Route path = "/signup" exact element = {<Signup />}></Route>
        </Routes>
       
       
      
   
    </div>
  );
}

export default App;
