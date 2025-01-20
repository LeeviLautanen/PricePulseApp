import { Box, Typography } from "@mui/material";

const HomePage = () => {
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
          height: "8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 400,
          }}
        >
          PricePulse
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
