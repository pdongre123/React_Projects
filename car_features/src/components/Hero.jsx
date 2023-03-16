import React from "react";
import "./hero.css";
import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Navbar";
import CarImg from "../images/car-3.png";
import CustomButton from "./CustomButton";


const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#645243",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#FFE0CA", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1", color: "#645243" }}>
            <Title variant="h1">We Have Everything Your Car Needs</Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "15px",
                color: "#000000",
                fontWeight: "500",
                mt: 5,
                mb: 4,
              }}
            >
              Who wants to buy used, Certified and new cars, this is the best
              place for them There are many types of cars in our store, new,
              old, etc. Come to our store and find your dream car
            </Typography>

            <CustomButton
              backgroundColor="#645243"
              color="#fff"
              buttonText="Discover today"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              className="backImg"
              src={CarImg}
              alt="carImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
