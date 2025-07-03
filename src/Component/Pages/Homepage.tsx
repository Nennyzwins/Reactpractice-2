import React from 'react'
import FetchAllData from '../Introduction/FetchData'
import FetchTrial from '../Introduction/FetchTrial'
import UsersInfo from '../Users/UsersInfo'
import UsersDetails from '../Users/UsersDetails'
import Signup from '../Signup'
import TailWind from '../TailWind'
import Login from '../Login'
import UpdateUserProfile from '../UpdateProfile/UpdateUserProfile'


const Homepage = () => {
  return (
    <div>
      {/* <FetchAllData/>
      <FetchTrial/>  */}
      <UsersDetails/>
      <UsersInfo/> 
      <Signup/>
      <TailWind/>
      <Login/>
      <UpdateUserProfile/>

      
     

      
      
      
    </div>
  )
}

export default Homepage
