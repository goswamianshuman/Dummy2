import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import styles from "../styles/Services.module.css";
import Cards from "./cards/Cards";
import Aos from "aos";
import "aos/dist/aos.css";

function services() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Typography
        data-aos="fade-down"
        data-aos-duration="2000"
        sx={{ marginTop: "30px" }}
        color="white"
        textAlign="center"
        variant="h2"
      >
        Benefits
      </Typography>
      <div className={styles.gridContainer}>
        <Cards
          Heading="Accurate and reliable"
          Description="AI Driven data extraction with 99.99% accuracy*"
          ImageSrc="/static/images/icons/1.png"
        />
        <Cards
          Heading="Fast and Scalable"
          Description="Track one, tens or thousands of products with speed.."
          ImageSrc="/static/images/icons/2.png"
        />
        <Cards
          Heading="Versatile"
          Description="Search by Product Name or ASIN"
          ImageSrc="/static/images/icons/3.png"
        />
        <Cards
          Heading="Built for Everyone"
          Description="Search with a Simple UI or integrate with our powerful API. Get data in CSV or JSON"
          ImageSrc="/static/images/icons/4.png"
        />
        <Cards
          Heading="24X7 Availability"
          Description="Our commitment to deliver a robust platform, guaranteed by SLA"
          ImageSrc="/static/images/icons/5.png"
        />
        <Cards
          Heading=" Simple Pricing "
          Description="Start free and pay as you grow with our cost effective pricing plans"
          ImageSrc="/static/images/icons/6.png"
        />
      </div>
    </div>
  );
}

export default services;
