import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/gymimg.jpg'


const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "73px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="25px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mt="20px"
      >
        Sweat, Smile <br /> and Repeat.
      </Typography>
      <Typography fontSize="22px" lineHeight="40px" mt="14px" mb="14px">
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="150px"
      >
        Exercise Now!
      </Typography>
      <img
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
        style={{
          marginTop: "-165px",
          marginRight: "-38px",
          height: "480px",
          width: "600px",
        }}
      />
    </Box>
  );
}

export default HeroBanner