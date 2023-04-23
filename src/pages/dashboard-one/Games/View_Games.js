// material
import {
  Container,
  Grid,
  Card,
  Stack,
  Box,
  Typography,
} from "@material-ui/core";
// hooks
// components

import games from "../../../utils/games";
import Page from "src/components/Page";
import useSettings from "src/hooks/useSettings";
import { useLocation, useNavigation } from "react-router";
import { Link as RouterLink } from "react-router-dom";
// ----------------------------------------------------------------------

export default function View_Games() {
  const { themeStretch } = useSettings();
  const location = useLocation();
  const { time } = location.state;

  return (
    <Page title="View Games | Asfiya_Art_Shop">
      <Container maxWidth={themeStretch ? "xxl" : "xxl"}>
        {time == "open" ? (
          <Grid container spacing={1}>
            {games
              .filter((item) => item.type === time)
              .map((item, index) => {
                return (
                  <Grid item xs={12} md={4} lg={3}>
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 3,
                        cursor: "pointer",
                      }}
                    >
                      <Box sx={{ flexGrow: 1, cursor: "pointer" }}>
                        <Stack
                          alignItems="center"
                          justifyContent={"space-around"}
                          spacing={4}
                          sx={{
                            mt: 2,
                            mb: 1,
                            textDecoration: "none",
                          }}
                          component={RouterLink}
                          to={"/dashboard/playground"}
                          state={{ data: item, time: time }}
                        >
                          <img
                            src={item.image}
                            alt={item.gameName}
                            width={"100px"}
                          />
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {item.gameName}
                          </Typography>
                        </Stack>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        ) : (
          <Grid container spacing={1}>
            {games
              .filter((item) => item.type2 === time)
              .map((item, index) => {
                return (
                  <Grid item xs={12} md={4} lg={3}>
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 3,
                        cursor: "pointer",
                      }}
                    >
                      <Box sx={{ flexGrow: 1, cursor: "pointer" }}>
                        <Stack
                          alignItems="center"
                          justifyContent={"space-around"}
                          spacing={4}
                          sx={{
                            mt: 2,
                            mb: 1,
                            textDecoration: "none",
                          }}
                          component={RouterLink}
                          to={"/dashboard/playground"}
                          state={{ data: item, time: time }}
                        >
                          <img
                            src={item.image}
                            alt={item.gameName}
                            width={"100px"}
                          />
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {item.gameName}
                          </Typography>
                        </Stack>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        )}
      </Container>
    </Page>
  );
}
