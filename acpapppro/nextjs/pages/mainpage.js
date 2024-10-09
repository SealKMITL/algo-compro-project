import { Box, Button, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";

// Import logos (replace with actual logo URL or import)
const Musiclogo = "https://qwestore.com/png_images_min/10/Download-Free-Graphic-Resources-for-bMusic-5482.png";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#bbbbbb", // Light grey background like in the login page
      paper: "#3f3f3f",   // Dark grey box color like in the login page
    },
    text: {
      primary: "#ffffff",  
    },
  },
});

export default function MainPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Adds global dark mode styles */}

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
          zIndex: 1, // Ensure it is above the button box
        }}
      />

      <Box
        sx={{
          height: '100vh', 
          width: '100vw', 
          backgroundColor: "background.default", 
          padding: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',  // Aligns buttons horizontally
            gap: 4,  // Space between buttons
            backgroundColor: 'background.paper', // Dark grey box
            padding: '20px',
            borderRadius: 2,
          }}
        >
          <Button 
            variant="contained" 
            href="/addsong" // Redirects to the Add Song page
            sx={{ 
              padding: 2, 
              width: 250, 
              fontSize: 18, 
              backgroundColor: '#555555', // Same as input box background
              color: '#ffffff', // White text
              '&:hover': {
                backgroundColor: '#777', // Slightly lighter grey on hover
              },
            }} // Makes button bigger
          >
            Add Song
          </Button>

          <Button 
            variant="contained" 
            href="/removesong" // Redirects to the Remove Song page
            sx={{ 
              padding: 2, 
              width: 250, 
              fontSize: 18, 
              backgroundColor: '#555555', // Same as input box background
              color: '#ffffff', // White text
              '&:hover': {
                backgroundColor: '#777', // Slightly lighter grey on hover
              },
            }} // Makes button bigger
          >
            Remove Song
          </Button>

          <Button 
            variant="contained" 
            href="/findsong" // Redirects to the Find Song page
            sx={{ 
              padding: 2, 
              width: 250, 
              fontSize: 18, 
              backgroundColor: '#555555', // Same as input box background
              color: '#ffffff', // White text
              '&:hover': {
                backgroundColor: '#777', // Slightly lighter grey on hover
              },
            }} // Makes button bigger
          >
            Find Song
          </Button>
        </Box>
      </Box>

      {/* Logo at the bottom right */}
      <img
        src={Musiclogo}
        alt="Musiclogo"
        style={{
          position: "absolute",
          bottom: "50px",
          right: "50px", // Adjusted to bottom right
          width: "150px", // Adjust the size as needed
          zIndex: 1, // Ensure it is above the background
        }}
      />
    </ThemeProvider>
  );
}
