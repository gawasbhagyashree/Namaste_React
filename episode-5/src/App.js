
import './App.css';
import { useState } from 'react';

import Header from './components/Header.js'
import RestaurantContainer from './components/RestaurantContainer.js';
import CuisineBtns from './components/CuisineBtns.js';
import { resObj } from './utils/constants.js';


const Body = () => {

//? this is sent to the CuisineBtns as a prop 
const [selectedCuisine, setSelectedCuisine]=useState('ALL')

const listOfAllRestaurants = resObj.restaurants

const filteredRestaurants = selectedCuisine === 'ALL'? (listOfAllRestaurants) :(listOfAllRestaurants.filter(rest=>{
  return(
    rest.info.cuisines.includes(selectedCuisine)
  )
})) 

  return (
    <>
      <Header />
      <CuisineBtns
       setSelectedCuisine={setSelectedCuisine} />

      {/* //? Only the filtered restaurants are sent as props to RestaurantContainer */}

      <RestaurantContainer restaurants = {filteredRestaurants}/>
    </>

  )
}

export default Body