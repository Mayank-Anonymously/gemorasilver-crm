import * as Yup from "yup";
import { useSnackbar } from "notistack5";
import { useCallback, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Card, Grid, Stack, Typography } from "@material-ui/core";
import {
  TextField,
  Button,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  InputAdornment,
  TableHead,
} from "@mui/material";
import { useNavigate } from "react-router";
import Scrollbar from "src/components/Scrollbar";
import GameTable from "../Common/GameTable";
export default function PlaygroundForm({ data, time }) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useNavigate();
  const [first, setfirst] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const NewBlogSchema = Yup.object().shape({
    digit: Yup.string()
      .min(2, "Please Enter minimum 2 digits")
      .max(2, "Please Enter maximum 2 digits")
      .required("Single Digit is required"),
    singlePoint: Yup.number().required("Single Point is required"),
  });

  const formik = useFormik({
    initialValues: {
      game: data.gameName,
      digit: "",
      singlePoint: "",
      gameType: time,
    },
    validationSchema: NewBlogSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        resetForm();
        // handleClosePreview();
        setSubmitting(false);
        first.push(values);
        enqueueSnackbar("Post success", { variant: "success" });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    },
  });

  const {
    errors,
    values,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    getFieldProps,
  } = formik;
  // const CheckEntry = () => {
  //   if (first.length !== 0) {
  //     first.filter((item, index) => {
  //       if (item.digit === values.digit) {
  //         console.log("Inner");
  //         first.push({
  //           ...item,
  //           singleDigit: parseInt(item.singleDigit) + parseInt(values.digit),
  //         });
  //       } else {
  //         console.log("Iner Else");
  //         first.push(values);
  //       }
  //     });
  //   } else {
  //     first.push(values);
  //   }
  // };

  return (
    <>
      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* --------------------------FORM--------------------------- */}
            <Grid item xs={12} md={5} lg={5}>
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
                <Stack spacing={3}>
                  {data.gameName === "Jodi" ? (
                    <Stack direction={"column"} spacing={{ xs: 3, sm: 2 }}>
                      <Typography>Enter Double Digit</Typography>
                      <TextField
                        label="Double Digit"
                        {...getFieldProps("digit")}
                        error={Boolean(touched.digit && errors.digit)}
                        helperText={touched.digit && errors.digit}
                        inputProps={{
                          maxLength: 2,
                          minLength: 2,
                        }}
                      />
                    </Stack>
                  ) : (
                    <Stack direction={"column"} spacing={{ xs: 3, sm: 2 }}>
                      <Typography>Enter Single Digit</Typography>
                      <TextField
                        label="Single Digit"
                        {...getFieldProps("digit")}
                        error={Boolean(touched.digit && errors.digit)}
                        helperText={touched.digit && errors.digit}
                        inputProps={{
                          maxLength: 1,
                        }}
                      />
                    </Stack>
                  )}

                  <Stack direction={"column"} spacing={{ xs: 3, sm: 2 }}>
                    <Typography>Enter Points</Typography>
                    <TextField
                      label="Enter Points"
                      {...getFieldProps("singlePoint")}
                      error={Boolean(touched.singlePoint && errors.singlePoint)}
                      helperText={touched.singlePoint && errors.singlePoint}
                    />
                  </Stack>

                  <Button
                    type="submit"
                    variant="outlined"
                    loading={isSubmitting}
                  >
                    SUBMIT ENTRY
                  </Button>
                </Stack>
              </Card>
            </Grid>
            {/* --------------------------FORM--------------------------- */}

            {/* --------------------------FOOTER--------------------------- */}
            <Grid item xs={12} md={5} lg={7}>
              <Card sx={{ p: 3 }}>
                <Stack
                  direction={"column"}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h5" sx={{ margin: 2 }}>
                    {/* You are playing in {data.gameName} */}
                    FOOTER
                  </Typography>
                </Stack>

                <Scrollbar>
                  <TableContainer sx={{ minWidth: 200 }}>
                    <Table>
                      <TableHead>
                        <TableCell align="center">Bids</TableCell>
                        <TableCell align="center">Points</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableHead>
                      <TableBody>
                        <TableRow hover>
                          <TableCell align="center">{first.length}</TableCell>
                          <TableCell align="center">
                            {first.reduce(function (prev, current) {
                              return prev + +current.singlePoint;
                            }, 0)}
                          </TableCell>
                          <TableCell align="center">
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => setOpen(true)}
                            >
                              Submit
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Scrollbar>
              </Card>
            </Grid>
            {/* --------------------------FOOTER--------------------------- */}
          </Grid>
          <GameTable
            first={first}
            show={open}
            data={data}
            handleClose={handleClose}
          />
        </Form>
      </FormikProvider>
    </>
  );
}

/*  {/* --------------------------TABLE--------------------------- 
            // <Grid item xs={12} md={5} lg={7}>
            //   <Card sx={{ p: 3 }}>
            //     <Stack
            //       direction={"column"}
            //       justifyContent="center"
            //       alignItems="center"
            //     >
            //       <Typography variant="h5" sx={{ margin: 2 }}>
            //         {/* You are playing in {data.gameName} 
            //         TABLE
            //       </Typography>
            //     </Stack>

            //     <TableContainer sx={{ minWidth: 200 }}>
            //       <Table>
            //         <TableHead>
            //           <TableCell align="center">Pana</TableCell>
            //           <TableCell align="center">Points</TableCell>
            //           <TableCell align="center">Type</TableCell>
            //         </TableHead>
            //         <TableBody>
            //           {first.map((row) => {
            //             const { game, digit, singlePoint, gameType } = row;
            //             return (
            //               <TableRow hover>
            //                 <TableCell align="center">{digit}</TableCell>
            //                 <TableCell align="center">{singlePoint}</TableCell>
            //                 <TableCell
            //                   align="center"
            //                   sx={{
            //                     color: gameType === "Open" ? "green" : "red",
            //                   }}
            //                 >
            //                   {gameType}
            //                 </TableCell>
            //               </TableRow>
            //             );
            //           })}
            //         </TableBody>
            //       </Table>
            //     </TableContainer>
            //   </Card>
            // </Grid>
            // {/* --------------------------TABLE--------------------------- */
