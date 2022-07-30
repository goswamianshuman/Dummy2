import styles from "../css/TierCard.module.css";

import React from "react";
import axios from "src/api/axios";
import { supabase } from "src/api/Supabase";
import { useRouter } from "next/router";

const user = supabase.auth.user();
function CardFree() {
  const router = useRouter();

  const createfreeCheckoutSession = function () {
    return fetch("https://b2b.sharpshopper.app/free-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: "free",
        userid: user?.id,
      }),
    }).then(function (result) {
      console.log(result);
      router.push("/dashboard");
      return result.json();
    });
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeading}>Free Subscription</div>
      <div className={styles.cardPrice}>
        <div>
          <span>$</span>
          00
          {/* <sup>00</sup>*/}
        </div>
        <p className={styles.month}>per month</p>
      </div>
      <ul>
        <li>50 requests/ month</li>
      </ul>
      <button onClick={createfreeCheckoutSession} role="link" className={styles.button}>
        select
      </button>
    </div>
  );
}

export default CardFree;
