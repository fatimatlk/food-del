import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExplorMenu from '../../components/ExplorMenu/ExplorMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const[category,setcategory]=useState("All")

  return (
    <div>
      <Header/>
      <ExplorMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
