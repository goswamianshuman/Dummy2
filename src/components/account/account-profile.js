import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Container,
} from "@mui/material";

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
  timezone: "GTM-7",
  age: "25",
  email: "demo@devias.io",
  phone: "+1-555-659-6626",
};

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          height: "55vh",
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64,
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.timezone}
        </Typography>
        <Container
          sx={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "50%",
            width: "90%", 
            marginTop:"20px",
          }}
        >
          <Typography variant="body2" sx={{ color: "black" }}>
            {" "}
            Age: {user.age}
          </Typography>
          <Typography sx={{ color: "black" }} variant="body2">
            {" "}
            phone: {user.phone}
          </Typography>
          <Typography sx={{ color: "black" }} variant="body2">
            {" "}
            Email: {user.email}
          </Typography>
          <Typography sx={{ color: "black" }} variant="body2">
            About: <br />
            <Typography color="textSecondary" variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus totamdolores
              dicta consequuntur expedita dolorum!
            </Typography>
          </Typography>
        </Container>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      ></Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button color="primary" fullWidth variant="text">
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
