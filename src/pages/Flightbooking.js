import { Box, Grid } from "@material-ui/core";
import React from "react";
import Engine from "src/components/_dashboard/general-app/FlightEngine/Engine";
import { styled, alpha } from "@material-ui/core/styles";
import { Typography, Button, Card, CardContent } from "@material-ui/core";
const Flightbooking = () => {
  const RootStyle = styled(Card)(({ theme, shadow }) => ({
    boxShadow: "none",
    textAlign: "center",
    boxShadow: theme.customShadows.z20,
    "& .mapboxgl-ctrl": {
      border: "none",
      borderRadius: 4,
      lineHeight: "14px",
      color: theme.palette.primary.dark,
    },
    backgroundColor: theme.palette.primary.lig,
    [theme.breakpoints.up("md")]: {
      height: "100%",
      display: "flex",
      textAlign: "left",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

  return (
    <Box sx={{ width: 1, p: 20, alignContent: "center" }}>
      <RootStyle>
        <Engine />
      </RootStyle>
    </Box>
  );
};

export default Flightbooking;
