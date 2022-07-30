import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import LoadingSpinner from "../loading-spinner/Spinner";
import styles from "./json.module.css";
function Json(props) {
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(props.data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <div>
      {/* <button type="button"
        onClick={exportData}>
        Download JSON Data
      </button> */}
      {!props.loading && (
        <Button
          sx={{
            textDecoration: "none",
            fontSize: "13px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "&:hover": {
              color: "green",
            },
          }}
          onClick={exportData}
        >
          <DownloadIcon sx={{ color: "#f7cf28" }} />
          <h6> DOWNLOAD JSON</h6>
        </Button>
      )}
      {props.loading ? <LoadingSpinner /> : null}

      <div className={styles.data}>
        {props.data.map((item) => {
          return (
            <div key={item.id} className={styles.items}>
              <hr></hr>
              <ul>
                <li>
                  <strong>Asin:</strong> {JSON.stringify(item.Asin)}
                </li>
                <li>
                  <strong>Datetime:</strong> {JSON.stringify(item.Datetime)}
                </li>
                <li>
                  <strong>Image_url:</strong> {JSON.stringify(item.Image_url)}
                </li>
                <li>
                  <strong>Price:</strong> {JSON.stringify(item.Price)}
                </li>
                <li>
                  <strong>Product_Name:</strong> {JSON.stringify(item.Product_Name)}
                </li>
                <li>
                  <strong>Product_url:</strong> {JSON.stringify(item.Product_url)}
                </li>
                <li>
                  <strong>Ratings:</strong> {JSON.stringify(item.Ratings)}
                </li>
                <li>
                  <strong>Review:</strong> {JSON.stringify(item.Review)}
                </li>
              </ul>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Json;
