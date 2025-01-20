import { Container } from "@mui/material";
import React, { useEffect } from "react";

const PriceChartPage = () => {
  const [priceData, setPriceData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchLatest = async () => {
    try {
      const response = await fetch("/api/v1/latest-prices.json");
      const data = await response.json();
      setPriceData(data.prices);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching price data:", error);
    }
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <h1>{priceData[0].price}</h1>
    </Container>
  );
};

export default PriceChartPage;
