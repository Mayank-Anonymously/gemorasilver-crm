import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Card,
  Grid,
  SliderTrack,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
};

export default function GameTable({ show, first, data, handleClose }) {
  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item xs={12} md={5} lg={12}>
            <Card sx={{ p: 3 }}>
              <Stack
                direction={"column"}
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h5" sx={{ margin: 2 }}>
                  You are playing in {data.gameName}
                </Typography>
              </Stack>

              <TableContainer sx={{ minWidth: 400 }}>
                <Table>
                  <TableHead>
                    <TableCell align="center">Pana</TableCell>
                    <TableCell align="center">Points</TableCell>
                    <TableCell align="center">Type</TableCell>
                  </TableHead>
                  <TableBody>
                    {first.map((row) => {
                      const { game, digit, singlePoint, gameType } = row;
                      return (
                        <TableRow hover>
                          <TableCell align="center">
                            {digit.toUpperCase()}
                          </TableCell>
                          <TableCell align="center">{singlePoint}</TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              color: gameType === "Open" ? "green" : "red",
                            }}
                          >
                            {gameType}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
