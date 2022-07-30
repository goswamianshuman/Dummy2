import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import axios from "../../api/axios";
import { states } from "src/__mocks__/countries";
import { supabase } from "src/api/Supabase";
import styles from "./css/account.module.css";

export function AccountProfileDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Country, setCountry] = useState("");
  const user = supabase.auth.user();

  useEffect(async () => {
    await axios
      .get(`/user_data_output?user_id=${user?.id}`)
      .then((res) => {
        console.log(res.data[0]);
        setFirstName(res.data[0].first_name);
        setLastName(res.data[0].last_name);
        setEmail(res.data[0].email_id);
        setPhone(res.data[0].contact_number);
        setCountry(res.data[0].country);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //here we will set new data.

  function setNewData() {
    axios
      .post(
        `/update_user_details?user_id=${user.id}&first_name=${firstName}&last_name=${lastName}&email=${Email}&contact_number=${phone}&country=${Country}`
      )
      .then((res) => {
        alert(res.data.Message);
        if (res) console.log(true);
      });
  }

  return (
    <Card>
      <CardHeader subheader="The information can be edited" title="Profile" />
      <Divider />
      <form autoComplete="off">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  label="First name"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder=" "
                  required
                  Value={firstName}
                />
                <label className={styles.labels}>First Name</label>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  label="Last name"
                  name="LastName"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder=" "
                  required
                  Value={lastName}
                />
                <label className={styles.labels}>Last Name</label>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  className={styles.input}
                  label="Email Address"
                  name="email"
                  readOnly
                  placeholder=" "
                  required
                  Value={Email}
                />
                <label className={styles.labels}>Email</label>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  label="Contact number"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder=" "
                  required
                  Value={phone}
                />
                <label className={styles.labels}>Contact number *</label>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={styles.inputContainer}>
                <select
                  style={{ height: "60px" }}
                  className={styles.input}
                  name="state"
                  placeholder=" "
                  value={Country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {states.map((option) => (
                    <option key={option.value}>{option.label}</option>
                  ))}
                </select>
                <label className={styles.labels}>Select Country *</label>
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button role="link" onClick={setNewData} color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </form>
    </Card>
  );
}
