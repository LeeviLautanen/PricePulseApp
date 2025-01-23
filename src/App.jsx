import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Homepage";
import ChartPage from "./components/PriceChartPage";
import AppliancesPage from "./components/AppliancesPage";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 400,
          height: 800,
        }}
      >
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/appliances" element={<AppliancesPage />} />
        </Routes>
        <Navbar></Navbar>
      </Box>
    </BrowserRouter>
  );
}

export default App;
