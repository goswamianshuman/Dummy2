import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import DayIcon from "@mui/icons-material/Event";
import { useEffect, useState } from "react";
import axios from "src/api/axios";
import { supabase } from "src/api/Supabase";

export const Days_left = (props) => {
  const [daysLeft, setDaysleft] = useState();
  const user = supabase.auth.user();

  useEffect(() => {
    axios
      .get(`/user_data_output?user_id=${user?.id}`)
      .then((response) => {
        // console.log(response.data[0].start_date);
        // console.log(response.data[0].end_date);
        var currentDate = new Date();
        difference(currentDate, response.data[0].end_date);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  function difference(start_date, end_date) {
    var date1, date2;

    date1 = new Date(start_date);
    date2 = new Date(end_date);

    var time_difference = date2.getTime() - date1.getTime();

    var days_difference = Math.ceil(time_difference / (1000 * 3600 * 24));

    // console.log(days_difference);
    setDaysleft(days_difference);
  }

  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Days left
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {daysLeft}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "orangered",
                height: 56,
                width: 56,
              }}
            >
              <DayIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
