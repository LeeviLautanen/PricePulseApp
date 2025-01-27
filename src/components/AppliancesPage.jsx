import { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import axios from 'axios';
import AddAppliance from "./AddAppliance";

const AppliancesPage = () => {
  const [appliances, setAppliances] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(0.0);

  const fetchCurrentPrice = async () => {
    const start = new Date();

    try {
      const response = await fetch(
        `https://sahkotin.fi/prices?fix&vat&start=${start.toISOString()}`
      );
      const data = await response.json();

      const price = (data.prices[0].value / 10).toFixed(2);
      setCurrentPrice(price);
    } catch (error) {
      console.error("Error fetching price data:", error);
    }
  };

  const fetchAppliances = async () => {
    try {
      const response = await axios.get('http://localhost:5000/appliances');
      setAppliances(response.data);
    } catch (error) {
      console.error('Error fetching appliances:', error);
    }
  };

  const handleAddAppliance = (applianceData) => {
    setAppliances((prevAppliances) => [...prevAppliances, applianceData]);
  };

  useEffect(() => {
    fetchCurrentPrice();
    fetchAppliances();
  }, []);

  return (
    <Routes>
      <Route
        path="/add-appliance"
        element={<AddAppliance onAddAppliance={handleAddAppliance} />}
      />
      <Route
        path="/appliances"
        element={
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
              {appliances.map((appliance, index) => {
                const rate = (appliance.electricity * currentPrice).toFixed(2);
                return (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "1rem",
                      marginBottom: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                      height: "5rem",
                      
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 30,
                        fontWeight: 500,
                        color: "black",
                      }}
                    >
                      {appliance.applianceName}
                    </Typography>
                    <Typography
                    sx={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: "black",
                    }}>Current price: {rate} c/h</Typography>
                  </Box>
                );
              })}
              <Link to="/add-appliance" style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    backgroundColor: "#21BF73",
                    color: "white",
                    fontSize: 18,
                    "&:hover": { backgroundColor: "#12663E" },
                    textTransform: "none",
                  }}
                >
                  Add New Appliance
                </Button>
              </Link>
            </Container>
          </Box>
        }
      />
    </Routes>
  );
};

export default AppliancesPage;
