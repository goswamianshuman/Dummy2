import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import styles from "../styles/Query.module.css";
import { makeStyles } from "@mui/styles";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  topData: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "21px",
    },
  },
  textFields: {
    background: "white",
    border: "none",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  Button: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

function FaqQuery() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <divs style={{ height: "30vh" }} className={styles.mainContainer}>
      <div style={{ height: "40%" }} className={styles.ContentContainer}>
        <Typography
          data-aos="fade-in"
          data-aos-duration="2000"
          variant="h4"
          className={classes.topData}
        >
          Still Have issues?
        </Typography>

        <form data-aos="fade-in" data-aos-duration="2000" className={styles.email}>
          <TextField type="email" placeholder="Contact Support" className={classes.textFields} />
          <Button
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={classes.Button}
            variant="contained"
            color="success"
          >
            Send
          </Button>
        </form>
      </div>
    </divs>
  );
}

export default FaqQuery;
