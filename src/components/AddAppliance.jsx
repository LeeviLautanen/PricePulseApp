import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import axios from 'axios';

const AddAppliance = () => {
  const [applianceName, setApplianceName] = useState("");
  const [electricity, setElectricity] = useState(0);
  const [idealPrice, setIdealPrice] = useState(0);
  const navigate = useNavigate();

  const handleSave = async () => {
    const applianceData = {
      applianceName,
      electricity,
      idealPrice,
    };

    try {
      await axios.post('http://localhost:5000/save-appliance', applianceData);
      navigate('/appliances');
    } catch (error) {
      console.error('Error saving appliance data:', error);
    }
  };

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
          height: "8rem",
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
            fontSize: "2rem",
          }}
        >
          Add Appliance
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <input
            type="text"
            align="center"
            placeholder="Appliance Name"
            onChange={(e) => setApplianceName(e.target.value)}
            style={{
              height: '4rem',
              width: '100%',
              textAlign: 'center',
              fontSize: '1.5rem',
              backgroundColor: '#ffffff',
              color: 'black',
              border: '0.25px rgb(0, 0, 0) solid',
              borderRadius: '5px',
              marginBottom: '1rem',
            }}
          />
          <input
            type="text"
            align="center"
            placeholder="Consumption (kWh)"
            onChange={(e) => setElectricity(e.target.value)}
            style={{
              height: '4rem',
              width: '100%',
              textAlign: 'center',
              fontSize: '1.5rem',
              backgroundColor: '#ffffff',
              color: 'black',
              border: '0.25px rgb(0, 0, 0) solid',
              borderRadius: '5px',
              marginBottom: '1rem',
            }}
          />
          <input
            type="text"
            align="center"
            placeholder="Ideal price (c/kWh)"
            onChange={(e) => setIdealPrice(e.target.value)}
            style={{
              height: '4rem',
              width: '100%',
              textAlign: 'center',
              fontSize: '1.5rem',
              backgroundColor: '#ffffff',
              color: 'black',
              border: '0.25px rgb(0, 0, 0) solid',
              borderRadius: '5px',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: '1rem',
          }}
        >
        <Link to="/appliances" style={{ 
            width: '100%', 
            textDecoration: 'none' 
        }}>
          <Button
            onClick={handleSave}
            sx={{
                backgroundColor: "#21BF73",
                color: "white",
                fontSize: '1.5rem',
                "&:hover": { backgroundColor: "#12663E" },
              borderRadius: "20px",
              border: "2px solid rgb(219, 219, 219)",              
              textAlign: "center",
              width: "60%",
              textTransform: "none" 
            }}
          >
            Save ✓
          </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default AddAppliance;