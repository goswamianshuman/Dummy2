import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import DayIcon from "@mui/icons-material/ConfirmationNumber";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { supabase } from "src/api/Supabase";

const user = supabase.auth.user();
export const Quota = ({ quota, search_count }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              QUOTA
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {quota} / {search_count}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "green",
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
