// material
import { alpha, useTheme, styled } from "@material-ui/core/styles";
import { Box, Card, Typography, Stack } from "@material-ui/core";
// utils
import { useState } from "react";
import Dialog from "../Common/Dialog";
import moment from "moment";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function GameRoom({ data, index }) {
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Card
      sx={{ display: "flex", alignItems: "center", p: 3, cursor: "pointer" }}
      onClick={() => {
        setOpen(true);
        setSelectedRoom(data);
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-around"}
          spacing={4}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography variant="h4">{data.name.toUpperCase()}</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-around"}
          spacing={4}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography component="span" variant="subtitle2">
            {data.open_result === null ? "***" : data.open_result}_
            {data.open_result_sum === null ? "*" : data.open_result_sum}
            {data.close_result_sum === null ? "*" : data.close_result_sum}_
            {data.close_result === null ? "***" : data.close_result}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-around"}
          spacing={4}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography
            component="span"
            variant="subtitle2"
            sx={{ color: "Open" === "Open" ? "green" : "black" }}
          >
            Open Time <br /> {data.open_time}
          </Typography>
          <Typography
            component="span"
            variant="subtitle2"
            sx={{ color: "Close" === "Close" ? "red" : "black" }}
          >
            Close Time <br />
            {data.close_time}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-around"}
          spacing={4}
          sx={{ mt: 2, mb: 1 }}
        >
          <Typography
            component="span"
            variant="subtitle2"
            sx={{ color: "green" }}
          >
            {data.status}
          </Typography>
        </Stack>
      </Box>
      <Dialog
        show={open}
        handleClose={handleClose}
        data={data}
        selectedRoom={selectedRoom}
      />
    </Card>
  );
}
