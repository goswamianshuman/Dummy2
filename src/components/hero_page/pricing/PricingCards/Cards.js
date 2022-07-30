import React, { useEffect } from "react";
import styles from "../../styles/PricingCards.module.css";
import { useRouter } from "next/router";

function Cards({ membershipName, price, request, aud }) {
  const router = useRouter();

  return (
    <div className={styles.cardBody}>
      <div className={styles.box}>
        <div className={styles.Header}>
          <p>{membershipName}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomHead}>
            <div>
              <span>$</span>
              {price}
              {/* <sup>00</sup> */}
              {aud}
            </div>
            <p className={styles.month}>per month</p>
          </div>
          <div className={styles.bottomData}>
            <ul>
              <li>{request} / month</li>
              <li>option A</li>
              <li>option A</li>
              <li>option A</li>
            </ul>

            <button onClick={() => router.push("/new_login")}>buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
