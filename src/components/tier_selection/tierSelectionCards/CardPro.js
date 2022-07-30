import styles from "../css/TierCard.module.css";

import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { supabase } from "src/api/Supabase";
import { useRouter } from "next/router";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const user = supabase.auth.user();

function CardPro() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log("Order canceled -- continue to shop around and checkout when you’re ready.");
    }
  }, []);

  const createCheckoutSession = () => {
    return fetch("https://b2b.sharpshopper.app/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: "price_1KnzVnCWPEDBjQXKUut6YJa2",
        userid: user?.id,
        uname: "lily",
      }),
    }).then(function (result) {
      console.log(result);
      return result.json();
    });
  };

  return (
    <form action="/api/checkoutPrimium" method="POST">
      <div className={styles.cardContainer}>
        <div className={styles.cardHeading}>Primium Subscription</div>
        <div className={styles.cardPrice}>
          <div>
            <span>$</span>
            99
            {/* <sup>00</sup> */}
            /AUD 129
          </div>
          <p className={styles.month}>per month</p>
        </div>
        <ul>
          <li>100,000 requests/ month</li>
        </ul>
        <button onClick={createCheckoutSession} type="submit" role="link" className={styles.button}>
          select
        </button>
      </div>
    </form>
  );
}

export default CardPro;
