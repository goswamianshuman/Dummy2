import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Logo } from "src/components/logo";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import { ArrowCircleUp, Menu } from "@mui/icons-material";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className={styles.body_Container}>
      <div className={styles.dataContainer}>
        {/* logocontainer */}
        <div className={styles.logoContainer}>
          {/* logo */}
          <Link href="/">
            <Logo sx={{ cursor: " pointer" }} width />
          </Link> 
        </div>
        {/* navCotnainer */}
        <div className={isMobile ? styles.navContainerMobile : styles.navContainer}>
          {/* navcontent */}
          <div className={styles.navContent}>
            <ul>
              <li>
                <a href="/Pricing">
                  <Typography variant="subtitle1">Pricing</Typography>
                </a>
              </li>
              <li>
                <a href="/Docs">
                  <Typography variant="subtitle1">docs</Typography>
                </a>
              </li>
              <li>
                <a href="/Support">
                  <Typography variant="subtitle1">Support</Typography>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.loginButton} onClick={() => router.push("/new_login")}>
              <Typography variant="subtitle1">Login / Signup</Typography>
            </button>
          </div>

          <button className={styles.mobileMenuIcons} onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <ArrowCircleUp /> : <Menu />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
