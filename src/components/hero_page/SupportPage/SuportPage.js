import Image from "next/image";
import React from "react";
import styles from "../styles/SupportPage.module.css";

function SuportPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Content}>
        <h1>Frequently Asked Questions (FAQ)</h1>

        <h2>1) Lorem ipsum dolor sit amet consectetur rem?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis itaque accusantium
          perspiciatis fugiat, sint ratione ea architecto harum quis blanditiis accusamus
          repudiandae, enim praesentium excepturi quibusdam ullam suscipit vitae aliquid.
        </p>
        <h2>2) Lorem ipsum dolor sit amet consectetur rem?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis itaque accusantium
          perspiciatis fugiat, sint ratione ea architecto harum quis blanditiis accusamus
          repudiandae, enim praesentium excepturi quibusdam ullam suscipit vitae aliquid.
        </p>
        <h2>3) Lorem ipsum dolor sit amet consectetur rem?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis itaque accusantium
          perspiciatis fugiat, sint ratione ea architecto harum quis blanditiis accusamus
          repudiandae, enim praesentium excepturi quibusdam ullam suscipit vitae aliquid.
        </p>
      </div>
      <div className={styles.imageBG} />
    </div>
  );
}

export default SuportPage;
