import React from "react";
import CardBody from "./CardBody";
import edu from "./edu.jpg";
import med from "./med.jpg";
import foo from "./foo.jpg";
import electrician from "./electrician.jpg";
import rent from "./rent.jpg";
import plumber from "./plumber.jpg";
import labour from "./labour.jpg";
import beauty from "./beauty.jpg";
import Banner from "./Banner";
// import './App.css'
function ServiceItem() {
  return (
    <>
      <Banner />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignContent: "space-between",
          margin: "10px 35px",
          gap: "20px",
          backgroundColor:'rgb(128, 188, 189)'
        }}
      >
        <CardBody title={"Education"} image={edu} />
        <CardBody title={"Medication"} image={med} />
        <CardBody title={"Food"} image={foo} />
        <CardBody title={"Beauty"} image={beauty} />
        <CardBody title={"Plumber"} image={plumber} />
        <CardBody title={"Labour"} image={labour} />
        <CardBody title={"Electrician"} image={electrician} />
        <CardBody title={"Rent"} image={rent} />
      </div>
    </>
  );
}

export default ServiceItem;
