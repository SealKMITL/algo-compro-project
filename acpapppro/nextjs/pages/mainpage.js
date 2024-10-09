import { Box, Button, createTheme, ThemeProvider, CssBaseline, Typography, AppBar, Toolbar } from "@mui/material";
import React from "react";

const blackOrangeTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff8c00', // Orange for primary buttons
    },
    background: {
      default: "#000000", // Black background to match the image
      paper: "#1e1e1e",   // Darker grey for boxes
    },
    text: {
      primary: "#ffffff",  
      secondary: "#ff8c00", // Orange text for emphasis
    },
  },
});

export default function MainPage() {
  return (
    <ThemeProvider theme={blackOrangeTheme}>
      <CssBaseline /> {/* Global dark mode styles */}

      {/* Taskbar */}
      <AppBar position="static" sx={{ backgroundColor: '#1e1e1e' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MusicHUB
          </Typography>
          <Button color="inherit" href="/mainpage">Main Page</Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/register">Register</Button>
          <Button color="inherit" href="/">Back</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: "background.default", // Black background
          padding: 2,
          display: 'flex',
          flexDirection: 'column', // Stack elements vertically
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Image above the center box */}
        <img
          src="https://w0.peakpx.com/wallpaper/430/851/HD-wallpaper-fire-music-note-in-black-background-fire.jpg"
          alt="Fire Music Note"
          style={{
            width: '100%',      // Make the image responsive
            maxWidth: '400px',   // Reduced size for better display
            marginBottom: '20px' // Adds space between image and the box below
          }}
        />

        {/* Center Box */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',  // Align buttons horizontally
            gap: 4,  // Space between buttons
            backgroundColor: 'background.paper', // Dark grey box
            padding: '20px',
            borderRadius: 2,
            boxShadow: 3, // Adds some shadow for a professional look
            justifyContent: 'center',
            width: '100%',
            maxWidth: '800px', // Make the box larger for horizontal layout
          }}
        >
          {/* Buttons */}
          <Button 
            variant="contained" 
            href="/addsong"
            sx={{ 
              padding: 2, 
              width: '100%', 
              fontSize: 18, 
              backgroundColor: 'primary.main', 
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#ff9c33',
              },
            }}
          >
            Add Song
          </Button>

          <Button 
            variant="contained" 
            href="/removesong"
            sx={{ 
              padding: 2, 
              width: '100%', 
              fontSize: 18, 
              backgroundColor: 'primary.main', 
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#ff9c33',
              },
            }}
          >
            Remove Song
          </Button>

          <Button 
            variant="contained" 
            href="/findsong"
            sx={{ 
              padding: 2, 
              width: '100%', 
              fontSize: 18, 
              backgroundColor: 'primary.main', 
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#ff9c33',
              },
            }}
          >
            Find Song
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
