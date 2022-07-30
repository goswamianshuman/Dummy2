import Head from "next/head";
import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { Logo } from "../components/logo";
import { Google as GoogleIcon } from "../icons/google";
import NextLink from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Supabase, supabase } from "../api/Supabase";
import axios from "../api/axios";

//main code

function new_login() {
  const router = useRouter();
  const existUser = supabase.auth.user();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [tableData, setTableData] = useState([]);

  async function signIn() {
    try {
      const { error } = await supabase.auth.signIn({
        email: email,
        password: pwd,
      });

      if (error) throw error;
      alert("successfully logged in");
      router.push("/dashboard");
    } catch (error) {
      alert(error.message + " " + "please register if havn't.");
    }
  }

  async function signInWithgoogle() {
    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: "google",
      },
      {
        // redirectTo: "https://sharpshopper-b2b-19s8pw7nq-revedorindia.vercel.app/dashboard",
        // redirectTo: "http://localhost:3000/dashboard",
        redirectTo: "https://dummy-tan-eight.vercel.app/dashboard",
      }
    );
  }

  return (
    <>
      <Head>
        <title>Login | Material Kit</title>
      </Head>

      <Box
        component="main"
        sx={{
          bgcolor: "#070713",
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container
          sx={{
            bgcolor: "#242a3896",
            borderRadius: "15px",
            padding: "30px",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            minHeight: "100%",
          }}
          maxWidth="sm"
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Logo />
              <Box sx={{ my: 1 }}>
                <Typography color="white" variant="h4">
                  Sign in
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Sign in on the internal platform
                </Typography>
              </Box>
            </Container>
            <Container>
              <TextField
                fullWidth
                label="Email Address"
                margin="normal"
                type="email"
                variant="outlined"
                color="info"
                id="userEmail"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                sx={{
                  input: { color: "whitesmoke" },
                }}
              />
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                variant="outlined"
                color="info"
                type="password"
                id="userPwd"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                sx={{
                  input: { color: "whitesmoke" },
                }}
              />
            </Container>

            <Container>
              <Grid container pt={2}>
                <Button
                  color="primary"
                  disabled={!email || !pwd ? true : false}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={signIn}
                >
                  Sign In Now
                </Button>
              </Grid>
            </Container>

            <Grid
              container
              pt={2}
              sx={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <Typography variant="subtitle1" fontSize={18}>
                or
              </Typography>
            </Grid>

            <Container>
              <Grid container pt={2}>
                <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  size="large"
                  variant="contained"
                  onClick={signInWithgoogle}
                >
                  Login with Google
                </Button>
              </Grid>
            </Container>

            <Container
              pt={15}
              sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <Typography
                sx={{
                  pb: 1,
                  pt: 2,
                }}
                color="textSecondary"
                variant="body2"
              >
                Don&apos;t have an account?{" "}
                <NextLink href="/new_register">
                  <Link
                    to="/new_register"
                    variant="subtitle2"
                    underline="hover"
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    Sign Up
                  </Link>
                </NextLink>
              </Typography>

              <Typography
                sx={{
                  pb: 1,
                  pt: 2,
                }}
                color="textSecondary"
                variant="body2"
              >
                <NextLink href="/">
                  <Link
                    to="/"
                    variant="subtitle2"
                    underline="hover"
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    Return to Homepage
                  </Link>
                </NextLink>
              </Typography>
            </Container>
          </form>
        </Container>
      </Box>
    </>
  );
}

export default new_login;
