import React from 'react';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <>
      <Box sx={{textAlign: 'center', bgcolor: '#3D3B40',color: '#F8EDFF', p: 3}}>
        <Box sx={{my: 3,
           "& svg":{
            fontSize: '60px',
            cursor: 'pointer',
            mr: 2,
           },
           '& svg:hover': {
            color: 'goldenrod',
            transform: 'translateY(5px)',
            transition: 'all 400ms cubic-bezier(0.68, -0.55, 0.27, 1.55);'
           },
           ' @media (max-width: 600px)': {
            '& svg': {
              fontSize: '30px',
              mr: 1
            }
           }
            }}>
          <InstagramIcon  />
          <LinkedInIcon />
          <GitHubIcon />
          <FacebookIcon />
        </Box>
        <Typography variant='h5' sx={{
          '@media (max-width:600px)': {
            fontSize: '1rem'
          }
        }}>
          All Rights are Reserved by &copy; GuptaEservices  
        </Typography>
      </Box>
    </>
  )
}

export default Footer