// material
import { alpha, useTheme, styled } from "@material-ui/core/styles";
import { Box, Card, Typography, Stack } from "@material-ui/core";
// utils
import { fNumber, fPercent } from "../../../utils/formatNumber";

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------



export default function GameRoom() {
  const theme = useTheme();
  return (
    <Card sx={{ display: "flex", alignItems: "center", p: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3">Lata Morning</Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-around"}
          spacing={4}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography component="span" variant="subtitle2">
            Open Time <br /> 11:30 Am
          </Typography>
          <Typography component="span" variant="subtitle2">
            Close Time <br /> 11:30 Am
          </Typography>
        </Stack>
        <Typography component="span" variant="subtitle2">
          Betting is running today.
        </Typography>
      </Box>
    </Card>
  );
}
