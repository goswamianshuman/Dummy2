import { CSVLink } from "react-csv";
import { Button, Container, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import LoadingSpinner from "../loading-spinner/Spinner";
import { useState } from "react";
import Csv_upload from "src/components/popups/Csv_upload";
import styles from "./csvdata.module.css";

function CSV(props) {
  // const [opencsvPopup, setCsvOpenPopup] = useState(false);
  const headers = [
    { label: "Asin", key: "Asin" },
    { label: "Datetime", key: "Datetime" },
    { label: "Image_url", key: "Image_url" },
    { label: "Price", key: "Price" },
    { label: "Product_Name", key: "Product_Name" },
    { label: "Product_url", key: "Product_url" },
    { label: "Ratings", key: "Ratings" },
    { label: "Review", key: "Review" },
  ];

  const csvReport = {
    data: props.data,
    headers: headers,
    filename: "data.csv",
  };

  return (
    <div>
      {/* <CSVLink {...csvReport}><button>DownLoad CSV Data</button></CSVLink><br /><br /> */}
      {!props.loading && (
        <Container sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <CSVLink {...csvReport}>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <DownloadIcon sx={{ color: "blue" }} />
              <Typography sx={{ textAlign: "center", fontSize: "10px", fontWeight: "bold" }}>
                Download CSV Template
              </Typography>
            </Button>
          </CSVLink>
        </Container>
      )}
      <br />

      {props.loading ? <LoadingSpinner /> : null}

      <div className={styles.tabledata}>
        <tbody>
          <tr>
            <th>Datetime</th>
            <th>Product_Name</th>
            <th>Asin</th>
            <th>Product_url</th>
            <th>Price</th>
            <th>Image_url</th>
            <th>Ratings</th>
            <th>Review</th>
          </tr>
          {props.data.map((item, i) => (
            <tr key={i}>
              <td>{item.Datetime}</td>
              <td>{item.Product_Name}</td>
              <td>{item.Asin}</td>
              <td>{item.Product_url}</td>
              <td>{item.Price}</td>
              <td>{item.Image_url}</td>
              <td>{item.Ratings}</td>
              <td>{item.Review}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}

export default CSV;
