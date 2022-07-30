import { Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../../styles/Cards.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Cards(props) {
  const { Heading, Description, ImageSrc } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div data-aos="fade-in-out" data-aos-duration="2500" className={styles.ImageContainer}>
        <Image height={25} width={25} src={ImageSrc} />
      </div>
      <Typography
        data-aos="fade-out"
        data-aos-duration="3000"
        textAlign="center"
        mt={2}
        gutterBottom
        color="white"
        variant="h5"
      >
        {Heading}
      </Typography>
      <Typography
        data-aos="fade-out"
        data-aos-duration="3000"
        textAlign="center"
        color="white"
        sx={{ opacity: "50%" }}
        variant="subtitle2"
      >
        {Description}
      </Typography>
    </div>
  );
}

export default Cards;
