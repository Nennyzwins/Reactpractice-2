import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const UsersInfo = () => {

  const navigate = useNavigate ();
  const signUpPage = () => {

    navigate ('/Signup');
        
  };

  
 
  const LoginPage = () => {

    navigate ('/Login');
        
  };


  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/auth"
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);

  

  return (
  <div>
    
    <h1><a href="/Signup">Display Data Screen</a></h1>


    <div>
        {viewResult.map((items:any)=>(
            
            <>
            <div className="card mb-3" style={{width: "18rem", marginLeft:"100px"}}>

               <div className="card-body">
                <h1 className="card-title">Special title treatment</h1>
                <h3>First Name:<span>{items.firstName}</span></h3>
                <h3>Last Name:<span>{items.lastName}</span></h3>
                <h3>Phone Number: <span>{items.phoneNumber}</span></h3>
                <h3>Email:<span>{items.email}</span></h3>
                <a href="#" className="btn btn-primary">See More</a>
                </div>
                
             
            </div>

        
            
            
            </>))}

          

    </div>
     <div style={{padding:"30px"}}>
        <button style={{height:"50px", width:"100px", backgroundColor:"blue", color:"white"}} 
        onClick={signUpPage}>Sign Up</button>
     </div>


     <div style={{padding:"30px"}}>
        <button style={{height:"50px", width:"100px", backgroundColor:"blue", color:"white"}} 
        onClick={LoginPage}>Login Page</button>
     </div>
         
    

  </div>


);}

export default UsersInfo;
