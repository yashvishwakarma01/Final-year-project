import React from 'react'
import rent from '../images/rent.jpg'
import CardBody from '../CardBody'
function Rent() {
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
   <CardBody title='house_rent' image={rent}/>
   <CardBody title='room_rent' image={rent}/>
   <CardBody title='shop_rent' image={rent}/>
   <CardBody title='car_rent' image={rent}/>
  </div>
  )
}

export default Rent
