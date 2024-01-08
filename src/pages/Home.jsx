import React from 'react'
import { Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=' flex  flex-col justify-center item h-screen lg:bg-hero-section-desktop bg-cover bg-hero-section-mobile md:bg-hero-section-md sm:bg-cover text-[#F9F7C9] items-baseline'>
     <Box sx={{
      width: 'auto',
      marginLeft: '30px',
     }}>
      <Typography variant='h2' sx={{
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '70px',
        ' @media (max-width: 600px)': {
          fontSize: '50px',
        }
      }} className='typography'> Food Website</Typography>
      <Typography variant='p' sx={{
        marginTop: '15px',
        padding: '0',
        fontSize: '30px',
        fontWeight: 'lighter',
        ' @media (max-width: 600px)':{
          fontSize: '20px',
          fontWeight: 'medium',
        }
      }}>Best Food in India</Typography>
      <Link to='/menu'>
      <button className=' text-black mt-5 rounded-md bg-blue-600 px-2 py-1 mx-3 h-12 w-40 duration-300 ease-in hover:bg-blue-700'>ORDER NOW</button>
      </Link>
      
    </Box>
    </div>
  )
}

export default Home