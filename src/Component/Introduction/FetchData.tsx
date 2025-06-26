import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FetchAllData = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/auth"
        );
        // const { data } = await axios.get(
        //   "https://fullstack-student-backend.onrender.com/api/products"
        // );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);
const navigate = useNavigate();
const handleNavigate =(_id:any) =>{
  navigate (`/UsersDetails/${_id}`)
};
  

  return (
  <div>
    
    <h1>Display Data Screen</h1>
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"space-evenly"}}>
      {viewResult.map((items:any)=>(
      <>
       <div 
       className="card"
        style={{width:"18rem"}}
        onClick={() => handleNavigate(items._id)}
      
       >
       

      <div className="card-body">
       <h5 className="card-title">{items.name}</h5> 
       <p className="card-text">{items.price}</p>
       <p className="card-text">{items.category}</p>
       <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
       

       </div>
       



      </>

   ))}
     
      
    </div>

   <div>

    
   </div>



  </div>


);}

export default FetchAllData;
