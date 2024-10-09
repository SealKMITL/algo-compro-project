import { Box, Button, TextField, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, createTheme, ThemeProvider, CssBaseline, Select, InputLabel, FormControl } from "@mui/material";
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

// List of allowed languages
const allowedLanguages = [
  "Mandarin Chinese",
  "English",
  "Spanish",
  "Portuguese",
  "Russian",
  "Hindi",
  "Japanese",
  "Arabic",
  "French",
  "Thai",
];

// List of allowed genres
const allowedGenres = [
  "Pop",
  "Hip Hop",
  "R&B",
  "Dance",
  "Classic Rock",
];

// List of allowed keywords
const allowedKeywords = [
  "Joy",
  "Beauty",
  "Relaxation",
  "Sadness",
  "Dreaminess",
  "Scariness",
  "Feeling Pumped Up"
];

export default function FindSongPage() {
  // State for song inputs
  const [songName, setSongName] = useState("");
  const [songType, setSongType] = useState("");
  const [language, setLanguage] = useState("");
  const [songList, setSongList] = useState([
    { songName: "Song 1", songType: "Pop", language: "English" },
    { songName: "Song 2", songType: "R&B", language: "Mandarin Chinese" },
    { songName: "Song 3", songType: "Dance", language: "Spanish" },
  ]);
  const [topSongs, setTopSongs] = useState([]);

  const handleFindSong = () => {
    // Filtering logic (currently random selection for top 3)
    const filteredSongs = songList.filter((song) =>
      (!songName || song.songName.toLowerCase().includes(songName.toLowerCase())) &&
      (!songType || song.songType === songType) &&
      (!language || song.language === language)
    );
    // Randomly select top 3 matching songs
    const randomTopSongs = filteredSongs
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setTopSongs(randomTopSongs);
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
        {/* Find Song Input Form and Title in the same box */}
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
            Find Song
          </Typography>

          {/* Song Name Input */}
          <FormControl variant="outlined" fullWidth>
            <InputLabel sx={{ color: '#fff' }} shrink>Song Name</InputLabel>
            <TextField
              label="Song Name"
              variant="outlined"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }} // Matches input background color from login
            />
          </FormControl>

          {/* Dropdown for Genre (Song Type) Selection */}
          <FormControl variant="outlined" fullWidth>
            <InputLabel sx={{ color: '#fff' }} shrink>Song Type (Genre)</InputLabel>
            <Select
              value={songType}
              onChange={(e) => setSongType(e.target.value)}
              sx={{ backgroundColor: '#555', color: '#fff' }}
              label="Song Type (Genre)" // Link label to select
            >
              {allowedGenres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Dropdown for Language Selection */}
          <FormControl variant="outlined" fullWidth>
            <InputLabel sx={{ color: '#fff' }} shrink>Language</InputLabel>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              sx={{ backgroundColor: '#555', color: '#fff' }}
              label="Language" // Link label to select
            >
              {allowedLanguages.map((lang) => (
                <MenuItem key={lang} value={lang}>
                  {lang}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <Button
            variant="contained"
            color="primary"
            onClick={handleFindSong}
            fullWidth
            sx={{ backgroundColor: '#555', color: '#fff', '&:hover': { backgroundColor: '#777' } }}
          >
            Find Song
          </Button>
        </Box>

        {/* Top 3 Songs Table */}
        {topSongs.length > 0 && (
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
                {topSongs.map((song, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: '#fff' }}>{song.songName}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{song.songType}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{song.language}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

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
