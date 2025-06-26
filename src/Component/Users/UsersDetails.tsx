import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const UsersDetails = () => {

    // const navigate = useNavigate ();
    //   const signUpPage = () => {
    
    //     navigate ('/Signup');
            
    //   };
    
  // When I am 1 a variable that will return a single , the state variable will be an oject
  const [viewResult, setViewResult] = useState<any>({});
  console.log(viewResult);
  const {id} = useParams();
  console.log(id);
  useEffect(() => { 
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `https://fullstack-student-backend.onrender.com/api/auth/${id}`
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
      {/* <h1>Product Details</h1> */}

      
      {/* display data */}
      <h1>{viewResult?.firstName}</h1>
      <h1>{viewResult?.lastName}</h1>
      <h1>{viewResult?.firstName}</h1>
      <h1>{viewResult?.firstName}</h1>
      <h1>{viewResult?.firstName}</h1>
    
    </div>
  )
}

export default UsersDetails
