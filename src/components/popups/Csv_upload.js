import { LabelImportant } from "@mui/icons-material";
import {
  Alert,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormData from "form-data";
import axios from "src/api/axios";

export default function Csv_upload(props) {
  const { opencsvPopup, setCsvOpenPopup } = props;
  const [success, setSuccess] = useState("");
  const [alert, setAlert] = useState(false);
  const data = new FormData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data.get("csv_file"));
    await axios
      .post("/upload_csv", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        setSuccess(res.data.Status);
      });
    setCsvOpenPopup(false);
    console.log(success);
    showAlert();
  };

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  if (alert === true) {
    return success === "Success" ? (
      <Alert variant="filled" severity="success">
        File Successfully uploaded, you will receive the response in your email id provided
      </Alert>
    ) : (
      <Alert variant="filled" severity="error">
        Error, Unable to process please try again
      </Alert>
    );
  }

  return (
    <Dialog open={opencsvPopup} sx={{ width: "100%", height: "100%" }}>
      <DialogTitle
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom variant="h5">
          upload csv file
        </Typography>
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Container sx={{ height: "10vh", width: "60vh", display: "flex" }}>
            <Typography
              sx={{ flex: "0.4", display: "flex", alignItems: "center", gap: "2px" }}
              variant="subtitle1"
            >
              Select file <LabelImportant />
            </Typography>
            <Input
              onChange={(e) => {
                console.log(e.target.files[0]);
                if (e.target && e.target.files[0]) {
                  data.append("csv_file", e.target.files[0]);
                }
              }}
              margin="normal"
              disableUnderline
              sx={{ flex: "0.6" }}
              type="file"
            />
          </Container>
          <Container
            sx={{ display: "flex", alignItems: "center", justifyContent: "end", gap: "20px" }}
          >
            <Button variant="outlined" color="error" onClick={() => setCsvOpenPopup(false)}>
              Cancle
            </Button>
            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
          </Container>
        </form>
      </DialogContent>
    </Dialog>
  );
}
