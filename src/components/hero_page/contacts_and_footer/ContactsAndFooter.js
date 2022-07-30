import { Container, Typography, TextField, Button, List, ListItem } from "@mui/material";
import { Logo } from "src/components/logo";
import TwitterIcon from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import styles from "../styles/Footer.module.css";

export default function ContactsAndFooter() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.upperContainer}>
        <div className={styles.logoContainer}>
          {/* logo */}
          <Logo />
        </div>
        <ul>
          <li>
            <Facebook sx={{ fontSize: "20px" }} />
          </li>
          <li>
            <TwitterIcon sx={{ fontSize: "20px" }} />
          </li>
          <li>
            <InstagramIcon sx={{ fontSize: "20px" }} />
          </li>
        </ul>
      </div>
      <div className={styles.bottomContainer}>
        <Typography variant="subtitle2" sx={{ color: "white", opacity: "60%" }}>
          Made by <span style={{ color: "#5048E5", opacity: "100%" }}>Revedor</span>. All right
          reserved
        </Typography>
        <ul>
          <li>
            <a href="">
              <Typography variant="subtitle2">Contacts</Typography>
            </a>
          </li>
          <li>
            <a href="">
              <Typography variant="subtitle2">About us</Typography>
            </a>
          </li>
          <li>
            <a href="">
              <Typography variant="subtitle2">FAQs</Typography>
            </a>
          </li>
          <li>
            <a href="">
              <Typography variant="subtitle2">Support</Typography>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
