import { Start } from "@mui/icons-material";
import React from "react";
import styles from "../styles/DocsContent.module.css";
import StartedContent from "./content/gettingStartedContent";
import SearchApi from "./content/SearchApi";
import GettingStarted from "./pages/GettingStarted";

function DocsContent() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <Start color="white" />
          <h2>Getting Started</h2>
        </div>
        <GettingStarted />
      </div>
      <div className={styles.bodyContainer}>
        <StartedContent />
        <SearchApi />
      </div>
    </div>
  );
}

export default DocsContent;
