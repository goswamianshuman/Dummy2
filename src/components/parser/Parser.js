import React, { useState, useEffect } from "react";
import BasicTabs from "./OutputTabs";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "src/api/axios";
import { supabase } from "src/api/Supabase";
import { Button, Container, Grid, Typography } from "@mui/material";
import Csv_upload from "../popups/Csv_upload";
import { Quota } from "../dashboard/quota";
import { Days_left } from "../dashboard/days_left";
// import { CSVLink } from "react-csv";
import styles from "./parser.module.css";

const user = supabase.auth.user();
function Parser(props) {
  const [opencsvPopup, setCsvOpenPopup] = useState(false);
  const [product, setProduct] = useState("");
  const [visible, setVisible] = useState(false);
  const [dataProduct, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState("");
  const [quota, setQuota] = useState("");
  const [search_count, setSearch_count] = useState("");

  useEffect(() => {
    axios
      .get(`/search_count?user_id=${user?.id}`)
      .then((response) => {
        // console.log(response.data.total_search_count);
        // console.log(response.data.remaining_search_count);
        setSearch_count(response.data.total_search_count);
        setQuota(response.data.remaining_search_count);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // *********************************code for parser*****************//

  const searchProduct = () => {
    setIsLoading(true);
    axios
      .get(`/scrapdata?api_key=${key}&product_name=${product}&format=json_d`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    const searchword = e.target.value;
    setProduct(searchword);
    console.log(searchword);
    // if (e.key === "Enter") {
    //   console.log({ inputValue: e.target.value });
    //   searchProduct(searchword)

    // }
  };

  const data = dataProduct;
  const loading = isLoading;

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      console.log(product);
      searchProduct(product);
      setVisible(true);
      setQuota();
    }
  };

  const upload = () => {
    setCsvOpenPopup(true);
  };

  useEffect(() => {
    axios
      .get(`/user_data_output?user_id=${user?.id}`)
      .then((res) => {
        setKey(res.data[0].api_key);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <div className="parserbody">
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <Quota quota={quota} search_count={search_count} />
        <Days_left />
      </Grid>
      <div className={styles.wrap}>
        <div class={styles.search}>
          <button type="submit" className={styles.searchButton}>
            <i class="fa fa-search">
              <SearchIcon sx={{ marginTop: "7px" }} />
            </i>
          </button>
          <input
            className={styles.searchTerm}
            type="text"
            value={product}
            onChange={handleChange}
            onKeyPress={onKeyEnter}
            disabled={isLoading}
            placeholder="search..."
          />
        </div>

        {visible && (
          <button
            onClick={() => {
              location.reload();
            }}
            className={styles.new_Search}
          >
            New Search
          </button>
        )}
      </div>
      <br />
      {/* <button onClick={searchProduct}>Search</button> */}
      {!visible && (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              flexDirection: "column",
              cursor: "pointer",
            }}
            onClick={upload}
          >
            <UploadFileIcon sx={{ color: "orangered" }} />
            <h6>Upload CSV Template</h6>
          </Button>

          {/* <CSVLink {...csvReport}> */}
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              cursor: "pointer",
            }}
            target="_blank"
            href="https://b2b.sharpshopper.app/template_download"
          >
            <DownloadIcon sx={{ color: "blue" }} />
            <Typography sx={{ textAlign: "center", fontSize: "10px", fontWeight: "bold" }}>
              Download CSV Template
            </Typography>
          </Button>
          {/* </CSVLink> */}

          <Csv_upload opencsvPopup={opencsvPopup} setCsvOpenPopup={setCsvOpenPopup} />
        </Container>
      )}
      {visible && <BasicTabs data={data} loading={loading} />}
    </div>
  );
}

export default Parser;
