import React, { useEffect, useState } from "react";
import axios from "axios";
import './FetchTrial.css'

const FetchAllData = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/products"
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
    <h1>Display Data Screen</h1>
    <div className="Main-card-div1">
        {viewResult.map((items:any)=>(



        <>

          <div className="Main-card-div">

            <div>     
             {/* image came as an array so we map */}
              {items.images.map((items:any)=>(

               <>
           
               <img src={items.url} className="Card-image"/>
               </>
             ))}
           </div>

        <div className="Card-Body">
            <h5 className="card-title">{items.firstName}</h5> 
            <p className="card-text">{items.lastName}</p>
            <p className="card-text">{items.phoneNumber}</p>
            <p className="card-text">{items.email}</p>
            <h5 className="card-title">{items.isAdmin}</h5>
            <a href="#" className="btn-btn-primary">Add to Cart</a>
        </div>

          </div>
        
        </>
        ))}
    </div>
    
</div>
       



      

    





);}

export default FetchAllData;
