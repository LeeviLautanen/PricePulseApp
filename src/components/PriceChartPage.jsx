import {
  Box,
  Container,
  Typography,
  ButtonGroup,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";
import Chart from "./Chart";

const PriceChartPage = () => {
  const [priceData, setPriceData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedButton, setSelectedButton] = React.useState(0);
  const [chartData, setChartData] = React.useState([]);
  const [chartLabels, setChartLabels] = React.useState([]);

  const buttonStyling = {
    backgroundColor: "#FFFFFF",
    color: "black",
    "&:hover": { backgroundColor: "#DEDEDE" },
    "&:focus": { outline: "none" },
  };

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    updateChartData(priceData);
  };

  const updateChartData = (data) => {
    let slicedData;
    switch (selectedButton) {
      case 0:
        slicedData = data.slice(-12);
        break;
      case 1:
        slicedData = data.slice(-24);
        break;
      case 2:
        slicedData = data.slice(-48);
        break;
      default:
        slicedData = data;
        break;
    }

    if (slicedData && slicedData.length > 0) {
      setChartData(slicedData.map((item) => item.price));
      setChartLabels(
        slicedData.map((item) => {
          const newDate = new Date(item.startDate);
          return newDate.getHours().toString();
        })
      );
    }
  };

  const fetchLatest = async () => {
    try {
      const response = await fetch("/api/v1/latest-prices.json");
      const data = await response.json();
      setPriceData(data.prices);
      updateChartData(data.prices);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching price data:", error);
    }
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  useEffect(() => {
    if (priceData.length > 0) {
      updateChartData(priceData);
    }
  }, [selectedButton, priceData]);

  if (loading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "linear-gradient(to top, #21BF73, #12663E)",
        }}
      >
        <CircularProgress color="primary" />
        <Typography
          sx={{
            marginTop: "1rem",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Loading Price Data...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundImage: "linear-gradient(to top, #21BF73, #12663E)",
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
          Price chart
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          borderRadius: "5px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonGroup variant="contained">
          <Button
            sx={{
              ...buttonStyling,
              backgroundColor: selectedButton === 0 ? "#99bda2" : "#FFFFFF",
            }}
            onClick={() => handleButtonClick(0)}
          >
            12 hrs
          </Button>
          <Button
            sx={{
              ...buttonStyling,
              backgroundColor: selectedButton === 1 ? "#99bda2" : "#FFFFFF",
            }}
            onClick={() => handleButtonClick(1)}
          >
            24 hrs
          </Button>
          <Button
            sx={{
              ...buttonStyling,
              backgroundColor: selectedButton === 2 ? "#99bda2" : "#FFFFFF",
            }}
            onClick={() => handleButtonClick(2)}
          >
            48 hrs
          </Button>
        </ButtonGroup>
      </Box>
      <h1>{priceData[0].price}</h1>
      <Container sx={{ height: "250px" }}>
        <Chart labels={chartLabels} data={chartData}></Chart>
      </Container>
    </Box>
  );
};

export default PriceChartPage;
