import React from "react";
import { Container, Typography, Card, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Logo } from "src/components/logo";
import { supabase } from "../api/Supabase";
import axios from "../api/axios";
import { useRouter } from "next/router";
import Slide from "@mui/material/Slide";
import CardFree from "src/components/tier_selection/tierSelectionCards/CardFree";
import CardStarter from "src/components/tier_selection/tierSelectionCards/CardStarter";
import CardStandard from "src/components/tier_selection/tierSelectionCards/CardStandard";
import CardPro from "src/components/tier_selection/tierSelectionCards/CardPro";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function tier_selection(props) {
  const { openTier, setTireOpen } = props;
  const user = supabase.auth.user();
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setTier();
    console.log("clicked");
  }

  function setTier() {
    axios
      .post(`/tire_selection?user_id=${user.id}&tier=free`)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        router.push("/dashboard");
        location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <Dialog
      maxWidth
      sx={{ bgcolor: "whitesmoke" }}
      TransitionComponent={Transition}
      keepMounted
      open={openTier}
    >
      <DialogTitle>
        <Typography variant="h2" color="primary" textAlign="center">
          Select your Tier
        </Typography>
      </DialogTitle>
      <div
        style={{
          height: "80vh",
          width: "80%",
          paddingLeft: "100px",
          paddingRight: "100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          alignItems: "center",
          justifyItems: "center",
          gap: "30px",
        }}
      >
        <CardFree />
        <CardStarter />
        <CardStandard />
        <CardPro />
      </div>
    </Dialog>
  );
}

export default tier_selection;
