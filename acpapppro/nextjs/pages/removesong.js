import { Box, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, createTheme, ThemeProvider, CssBaseline, FormControl } from "@mui/material";
import React, { useState } from "react";

// Import the logo
const Musiclogo = "https://qwestore.com/png_images_min/10/Download-Free-Graphic-Resources-for-bMusic-5482.png";

// Dark theme like DarkModePage
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

export default function RemoveSongPage() {
  const [songNameToRemove, setSongNameToRemove] = useState("");
  const [songList, setSongList] = useState([
    { songName: "Song 1", songType: "Pop", language: "English" },
    { songName: "Song 2", songType: "R&B", language: "Mandarin Chinese" },
  ]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRemoveSong = () => {
    if (!songNameToRemove) {
      setErrorMessage("Please enter a song name to remove.");
      return;
    }

    const filteredSongs = songList.filter((song) => song.songName !== songNameToRemove);
    setSongList(filteredSongs);
    setSongNameToRemove("");
    setErrorMessage("");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: "background.default",
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative', // Set relative position for parent
        }}
      >
        {/* Remove Song Input Form and Title in the same box */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            backgroundColor: "background.paper",
            padding: 4,
            borderRadius: 2,
            width: '100%',
            maxWidth: '600px',
          }}
        >
          {/* Title */}
          <Typography variant="h5" gutterBottom style={{ color: "#fff" }}>
            Remove Song
          </Typography>

          {errorMessage && (
            <Box sx={{ color: "red", marginBottom: 2 }}>
              {errorMessage}
            </Box>
          )}

          {/* Input for Song Name to Remove */}
          <FormControl fullWidth>
            <TextField
              label="Song Name"
              variant="outlined"
              value={songNameToRemove}
              onChange={(e) => setSongNameToRemove(e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }} // Matches input background color from login
            />
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={handleRemoveSong}
            fullWidth
            sx={{ backgroundColor: '#555', color: '#fff', '&:hover': { backgroundColor: '#777' } }}
          >
            Remove Song
          </Button>
        </Box>

        {/* Song List Table */}
        <TableContainer component={Paper} sx={{ marginTop: 4, backgroundColor: "background.paper", width: '100%', maxWidth: '900px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>Song Name</TableCell>
                <TableCell sx={{ color: '#fff' }}>Song Type (Genre)</TableCell>
                <TableCell sx={{ color: '#fff' }}>Language</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {songList.map((song, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: '#fff' }}>{song.songName}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{song.songType}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{song.language}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Logo at the bottom right */}
        <img
          src={Musiclogo}
          alt="Musiclogo"
          style={{
            position: "absolute",
            bottom: "30px", // Distance from the bottom
            right: "30px", // Distance from the right
            width: "150px", // Adjust the size as needed
            zIndex: 1, // Ensure it is above other content
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
