import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@material-ui/core/styles";
import { Typography, Button, Card, CardContent } from "@material-ui/core";
// import { SeoIllustration } from "../../../assets";
import Engine from "./FlightEngine/Engine";
import FlightEngine from "src/FlightEngine/FlightEngine";
import { SeoIllustration } from "src/assets";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up("md")]: {
    height: "100%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

// ----------------------------------------------------------------------

DashboardWelcome.propTypes = {
  displayName: PropTypes.string,
};

export default function DashboardWelcome({ displayName }) {
  return (
    <RootStyle>
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: "grey.800",
        }}
      >
        <Typography gutterBottom variant="h4">
          Congratulations,
          <br /> {!displayName ? "..." : displayName}!
        </Typography>

        <Typography
          variant="body2"
          sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: "auto" }}
        >
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything
        </Typography>
      </CardContent>

      <SeoIllustration
        sx={{
          p: 3,
          width: 360,
          margin: { xs: "auto", md: "inherit" },
        }}
      />
      {/* <Button variant="contained" to="/" component={RouterLink}>
        Go Now
      </Button> */}
    </RootStyle>
  );
}
