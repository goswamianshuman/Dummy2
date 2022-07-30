import { Container } from "@mui/material";
import { Circle } from "better-react-spinkit";
import Head from "next/head";
import { Logo } from "./logo";

function loading() {
  return (
    //center element
    <Container
      sx={{
        height: "90vh",
        width: "500vh",
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "0px",
      }}
    >
      <Head>
        <title>Loading</title>
        <link rel="icon" href={Logo} />
      </Head>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Logo />
        <Circle color="blue" size={40} />
      </Container>
    </Container>
  );
}

export default loading;
