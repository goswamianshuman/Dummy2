import Head from "next/head";
import { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { Quota } from "src/components/dashboard/quota";
import { Days_left } from "src/components/dashboard/days_left";
import Pop_up from "./pop_up";
import { supabase } from "../api/Supabase";
import Parser from "src/components/parser/Parser";
import axios from "../api/axios";
import Csv_upload from "src/components/popups/Csv_upload";

const user = supabase.auth.user();

export default function Dashboard() {
  const [opencsvPopup, setCsvOpenPopup] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  //checking if the user is registerd or not.

  console.log(user);
  useEffect(() => {
    userCheck();
  }, [user]);

  function userCheck() {
    console.log(user?.id);
    const url = `/user_data_check?user_id=${user?.id}`;
    axios
      .get(user ? url : null)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.Status);
        console.log(typeof res.data.Status);
        if (res.data.Status === false && user?.id !== undefined) {
          console.log("user not registered");
          setOpenPopup(true);
        }
        if (user?.id === undefined) {
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Head>
        <title>Dashboard | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        {/* added quota and days left */}
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "10vh",
          }}
        >
          <Container
            sx={{
              flex: "0.6",
              height: "30vh",
              width: "100%",
              paddingTop: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Container>
              <Parser />
            </Container>
          </Container>
        </Container>
      </Box>

      {/* <Button onClick={() => }>click</Button> */}
      <Pop_up openPopup={openPopup} setOpenPopup={setOpenPopup} />
      <Csv_upload opencsvPopup={opencsvPopup} setCsvOpenPopup={setCsvOpenPopup} />
    </>
  );
}

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

