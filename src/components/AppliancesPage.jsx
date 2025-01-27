import { Box, Container, Button, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const AppliancesPage = () => {
  
  const [applianceName, setApplianceName] = useState("");
  const [electricity, setElectricity] = useState(0);
  const [idealPrice, setIdealPrice] = useState(0);


  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundImage: "linear-gradient(to bottom, #21BF73, #12663E)",
      }}
    >
      <Box
        sx={{
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: 32,
            fontWeight: 400,
          }}
        >
          Appliances
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "1rem",
            height: "4rem",
            display: "flex", 
            justifyContent: "space-between", 
          }}
        >
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 500,
              color: "black",
              textAlign: "left",
            }}
          >
            {applianceName} Sauna 
          </Typography>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 500,
              color: "black",
              textAlign: "left",
            }}
          >
            ({idealPrice}) c/h
          </Typography>
        </Box>
        <Divider sx={{ margin: "1rem 0" }} />
        <Link to="/AddAppliance">
            <Button
              sx={{
                backgroundColor: "#21BF73",
                color: "white",
                fontSize: '1.25rem',
                "&:hover": { backgroundColor: "#12663E" },
              borderRadius: "20px",
              border: "2px solid rgb(219, 219, 219)",              
              textAlign: "center",
              width: "60%",
              textTransform: "none" 
            }}
            >
              Add Appliance
            </Button>
          </Link>
      </Container>
    </Box>
  );
};

export default AppliancesPage;
