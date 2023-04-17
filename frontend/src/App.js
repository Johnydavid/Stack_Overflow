// import './App.css';
import{ Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/index';
import Signup from './components/signup/index';
import Question from './components/questions/question';
import Logout from './components/logout/Logout';
// import Leftbar from './components/leftbar/Leftbar';


function App() {

  const user = localStorage.getItem("token");
  return (
    
    <div>
      
        <Routes>
        <Route path = "/" exact element = {<Home />}></Route> 

         {user && 
       <Route path = "/question" exact element = {<Question />}></Route>
         }
        <Route path = "/login" exact element = {<Login />}></Route>  
         <Route path = "/signup" exact element = {<Signup />}></Route> 
          
          <Route path = "/logout" exact element = {<Logout />}></Route>
          
           {/* <Route path = "/logout" exact element = {<Question />}></Route>
          <Route path="/home" exact element={<Navigate replace to="/login" />}></Route> */}
          {/* <Route path = "/leftbar" exact element = {<Leftbar />}></Route> */}

        </Routes>
       
       {/* <Leftbar /> */}
      
   
    </div>
  );
}

export default App;
