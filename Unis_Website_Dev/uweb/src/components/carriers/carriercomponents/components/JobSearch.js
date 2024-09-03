import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 
// Define your theme
const theme = createTheme({
  palette: {
    background: {
      default: '#e3f2fd', // Light blue background for the main area
      paper: '#bbdefb', // Lighter blue for sections like search and filters
    },
    primary: {
      main: '#0288d1', // Custom blue color for buttons
      contrastText: '#fff', // White text for buttons
    },
    secondary: {
      main: '#01579b', // Darker blue for text
    },
    text: {
      primary: '#0d47a1', // Main text color
      secondary: '#01579b', // Subtitle text color
    },
  },
});
 
const JobSearch = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [open, setOpen] = useState(false);
 
  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };
 
  const handleSearch = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 4,
          paddingTop: 0,
          backgroundColor: theme.palette.background.default, // Using theme color
        }}
      >
           <h1 className="heading-c">Be Part of Our Team </h1>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            marginBottom: 2,
            color: theme.palette.text.primary,
            fontWeight: 'bold',
            textAlign: 'center', // Center the text for better mobile view
            fontSize: { xs: '2rem', sm: '3rem' }, // Responsive font size
          }}
        >
          Careers at Unis Technosoft Pvt Ltd
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            marginBottom: 4,
            color: theme.palette.text.secondary,
            textAlign: 'center', // Center the text for better mobile view
            fontSize: { xs: '1.2rem', sm: '1.5rem' }, // Responsive font size
          }}
        >
          Explore Our Latest Opportunities
        </Typography>
 
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column for mobile, row for desktop
            gap: { xs: 2, md: 8 }, // Adjust the gap for mobile and desktop
            alignItems: 'center',
            marginBottom: 4,
            backgroundColor: theme.palette.background.paper, // Using theme color
            padding: 3,
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            width: { xs: '100%', md: 'auto' }, // Full width for mobile
          }}
        >
          {/* Filters Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #90caf9', // Slightly darker blue border for filter box
              borderRadius: 2,
              padding: 2,
              backgroundColor: '#e3f2fd', // Background color for filter box
              width: { xs: '100%', md: 'auto' }, // Full width for mobile
              marginBottom: { xs: 2, md: 0 }, // Add margin for mobile
            }}
          >
            <Typography variant="h5" sx={{ marginRight: 3, fontWeight: 'bold' }}>
              Job Type:
            </Typography>
            <FormControlLabel control={<Checkbox />} label="Full Time" />
            <FormControlLabel control={<Checkbox />} label="Internship" />
          </Box>
 
          {/* Search Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Column for small screens, row for larger screens
              gap: { xs: 2, sm: 8 }, // Adjust the gap for mobile and desktop
              width: { xs: '100%', md: 'auto' }, // Full width for mobile
            }}
          >
            {/* Text Input for Job Title */}
            <TextField
              label="Job title or skill"
              variant="outlined"
              value={jobTitle}
              onChange={handleJobTitleChange}
              sx={{
                minWidth: { xs: '100%', sm: 400 }, // Full width for small screens
              }}
            />
 
            <Button
              variant="contained"
              color="primary"
              sx={{
                height: '45px',
                ':hover': {
                  backgroundColor: '#03a9f4', // Lighter blue on hover
                },
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Box>
 
        {/* Dialog for "No jobs found" message */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>No Jobs Found</DialogTitle>
          <DialogContent>
            <DialogContentText>
              No jobs found in this category. Please try a different search.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};
 
export default JobSearch;