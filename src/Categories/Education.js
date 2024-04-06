import React from 'react'
import CardBody from '../CardBody'
import school from '../images/school.jpg'
import college from '../images/college.jpg'


function Education() {
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
     <CardBody title='school' image={school}/>
     <CardBody title='college' image={college}/>
     <CardBody title='coaching' image={school}/>
     <CardBody title='tution' image={school}/>
     <CardBody title='stationary_shop' image={school}/>
     <CardBody title='library' image={school}/>
     <CardBody title='school' image={school}/>
     <CardBody title='school' image={school}/>
    </div>
  )
}

export default Education
