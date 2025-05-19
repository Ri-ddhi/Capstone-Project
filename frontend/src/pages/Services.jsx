import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const Services = () => {
  return (
    <Box sx={{ padding: "50px 20px", backgroundColor: "#f4f4f4" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#5D3FD3", textAlign: "center" }}
      >
        Our Services
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 3 }}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#5D3FD3" }}
            >
              🔍 AI-Based Expense Categorization
            </Typography>
            <CardContent>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Leverage AI to automatically categorize your expenses, making
                tracking effortless.
              </Typography>
            </CardContent>
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
            <CardContent>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Get real-time visual analytics of your spending patterns with
                interactive charts and graphs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#5D3FD3" }}
            >
              🔒 Secure & Private Data Handling
            </Typography>
            <CardContent>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Your privacy is important to us. All your data is encrypted and
                handled with the utmost security.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#5D3FD3" }}
            >
              💡 Personalized Spending Insights
            </Typography>
            <CardContent>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Receive customized insights and suggestions to improve your
                spending habits.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#5D3FD3" }}
            >
              📈 Expense Forecasting
            </Typography>
            <CardContent>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Use our predictive tools to forecast your future expenses based
                on historical data.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#5D3FD3" }}
            >
              🔄 Automatic Bill Uploading
            </Typography>
            <CardContent>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Upload your bills easily and let the system extract relevant
                data using OCR technology.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
