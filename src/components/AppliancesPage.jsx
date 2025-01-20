import { Box, Typography } from "@mui/material";

const AppliancesPage = () => {
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
          Appliances
        </Typography>
      </Box>
    </Box>
  );
};

export default AppliancesPage;
