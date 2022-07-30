import React from "react";
import styles from "../styles/PricingPage.module.css";
import Cards from "./PricingCards/Cards";

function PricingPage() {
  return (
    <div className={styles.mainContainer}>
      <h1>Pricing Page</h1>
      <div className={styles.pricingContainer}>
        <Cards membershipName="Free" price="0" aud="" request="50" />
        <Cards membershipName="Startup" price="29" aud="/AUD 39" request="10,000" />
        <Cards membershipName="Growth" price="59" aud="/AUD 79" request="50,000" />
        <Cards membershipName="pro" price="99" aud="/AUD 29" request="100,000" />
      </div>
    </div>
  );
}

export default PricingPage;
