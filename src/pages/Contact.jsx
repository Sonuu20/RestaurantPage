import { Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
    <Box sx={{
      my: 10, 
      mx: 5,
      "& h3": {
        fontWeight: 'bold',
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }}>
      <Typography variant='h3' sx={{
        ' @media (max-width: 600px)': {
          fontSize: '40px'
      }
      }}>
        Contact Us
      </Typography>
      <p className=' m-2 md:m-10'>Savor the essence of India at Gupta Restaurant. From flavorful curries to aromatic biryanis, indulge in a culinary journey since 2007. Contact us for reservations, takeout, or catering. Your palate awaits a symphony of authentic tastes!</p>
      <Box sx={{ maxWidth: 500, margin: 'auto',  }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
      </Box>
    </Box>
    </>
  )
}

export default Contact