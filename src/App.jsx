import React from "react";
import { Calculate, Home, BarChart } from "@mui/icons-material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Homepage";
import ChartPage from "./components/PriceChartPage";
import CalculatorPage from "./components/CalculatorPage";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";

function App() {
  const [value, setValue] = React.useState(1);

  return (
    <BrowserRouter>
      <Container sx={{ width: 400 }}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>

        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Chart"
            icon={<BarChart />}
            component={Link}
            to="/chart"
          />
          <BottomNavigationAction
            label="Home"
            icon={<Home />}
            component={Link}
            to="/home"
          />
          <BottomNavigationAction
            label="Calculator"
            icon={<Calculate />}
            component={Link}
            to="/calculator"
          />
        </BottomNavigation>
      </Container>
    </BrowserRouter>
  );
}

export default App;
