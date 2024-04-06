import React from "react";
import CardBody from "./CardBody";
import edu from "./images/edu.jpg";
import medication from "./images/medication.jpg";
import food from "./images/food.jpg";
import electrician from "./images/electrician.jpg";
import rent from "./images/rent.jpg";
import plumber from "./images/plumber.jpg";
import labour from "./labour.jpg";
import beauty from "./images/beauty.jpg";
import Banner from "./Banner";
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
        }}
      >
        <CardBody title={"education"} image={edu} />
        <CardBody title={"medication"} image={medication} />
        <CardBody title={"food"} image={food} />
        <CardBody title={"beauty"} image={beauty} />
        <CardBody title={"plumber"} image={plumber} />
        <CardBody title={"labour"} image={labour} />
        <CardBody title={"electrician"} image={electrician} />
        <CardBody title={"rent"} image={rent} />
      </div>
    </>
  );
}

export default ServiceItem;
