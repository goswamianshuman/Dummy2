import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {

  return (
    <div className={styles.HeroContainer}>
      <div className={styles.heroDetail} />
      <div className={styles.heroDetailBlur}>
        <h1>
          <span style={{ color: "rgb(80, 72, 229)" }}>Track Amazon Product</span> prices, make
          better pricing decisions - win back customers
        </h1>
      </div>
    </div>
  );
}

export default Hero;
