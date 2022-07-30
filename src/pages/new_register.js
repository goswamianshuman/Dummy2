import Head from "next/head";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { supabase } from "../api/Supabase";
import { Logo } from "src/components/logo";

// const EMALI_REGEX = /^[a-z][@[a-z]][.[a-z]](50,30,10)$/;
// const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function new_register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [terms, setTerms] = useState(false);

  async function signUp() {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: pwd,
      });

      if (error) throw error;
      alert("account created, please conform registration in your email.");
      router.push("/new_login");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Head>
        <title>Register | Material Kit</title>
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          maxWidth="sm"
        >
          <Logo />{" "}
          {/* {success ? (
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "white", fontSize: "25px" }}>success!</Typography>
              <NextLink href="/dashboard">
                <Typography sx={{ color: "blue", cursor: "pointer" }}>SignIn</Typography>
              </NextLink>
            </Container>
          ) : ( */}
          <form onSubmit={(e) => e.preventDefault()}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                my: 3,
              }}
            >
              <Typography color="white" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>

            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            ></Container>

            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                gap: "25px",
                Color: "white",
              }}
            >
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                name="firstName"
                variant="outlined"
                color="info"
                sx={{
                  input: { color: "whitesmoke" },
                }}
              />

              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                name="lastName"
                variant="outlined"
                color="info"
                sx={{
                  input: { color: "whitesmoke" },
                }}
              />
            </Container>

            <Container>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                id="useremail"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-describedby="uidnote"
                variant="outlined"
                margin="normal"
                color="info"
                sx={{
                  input: { color: "whitesmoke" },
                }}
              />

              <TextField
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-describedby="pwdnote"
                fullWidth
                label="Password"
                name="password"
                type="password"
                margin="normal"
                variant="outlined"
                color="info"
                sx={{
                  input: { color: "whitesmoke" },
                }}
              />
            </Container>

            <Container>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  ml: -1,
                }}
              >
                <Checkbox name="policy" onChange={(e) => setTerms(e.target.checked)} />
                <Typography color="textSecondary" variant="body2">
                  I have read the{" "}
                  <NextLink href="#" passHref>
                    <Link color="primary" underline="always" variant="subtitle2">
                      Terms and Conditions
                    </Link>
                  </NextLink>
                </Typography>
              </Box>
            </Container>

            <Container>
              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  disabled={!email || !pwd || !terms ? true : false}
                  fullWidth
                  size="large"
                  type="submit"
                  onClick={signUp}
                  variant="contained"
                >
                  Sign Up Now
                </Button>
              </Box>
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
                Have an account?{" "}
                <NextLink href="/new_login" passHref>
                  <Link variant="subtitle2" underline="hover">
                    Sign In
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

export default new_register;
