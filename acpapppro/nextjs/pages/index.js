import { Box, Button, createTheme, ThemeProvider, CssBaseline, Typography } from "@mui/material";
import React from "react";

const blackOrangeTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff8c00', // Orange for primary buttons
    },
    background: {
      default: "#121212", // Black background
      paper: "#1e1e1e",   // Darker grey for boxes
    },
    text: {
      primary: "#ffffff",  
      secondary: "#ff8c00", // Orange text for emphasis
    },
  },
});

export default function IndexPage() {
  return (
    <ThemeProvider theme={blackOrangeTheme}>
      <CssBaseline /> {/* Global dark theme styles */}

      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: "background.default", // Black background
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Title */}
        <Typography variant="h2" sx={{ color: 'primary.main', marginBottom: 2 }}>
          MusicHUB
        </Typography>

        {/* Subtitle */}
        <Typography variant="h5" sx={{ color: 'text.primary', marginBottom: 4 }}>
          Website for Melophile!
        </Typography>

        {/* Continue Button */}
        <Button
          variant="contained"
          href="/mainpage"
          sx={{
            padding: '10px 40px',
            fontSize: 18,
            backgroundColor: 'primary.main',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#ff9c33',
            },
          }}
        >
          Continue
        </Button>
      </Box>
    </ThemeProvider>
  );
}
