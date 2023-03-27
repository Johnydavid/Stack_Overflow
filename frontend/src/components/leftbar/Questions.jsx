import React from 'react'
import index from '../home'
import Navbar from '../home/Navbar'
import Signup from '../signup'
import "./questions.module.css"
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

function Questions() {
    const navigate = useNavigate();


    const handleClick =() =>{
        const token = localStorage.getItem('token');
        if(token === null){
            
           
          
            navigate("/signup")
            return(
                
        <Routes>
        <Route path = "/signup" exact element = {<Signup />}></Route>
    </Routes>
            )

                     

           
        }    else{

        }
        
   
    }
  return (
    <div>
    <div className={"nav"}>
         <Navbar /> 
         </div>
   
    <div className = {"questClass"}>
           
        <div >
            <h4 > All Questions</h4>
            <button type="button" className={"btn btn-primary"} onClick={handleClick}> Ask Question </button>
      
        </div>

        
        </div>
        </div>
  )
}

export default Questions