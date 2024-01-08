import React, {useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
  //toolbar is used for sizing
  //Box is basically used as div in material ui 
  //edge is the prop which help us to specify that where the Drawer will open
  const [mobileOpen, setMobileOpen] = useState(false);
  //hadle menuClick
  const handleMenuClick = () => {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClick={handleMenuClick} sx={{textAlign: 'center'}}>
                <Typography 
          color={'goldenrod'} 
          variant='h6' 
          component={'div'} 
          sx={{flexGrow: 1}}
          >
           <DinnerDiningIcon />
            Gupta Restraunt
          </Typography>
          <Divider />
            <ul className=' list-none flex-col items-center justify-center  px-10'>
            <li  className='mt-4 mb-5'>
              <Link to={'/'}> Home </Link>
            </li>
            <li className=' mb-5'>
              <Link to={'/menu'} > Menu </Link>
            </li>
            <li className=' mb-5'>
              <Link to={'/about'} > About </Link>
            </li>
            <li>
              <Link to={'/contact'}> Contact </Link>
            </li>
            </ul>
    </Box>

  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor: '#332941'}}>
          <Toolbar>
          <Typography 
          color={'goldenrod'} 
          variant='h6' 
          component={'div'} 
          sx={{flexGrow: 1}}
          >
           <DinnerDiningIcon />
            Gupta Restraunt
          </Typography>
          <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr: 1, display:{sm: 'none'}}} onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          <Box sx={{display:{xs: 'none', sm: 'block'}}}>
            <ul className=' list-none flex items-center justify-center'>
            <li>
              <Link to={'/'} className=' pr-5'> Home </Link>
            </li>
            <li>
              <Link to={'/menu'} className=' pr-5'> Menu </Link>
            </li>
            <li>
              <Link to={'/about'} className=' pr-5'> About </Link>
            </li>
            <li>
              <Link to={'/contact'} className=' pr-5'> Contact </Link>
            </li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer variant='temporary' 
          open={mobileOpen} 
          onClose={handleMenuClick}
          anchor='right'
          sx={{display:{xs: 'block', sm:'none'},'& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '200px',
            height: '240px',
            borderRadius: ' 0 0 8px 8px'
          }}}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >
        <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default Header