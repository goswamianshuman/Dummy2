import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import styles from "../styles/Workflow.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Workflow() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []); 

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Detail_Container}>
        {/* left */}
        <div className={styles.left}>
          <h2 data-aos="fade-right" data-aos-duration="1000">
            Amazon Has been tracking your store to dynamically change it’s pricing strategy
          </h2>
          <h1 data-aos="fade-right" data-aos-duration="1500">
            Now it’s level Playing Field
          </h1>
          <h6 data-aos="fade-right" data-aos-duration="2000">
            With our simple GUI and API
          </h6>
          <Button
            data-aos="fade-right"
            data-aos-duration="2500"
            variant="contained"
            sx={{ marginTop: "20px" }}
          >
            Start Free
          </Button>
        </div>
        {/* right */}
        <div className={styles.right}>
          <div data-aos="fade-in" data-aos-duration="1500" className={styles.image_one} />
          <div data-aos="fade-in" data-aos-duration="2000" className={styles.image_two} />
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 data-aos="fade-out" data-aos-duration="3000">
          Gather Competitive intelligence at scale, with ease
        </h1>
      </div>
    </div>
  );
}

export default Workflow;
