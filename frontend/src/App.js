// import './App.css';
import{Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/home/index';
import Login from './components/login/index';
import Signup from './components/signup/index';
import Leftbar from './components/leftbar/Leftbar';


function App() {
  return (
    <div>
{/*       
        <Routes>
          <Route path = "/" exact element = {<Home />}></Route>
          <Route path = "/login" exact element = {<Login />}></Route>
          <Route path = "/signup" exact element = {<Signup />}></Route>
          <Route path = "/leftbar" exact element = {<Leftbar />}></Route>

        </Routes> */}
       
       <Leftbar />
      
   
    </div>
  );
}

export default App;
