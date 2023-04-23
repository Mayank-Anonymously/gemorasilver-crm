// material
import { Container, Grid } from "@material-ui/core";
// hooks
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
import useAuth from "src/hooks/useAuth";
import GameRoom from "src/components/_dashboardone/Games/Room";
import DashboardWelcome from "src/components/_dashboard/general-app/AppWelcome";
import rooms from "src/utils/rooms";
import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { host } from "src/static";
// import { GetAllRoom } from "src/components/_dashboardone/API/GetAllRoom";
// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { themeStretch } = useSettings();

  const GetAllRoom = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMDYzMTQyLCJpYXQiOjE2ODAwMzMxNDIsImp0aSI6ImU1MjVhNmUxZTQ4MjRlMDU4NTdiMzk5MTUxOWZhYjFiIiwidXNlcl9pZCI6NX0.fHzllZF2j3zwZHRPqo9hP1xElHT1Ji7h4WaflNGtFj4"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    fetch(`${host}v1/games`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    GetAllRoom();
  }, []);

  return (
    <Page title="Game Rooms | Asfiya_Art_Shop">
      <Container maxWidth={themeStretch ? "xxl" : "xxl"}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <DashboardWelcome />
          </Grid>
          {/* <Grid item xs={12} md={4} lg={12}>
            <Stack display="flex" justifyContent={"center"} alignItems="center">
              <Typography variant="h3">Games</Typography>
            </Stack>
          </Grid> */}

          {/* {rooms.map((item, index) => {
            return (
              <Grid item xs={12} md={4} lg={4}>
                <Stack sx={{ margin: 2 }}>
                  <GameRoom data={item} key={index} />
                </Stack>
              </Grid>
            );
          })} */}

          {/* <Grid item xs={12} md={4} lg={4}>
            <AppTotalInstalled />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <AppTotalDownloads />
          </Grid> */}
          {/* <Grid item xs={12} md={4} lg={3}>
            <AppTotalQueries />
          </Grid> */}
          {/* <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidgets1 />
              <AppWidgets2 />
            </Stack>
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
