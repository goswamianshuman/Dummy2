import {
  Card,
  Button,
  Container,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Logo } from "../components/logo";
import { supabase } from "../api/Supabase";
import axios from "../api/axios";
import { states } from "../__mocks__/countries";
import Slide from "@mui/material/Slide";
import Tier from "./tier_selection";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Pop_up(props) {
  const { openPopup, setOpenPopup } = props;
  const [openTier, setTireOpen] = useState(false);
  const router = useRouter();
  const [values, setValues] = useState({ state: "country" });
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    country: "",
  });
  const { first_name, last_name, email, contact_number, country } = post;
  const user = supabase.auth.user();

  function fetchPost() {
    let { data } = supabase
      .from("post_data")
      .select()
      .then((res) => {
        // setId(res.data[0].id);
        console.log(res.data);
      });
    setPosts(data);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  async function createPost() {
    let { data } = await supabase
      .from("post_data")
      .insert([{ first_name, last_name, email, contact_number, country }])
      .single();
    setPost({
      first_name: "",
      last_name: "",
      email: "",
      contact_number: "",
      country: "",
    });
    fetchPost();
    setTireOpen(true);
  }

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setPost({ ...post, country: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setOpenPopup(false);
    postRequest();
    console.log(user.id);
  }

  function postRequest() {
    axios
      .post(
        `/user_data_input?user_id=${user.id}&first_name=${post.first_name}&last_name=${post.last_name}&email=${post.email}&contact_number=${post.contact_number}&country=${post.country}`
      )
      .then((res) => {
        const user = res.data;
        console.log(user);
        alert(res.data.Message);
      })
      .catch((err) => alert(err));
  }

  return (
    <Dialog TransitionComponent={Transition} keepMounted open={openPopup}>
      {/* <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            width: "35%",
            height: "80%",
            bgcolor: "whitesmoke",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        > */}
      <DialogTitle>
        <Container
          sx={{
            flex: "0.3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Logo />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4">Enter your details</Typography>
            {/* typography showing user_id */}
          </Box>
        </Container>
      </DialogTitle>

      <DialogContent>
        <Container
          sx={{
            flex: "0.7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form
            style={{
              height: "90%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            onSubmit={handleSubmit}
          >
            <Container sx={{ display: "flex", gap: "30px" }}>
              <TextField
                label="First Name"
                margin="normal"
                name="firstName"
                variant="outlined"
                color="info"
                value={first_name}
                onChange={(e) => setPost({ ...post, first_name: e.target.value })}
              />
              <TextField
                label="Last Name"
                margin="normal"
                name="lastName"
                variant="outlined"
                color="info"
                value={last_name}
                onChange={(e) => setPost({ ...post, last_name: e.target.value })}
              />
            </Container>

            <Container maxWidth>
              <TextField
                label="Email"
                type="email"
                margin="normal"
                name="userEmail"
                variant="outlined"
                color="info"
                sx={{ width: "100%" }}
                value={email}
                onChange={(e) => setPost({ ...post, email: e.target.value })}
              />
            </Container>

            <Container maxWidth sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <TextField
                label="Phone Number"
                margin="normal"
                name="phoneNumber"
                variant="outlined"
                color="info"
                value={contact_number}
                onChange={(e) => setPost({ ...post, contact_number: e.target.value })}
              />
              <TextField
                label="Select Country"
                name="state"
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                margin="normal"
                variant="outlined"
                color="info"
                onChange={handleChange}
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Container>

            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "end",
                gap: "50px",
              }}
            >
              <Button
                onClick={() => router.push("/new_register")}
                sx={{ width: "40%" }}
                color="error"
                variant="text"
              >
                Cancle
              </Button>
              <Button
                type="submit"
                onClick={createPost}
                fullWidth
                color="success"
                variant="contained"
              >
                Save & Continue
              </Button>
            </Container>
          </form>
        </Container>
        <Tier openTier={openTier} setTireOpen={setTireOpen} />
      </DialogContent>
      {/* </Container>
      </div> */}
    </Dialog>
  );
}
