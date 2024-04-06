import React from 'react'
import CardBody from '../CardBody'
import medication from '../images/medication.jpg'

function Medication() {
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
   <CardBody title='doctors' image={medication}/>
   <CardBody title='clinics' image={medication} />
   <CardBody title='medical_college'  image={medication} />
   <CardBody title='medical_shop'  image={medication} />
   <CardBody title='animals_medical_shop'  image={medication} />
   <CardBody title='blood_bank'  image={medication}/>
   <CardBody title='nurses'  image={medication}/>
   <CardBody title='animals_doctor'  image={medication}/>
  
  </div>
  )
}

export default Medication
