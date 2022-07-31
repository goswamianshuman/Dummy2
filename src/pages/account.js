import Head from "next/head";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { AccountUpdates } from "src/components/account/account-profile-updates";
import { SettingsPassword } from "src/components/settings/settings-password";
import { AccountProfile } from "src/components/account/account-profile";
import { AccountProfileDetails } from "src/components/account/account-profile-details";
import { useRouter } from "next/router";

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
};

const Account = () => {
  const router = useRouter();
  useEffect(() => {
    router.reload(window.location.pathname);
  }, []);

  return (
    <>
      <Head>
        <title>Account | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
          maxWidth="lg"
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography variant="h4">Account</Typography>
          </Container>
          <Grid
            container
            spacing={3}
            sx={{
              marginTop: "25px",
            }}
          >
            {/* <Grid item lg={4} md={6} xs={12}>
            <AccountProfile />
          </Grid> */}
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <SettingsPassword />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <AccountUpdates />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Account;
