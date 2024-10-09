import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Snackbar,
  Alert,
  CssBaseline,
} from "@mui/material";

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password_hash: loginPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed");
      }

      const data = await response.json();
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      window.location.href = "/Mainpage"; // Navigate to main page after successful login

    } catch (error) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      setLoginEmail(""); // Clear inputs
      setLoginPassword("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <Grid
        container
        spacing={2}
        style={{
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#121212", // Black background
          position: "relative",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Title at the top, lowered and centered */}
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            color: '#ff8c00',  // Orange title
            position: 'absolute', 
            top: '120px',  // Lowered to give space
            width: '100%' 
          }}
        >
          MUSICHUB
        </Typography>

        <Grid item xs={12} sm={4}>
          <Paper
            elevation={6}
            style={{
              padding: "30px",
              backgroundColor: "#1e1e1e", // Darker black for the login box
              borderRadius: "8px",
            }}
          >
            <Typography variant="h5" gutterBottom style={{ color: "#ff8c00" }}>
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                InputLabelProps={{ style: { color: '#ff8c00' } }} // Orange label
                InputProps={{ style: { color: '#ffffff', backgroundColor: '#333' } }} // Dark input field
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                InputLabelProps={{ style: { color: '#ff8c00' } }} // Orange label
                InputProps={{ style: { color: '#ffffff', backgroundColor: '#333' } }} // Dark input field
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "16px", backgroundColor: '#ff8c00', color: '#ffffff' }}
                type="submit"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Paper>

          {/* Register link below login */}
          <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '16px', color: '#ffffff' }}>
            <Typography variant="body2" style={{ marginRight: '8px' }}>
              Not a member?
            </Typography>
            <Button
              variant="contained"
              href="/register"
              style={{ backgroundColor: '#ff8c00', color: '#ffffff' }}
            >
              Register
            </Button>
          </Grid>

          {/* Main Page button below the form */}
          <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '16px', color: '#ffffff' }}>
            <Button
              variant="contained"
              href="/mainpage"
              style={{ backgroundColor: '#ff8c00', color: '#ffffff', marginTop: '16px' }}
            >
              Go to Main Page
            </Button>
          </Grid>
        </Grid>

        {/* Snackbar for notifications */}
        <Snackbar 
          open={openSnackbar} 
          autoHideDuration={6000} 
          onClose={handleSnackbarClose} 
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
        >
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Grid>
    </>
  );
}
