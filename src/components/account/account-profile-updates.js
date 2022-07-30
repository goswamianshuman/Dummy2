import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import EyeIcon from "@mui/icons-material/Visibility";
import EyeoffIcon from "@mui/icons-material/VisibilityOff";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { supabase } from "src/api/Supabase";

export const AccountUpdates = (props) => {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("");
  const user = supabase.auth.user();

  useEffect(() => {
    reload();
  });

  function reload() {
    axios
      .get(`/user_data_output?user_id=${user.id}`)
      .then((res) => {
        setKey(res.data[0].api_key);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function resetkey() {
    axios
      .post(`/reset_key?user_id=${user.id}`)
      .then((res) => {
        console.log(res.data);
        alert(res.data.Message);
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function deleteAcc() {
    console.log(user.email);
    await axios
      .post(`/delete?email=${user.email}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Card
      {...props}
      sx={{
        width: "105vh",
        height: "30vh",
      }}
    >
      <CardContent>
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <Typography sx={{ flex: "0.2", fontSize: "15px" }} fullWidth>
              YOUR API :{" "}
            </Typography>
            <Container
              sx={{
                flex: "0.8",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Container
                sx={{
                  bgcolor: "red",
                  width: "80%",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  border: "0.5px solid black",
                  background: "#d9dbda",
                }}
              >
                <Box sx={{ flex: "0.9", display: "flex", alignItems: "center" }}>
                  {show ? (
                    <Typography
                      sx={{ fontSize: "13px", fontStyle: "-moz-initial", fontWeight: "500" }}
                    >
                      {key}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{ fontSize: "13px", fontStyle: "-moz-initial", fontWeight: "500" }}
                    >
                      ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫
                    </Typography>
                  )}
                </Box>
                <Box
                  sx={{ flex: "0.1", display: "flex", alignItems: "center", cursor: "pointer" }}
                  onClick={() => setShow(!show)}
                >
                  {show ? <EyeIcon /> : <EyeoffIcon />}
                </Box>
              </Container>
            </Container>
          </Container>

          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "20px",
            }}
          >
            <Container
              sx={{
                flex: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  width: "80%",
                  "&:hover": {
                    color: "#070713",
                  },
                }}
                variant="text"
                onClick={resetkey}
              >
                Reset API
              </Button>
            </Container>

            <Container
              sx={{
                flex: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "red",
              }}
            >
              <Button
                sx={{
                  width: "65%",
                  "&:hover": {
                    color: "red",
                  },
                }}
                color="warning"
                variant="text"
                onClick={deleteAcc}
              >
                <Delete />
                Delete Account
              </Button>
            </Container>
          </Container>
        </Box>
      </CardContent>
    </Card>
  );
};
