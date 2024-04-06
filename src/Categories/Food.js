import React from 'react'
import food from '../images/food.jpg'
import CardBody from '../CardBody'
function Food() {
  return (
    <div 
    style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between",
        margin: "10px 35px",
        gap: "20px",
      }}>
   <CardBody title='restraunts' image={food}/>
   <CardBody title='hotels' image={food}/>
   <CardBody title='catering' image={food}/>
   <CardBody title='sweet_shop' image={food}/>
   <CardBody title='grocery_shop' image={food}/>
   <CardBody title='chef' image={food}/>
   <CardBody title='kitchen_shop' image={food}/>
   <CardBody title='maid' image={food}/>
  
  </div>
  )
}

export default Food
