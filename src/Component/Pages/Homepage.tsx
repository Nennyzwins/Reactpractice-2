import React from 'react'
import FetchAllData from '../Introduction/FetchData'
import FetchTrial from '../Introduction/FetchTrial'
import UsersInfo from '../Users/UsersInfo'
import UsersDetails from '../Users/UsersDetails'
import Signup from '../Signup'

const Homepage = () => {
  return (
    <div>
      {/* <FetchAllData/>
      <FetchTrial/>  */}
      <UsersDetails/>
      <UsersInfo/> 
      <Signup/>
      
    </div>
  )
}

export default Homepage
