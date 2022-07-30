import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Selector as SelectorIcon } from "../icons/selector";
import { User as UserIcon } from "../icons/user";
import Money from "@mui/icons-material/Money";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import { Logout } from "@mui/icons-material";
import { supabase } from "src/api/Supabase";
import Tier from "../pages/tier_selection";
import axios from "src/api/axios";

const items = [
  {
    href: "/dashboard",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  // {
  //   href: "/profile",
  //   icon: <Profile fontSize="small" />,
  //   title: "Profile",
  // },
  {
    href: "/account",
    icon: <UserIcon fontSize="small" />,
    title: "Account",
  },
  {
    href: "/customers",
    icon: <Money fontSize="small" />,
    title: "Bills",
  },
  {
    href: "/settings",
    icon: <CogIcon fontSize="small" />,
    title: "Settings",
  },
  // {
  //   href: "/new_register",
  //   icon: <Logout fontSize="small" />,
  //   title: "Log Out",
  // },
  // {
  //   href: "/products",
  //   icon: <ShoppingBagIcon fontSize="small" />,
  //   title: "Products",
  // },

  // {
  //   href: "/login",
  //   icon: <LockIcon fontSize="small" />,
  //   title: "Login",
  // },
  // {
  //   href: "/register",
  //   icon: <UserAddIcon fontSize="small" />,
  //   title: "Register",
  // },
  // {
  //   href: "/404",
  //   icon: <XCircleIcon fontSize="small" />,
  //   title: "Error",
  // },
];

const user = supabase.auth.user();

export const DashboardSidebar = (props) => {
  const { open, onClose, openPopup, setOpenPopup } = props;
  const [openTier, setTireOpen] = useState(false);
  const [position, setPosition] = useState("");
  const [person, setPerson] = useState("");
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      // console.log("yes its working");
      router.push("/new_login");
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  useEffect(async function () {
    await axios(`/user_data_output?user_id=${user?.id}`)
      .then((res) => {
        console.log(res.data[0]);
        setPosition(res.data[0].tier);
        setPerson(res.data[0].first_name + " " + res.data[0].last_name);
      })
      .catch((err) => console.log(err));
  }, []);

  const setTier = () => {
    setTireOpen(true);
  };

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          bgcolor: "#070713",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/dashboard" passHref>
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(173, 216, 230, 0.1)",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  {person}
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Your tier : {position}
                </Typography>
              </div>
              {/* adding api for selecting tier. */}
              <SelectorIcon
                sx={{
                  color: "neutral.500",
                  width: 14,
                  height: 14,
                  cursor: "pointer",
                }}
                onClick={setTier}
              />
            </Box>
          </Box>
        </div>
        <Tier openTier={openTier} setTireOpen={setTireOpen} />
        <Divider
          sx={{
            borderColor: "#ffffff29",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 0.1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#ffffff29" }} />
        <Button
          variant="text"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "10px",
            width: "85%",
            marginTop: "10px",
            marginLeft: "20px",
            color: "#ffffff95",
            ":hover": { bgcolor: "#ffffff20" },
          }}
          role={"link"}
          onClick={signOut}
        >
          <Logout fontSize="small" />
          Log Out
        </Button>
        {/* <Divider sx={{ borderColor: "#ffffff29" }} /> */}
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
