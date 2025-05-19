import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/004/730/388/non_2x/check-mark-on-a-check-box-on-a-paper-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            padding: 3,
            borderRadius: 3,
            maxWidth: "500px",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ color: "#5D3FD3", fontWeight: "bold", fontSize: "1rem" }}
            >
              Track Your Expenses Smartly
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgb(80, 44, 42)", marginTop: 1 }}
            >
              Manage your finances efficiently with AI-powered tracking system.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Why Choose Our System Section */}
      <Box sx={{ textAlign: "center", padding: "50px 20px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#5D3FD3" }}>
          Why Choose Our System?
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ marginTop: 3 }}
        >
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#5D3FD3" }}
              >
                🔍 AI-Based Tracking
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Automatically categorize expenses using AI.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#5D3FD3" }}
              >
                📊 Real-Time Analytics
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Visualize spending with interactive charts.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#5D3FD3" }}
              >
                🔒 Secure & Private
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Your data is encrypted and protected.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
