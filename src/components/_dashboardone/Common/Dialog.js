import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
};

export default function Dialog({ show, handleClose, selectedRoom }) {
  const current = moment().format("HH:mm");

  return (
    <div>
      <Modal
        open={show}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* {selectedRoom.open_time >= current &&
          selectedRoom.close_time >= current ? (
            <Stack justifyContent={"center"} alignItems="center" display="flex">
              <Typography>Game has been Closed</Typography>
            </Stack>
          ) : (
            <> */}
          <Stack justifyContent={"center"} alignItems="center" display="flex">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Select One Option
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-around"}
            spacing={4}
            sx={{ mt: 2, mb: 1 }}
          >
            {selectedRoom.open_time >= current ? (
              <Button
                variant="outlined"
                component={RouterLink}
                to={"/dashboard/view-games"}
                state={{ time: "open" }}
              >
                Open
              </Button>
            ) : (
              <Typography>
                This bid Open time was {selectedRoom.open_time}
              </Typography>
            )}
            {selectedRoom.close_time >= current ? (
              <Button
                component={RouterLink}
                to={"/dashboard/view-games"}
                variant="outlined"
                color="error"
                state={{ time: "close" }}
                sx={{
                  color: "#FF4842",
                  "&:hover": {
                    backgroundColor: "#FF4842",
                    color: "#fff",
                  },
                }}
              >
                Close
              </Button>
            ) : (
              <Typography>
                This bid Close time was {selectedRoom.close_time}
              </Typography>
            )}
          </Stack>
          {/* </>
          )} */}
        </Box>
      </Modal>
    </div>
  );
}
