import React from 'react'
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <>
    <Box sx={{
      my: 10,
      mx: 1,
      textAlign: 'center',
      p: 2,
      "& h3": {
        fontWeight: 'bold',
      },
      "& p": {
        textAlign: 'justify'
      },
      ' @media (max-width: 600px)': {
        p: 1,
        mt: 0
      }
    }}>
     <div className='flex justify-center items-center mb-5' >
     <img src="https://media.istockphoto.com/id/1451893106/photo/culinary-students-in-a-commercial-kitchen.jpg?s=612x612&w=0&k=20&c=9BpFtn_KGL2EQSoyMWrah8RK8QAC9Oyet6eTV64MHcc=" alt="teamimage" />
     </div>
      <Typography variant='h4' marginBottom={'20px'} >
        Welcome to Gupta's Resturant – A Culinary Oasis Since 2007!
      </Typography>
      <p><b>🌟 About Us:</b></p>
      <p>
      Established in 2007, Gupta Restaurant is the brainchild of Mr. Sonu Gupta, a culinary enthusiast with a deep passion for bringing the diverse flavors of India to your plate. Our restaurant is more than just a dining destination; it's a celebration of authenticity, tradition, and a rich tapestry of Indian culinary artistry.
      </p>
      <br />
      <p><b>🍽️ Our Menu:</b></p>
      <p>
      Embark on a gastronomic journey with our extensive menu that showcases the best of Indian cuisine. From North to South, we bring you a delectable array of dishes, each crafted with care and precision using traditional recipes and premium ingredients. Indulge in the flavors of India with our tantalizing curries, aromatic biryanis, and an array of vegetarian and non-vegetarian delights.
      </p>
      <p><b>🏠 Ambiance:</b></p>
      <p>
      Step into Gupta Restaurant and experience a blend of tradition and modernity. Our inviting ambiance, adorned with subtle Indian decor, sets the stage for a memorable dining experience. Whether it's a family celebration, a romantic dinner, or a casual gathering with friends, our restaurant provides the perfect backdrop for every occasion.
      </p>
      <p><b>📱 Online Ordering:</b></p>
      <p>
      Can't make it to the restaurant? No worries! Enjoy the flavors of Gupta Restaurant from the comfort of your home. Our easy-to-use online ordering platform ensures that you can savor your favorite dishes with just a few clicks. Whether it's a cozy night in or a virtual celebration, let Gupta Restaurant be a part of your culinary experiences.
      </p>
      <p><b>📅 Events and Specials:</b></p>
      <p>
      Stay tuned for our special events and promotions! From festive celebrations to exclusive menu additions, Gupta Restaurant always has something exciting in store for our valued patrons. Join our newsletter to stay updated on the latest happenings.
      </p><br />
      <p>
      Join us at Gupta Restaurant, where every meal is a celebration of India's culinary heritage. Come for the food, stay for the experience!
      </p>
    </Box>
    </>
  )
}

export default About