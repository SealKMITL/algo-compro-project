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

const blackOrangeTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff8c00', // Orange for primary buttons
    },
    background: {
      default: "#000000", // Black background
      paper: "#1e1e1e",   // Darker grey for register box
    },
    text: {
      primary: "#ffffff",  
      secondary: "#ff8c00", // Orange text for emphasis
    },
  },
};

export default function RegisterPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false);

  // Handle closing snackbar
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  // Handle form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      if (registerPassword !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const response = await fetch("/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed");
      }

      const data = await response.json();
      setSnackbarMessage("Registration successful!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      window.location.href = "/login"; 

    } catch (error) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);

      setRegisterEmail("");
      setRegisterPassword("");
      setConfirmPassword("");
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
          backgroundColor: "#000000", // Black background
          margin: 0,
          padding: 0,
          flexDirection: "column", // Ensure everything is stacked vertically
        }}
      >
        {/* Title in the middle */}
        <Typography 
          variant="h3" 
          sx={{ 
            color: '#ff8c00', 
            textAlign: 'center', 
            marginBottom: 2 
          }}
        >
          MusicHUB
        </Typography>

        {/* Register Box */}
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={4}
            style={{
              padding: "20px",
              backgroundColor: "#1e1e1e", // Dark grey register box
              borderRadius: "8px",
              marginBottom: "20px", // Add space between register box and Back button
            }}
          >
            <Typography variant="h5" gutterBottom style={{ color: "#ff8c00" }}>
              Register
            </Typography>
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                InputLabelProps={{ style: { color: '#ff8c00' } }} // Orange label
                InputProps={{ style: { color: '#ffffff', backgroundColor: '#555' } }} // Dark grey input field
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                InputLabelProps={{ style: { color: '#ff8c00' } }} // Orange label
                InputProps={{ style: { color: '#ffffff', backgroundColor: '#555' } }} // Dark grey input field
              />
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                InputLabelProps={{ style: { color: '#ff8c00' } }} // Orange label
                InputProps={{ style: { color: '#ffffff', backgroundColor: '#555' } }} // Dark grey input field
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ 
                  marginTop: "16px", 
                  backgroundColor: '#ff8c00', 
                  color: '#ffffff' 
                }}
                type="submit"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </Button>
            </form>
          </Paper>

          {/* Already a member link */}
          <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '16px' }}>
            <Typography variant="body2" style={{ color: '#ffffff', marginRight: '8px' }}>
              Already have an account?
            </Typography>
            <Button
              variant="contained"
              href="/login"
              sx={{ backgroundColor: '#ff8c00', color: '#ffffff' }}
            >
              Login
            </Button>
          </Grid>
        </Grid>

        {/* Back to Main Page Button */}
        <Button
          variant="contained"
          href="/mainpage"
          sx={{ 
            backgroundColor: '#ff8c00', 
            color: '#ffffff', 
            marginTop: 4 // Adds space at the bottom
          }}
        >
          Back to Main Page
        </Button>

        {/* Snackbar for feedback messages */}
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
