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

// Import logo
const Musiclogo = "https://qwestore.com/png_images_min/10/Download-Free-Graphic-Resources-for-bMusic-5482.png"; // Replace with actual path

export default function RegisterPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false); // Loading state

  // Handle closing snackbar
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  // Handle form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    try {
      // Check if passwords match
      if (registerPassword !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      // Send request to backend API to register the user
      const response = await fetch("/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword, // Send password to the backend
        }),
      });

      // Handle response
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed");
      }

      const data = await response.json(); // Assuming the response contains success message or user details
      setSnackbarMessage(data.message || "Registration successful!"); // Make sure to access the right property, e.g., `message`
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      // Redirect to login page after successful registration
      window.location.href = "/login"; 

    } catch (error) {
      setSnackbarMessage(error.message); // Access `error.message` properly
      setSnackbarSeverity("error");
      setOpenSnackbar(true);

      // Clear the input fields if registration fails
      setRegisterEmail("");
      setRegisterPassword("");
      setConfirmPassword("");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <CssBaseline />
      <Grid
        container
        spacing={2}
        style={{
          height: "100vh",   // Ensures full viewport height
          width: "100vw",    // Ensures full viewport width
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#bbbbbb", // Background color
          position: "relative",
          overflow: "hidden", // Prevents content overflow
          margin: 0,         // Ensure no extra margin
          padding: 0,        // Ensure no extra padding
        }}
      >
        {/* Logo at the top center */}
        <img
          src={Musiclogo}
          alt="Musiclogo"
          style={{
            position: "absolute",
            top: "60px", // Adjusted to be lower
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px", // Adjust the size as needed
            zIndex: 1, // Ensure it is above the register box
          }}
        />

        <Grid item xs={12} sm={4}> {/* Reduced width from 6 to 4 */}
          <Paper
            elevation={4}
            style={{
              padding: "20px",
              backgroundColor: "#3f3f3f", // Black register box
              borderRadius: "8px",
              width: '100%', // Ensure full width of the grid item
              position: 'relative', // Positioned element for overlapping
              zIndex: 0, // Ensure it is below the logo
            }}
          >
            <Typography variant="h5" gutterBottom style={{ color: "#fff" }}>
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
                InputLabelProps={{ style: { color: '#fff' } }} // White label
                InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }} // Grey input field
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }} // White label
                InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }} // Grey input field
              />
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }} // White label
                InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }} // Grey input field
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "16px" }}
                type="submit"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Registering..." : "Register"}
              </Button>
            </form>
          </Paper>

          {/* Already a member text with button underneath */}
          <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '16px', color: '#000000' }}>
            <Typography variant="body2" style={{ marginRight: '8px' }}>
              Already have an account?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/login"
              style={{ backgroundColor: '#2196F3', padding: '6px 12px' }} // Adjusted padding for button
            >
              Login
            </Button>
          </Grid>
        </Grid>

        {/* Music logo at the bottom right */}
        <img
          src={Musiclogo}
          alt="Musiclogo"
          style={{
            position: "absolute",
            bottom: "50px",
            right: "50px", // Positioned to bottom right
            width: "150px", // Adjust the size as needed
            zIndex: 1, // Ensure it is above the background
          }}
        />

        {/* Snackbar for feedback messages */}
        <Snackbar 
          open={openSnackbar} 
          autoHideDuration={6000} 
          onClose={handleSnackbarClose} 
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Top center
        >
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Grid>
    </>
  );
}
