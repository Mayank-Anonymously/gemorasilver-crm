import * as Yup from "yup";
import { useSnackbar } from "notistack5";
import { useCallback, useEffect, useState } from "react";
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
  FormControl,
  InputLabel,
  Select,
  ListSubheader,
  Checkbox,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router";
import Scrollbar from "src/components/Scrollbar";
import GameTable from "../../Common/GameTable";
const sp = [
  {
    sp1: [128, 137, 146, 236, 245, 290, 380, 470, 489, 560, 579, 678],
    sp2: [129, 138, 147, 156, 237, 246, 345, 390, 480, 570, 589, 679],
    sp3: [120, 139, 148, 157, 238, 247, 256, 346, 490, 580, 670, 689],
    sp4: [130, 149, 158, 167, 239, 248, 257, 347, 356, 590, 680, 789],
    sp5: [140, 159, 168, 230, 249, 258, 267, 348, 357, 456, 690, 780],
    sp6: [123, 150, 169, 178, 240, 259, 268, 349, 358, 367, 457, 790],
    sp7: [124, 160, 179, 250, 269, 278, 340, 359, 368, 458, 467, 890],
    sp8: [125, 134, 170, 189, 260, 279, 350, 369, 378, 459, 468, 567],
    sp9: [126, 135, 180, 234, 270, 289, 360, 379, 450, 469, 478, 568],
    sp0: [127, 136, 145, 190, 235, 280, 370, 389, 460, 479, 569, 578],
  },
];

const dp = [
  {
    dp1: [100, 119, 155, 227, 335, 344, 399, 588, 669],
    dp2: [110, 200, 228, 255, 336, 499, 660, 688, 778],
    dp3: [166, 229, 300, 337, 355, 445, 599, 779, 788],
    dp4: [112, 220, 266, 338, 400, 446, 455, 699, 770],
    dp5: [113, 122, 177, 339, 366, 447, 500, 799, 889],
    dp6: [114, 277, 330, 448, 466, 556, 600, 880, 899],
    dp7: [115, 133, 188, 223, 377, 449, 557, 566, 700],
    dp8: [116, 224, 233, 288, 440, 477, 558, 800, 990],
    dp9: [117, 144, 199, 225, 388, 559, 577, 667, 900],
    dp0: [118, 226, 244, 299, 334, 488, 550, 668, 677],
  },
];

const TP = [
  {
    tp1: 777,
    tp2: 444,
    tp3: 111,
    tp4: 888,
    tp5: 555,
    tp6: 222,
    tp7: 999,
    tp8: 666,
    tp9: 333,
    tp0: "000",
  },
];

const family_jodi_number = [
  {
    12: [12, 17, 21, 26, 62, 67, 71, 76],
    13: [13, 18, 31, 36, 63, 68, 81, 86],
    14: [14, 19, 41, 46, 64, 69, 91, 96],
    15: [1, 6, 10, 15, 51, 56, 60, 65],
    23: [23, 28, 32, 37, 73, 78, 82, 87],
    24: [24, 29, 42, 47, 74, 79, 92, 97],
    25: [2, 7, 20, 25, 52, 57, 70, 75],
    34: [34, 39, 43, 48, 84, 89, 93, 98],
    35: [3, 8, 30, 35, 53, 58, 80, 85],
    45: [4, 9, 40, 45, 54, 59, 90, 95],
  },
];

const red_family_jodi_number = [
  {
    "00": ["00", 55, 5, 50],
    11: [11, 66, 16, 61],
    22: [22, 77, 27, 72],
    33: [33, 88, 38, 83],
    44: [44, 99, 49, 94],
  },
];

const cycle_patti = [
  {
    // "00": [100, 200, 300, 400, 500, 600, 700, 800, 900, "000"],
    10: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
    11: [110, 111, 112, 113, 114, 115, 116, 117, 118, 119],
    12: [112, 120, 122, 123, 124, 125, 126, 127, 128, 129],
    13: [113, 123, 130, 133, 134, 135, 136, 137, 138, 139],
    14: [114, 124, 134, 140, 144, 145, 146, 147, 148, 149],
    15: [115, 125, 135, 145, 150, 155, 156, 157, 158, 159],
    16: [116, 126, 136, 146, 156, 160, 166, 167, 168, 169],
    17: [117, 127, 137, 147, 157, 167, 170, 177, 178, 179],
    18: [118, 128, 138, 148, 158, 168, 178, 180, 188, 189],
    19: [119, 129, 139, 149, 159, 169, 179, 189, 190, 199],
    20: [120, 200, 220, 230, 240, 250, 260, 270, 280, 290],
    22: [122, 220, 223, 224, 225, 226, 227, 228, 229, 222],
    23: [123, 230, 233, 234, 235, 236, 237, 238, 239, 223],
    24: [124, 240, 244, 245, 246, 247, 248, 249, 224, 234],
    25: [125, 250, 255, 256, 257, 258, 259, 225, 235, 245],
    26: [126, 260, 266, 267, 268, 269, 226, 236, 246, 256],
    27: [127, 270, 277, 278, 279, 227, 237, 247, 257, 267],
    28: [128, 280, 288, 289, 228, 238, 248, 258, 268, 278],
    29: [129, 290, 299, 229, 239, 249, 259, 269, 279, 289],
    30: [130, 230, 300, 330, 340, 350, 360, 370, 380, 390],
    33: [133, 233, 333, 334, 335, 336, 337, 338, 339, 330],
    34: [134, 234, 334, 340, 344, 345, 346, 347, 348, 349],
    35: [135, 350, 355, 335, 345, 235, 356, 357, 358, 359],
    36: [136, 360, 366, 336, 346, 356, 367, 368, 369, 236],
    37: [137, 370, 377, 337, 347, 357, 367, 378, 379, 237],
    38: [138, 380, 388, 238, 338, 348, 358, 368, 378, 389],
    39: [139, 390, 399, 349, 359, 369, 379, 389, 239, 339],
    40: [140, 240, 340, 400, 440, 450, 460, 470, 480, 490],
    44: [144, 244, 344, 440, 449, 445, 446, 447, 448, 444],
    45: [145, 245, 345, 450, 456, 457, 458, 459, 445, 455],
    46: [146, 460, 446, 467, 468, 469, 246, 346, 456, 466],
    47: [147, 470, 447, 478, 479, 247, 347, 457, 467, 477],
    48: [148, 480, 489, 248, 348, 448, 488, 458, 468, 478],
    49: [149, 490, 499, 449, 459, 469, 479, 489, 249, 349],
    50: [500, 550, 150, 250, 350, 450, 560, 570, 580, 590],
    55: [155, 556, 557, 558, 559, 255, 355, 455, 555, 550],
    56: [156, 556, 567, 568, 569, 356, 256, 456, 560, 566],
    57: [157, 257, 357, 457, 557, 578, 579, 570, 567, 577],
    58: [158, 558, 568, 578, 588, 589, 580, 258, 358, 458],
    59: [159, 259, 359, 459, 559, 569, 579, 589, 590, 599],
    60: [600, 160, 260, 360, 460, 560, 660, 670, 680, 690],
    66: [660, 667, 668, 669, 666, 166, 266, 366, 466, 566],
    67: [670, 167, 267, 367, 467, 567, 667, 678, 679, 677],
    68: [680, 688, 668, 678, 168, 268, 368, 468, 568, 689],
    69: [690, 169, 269, 369, 469, 569, 669, 679, 689, 699],
    70: [700, 170, 270, 370, 470, 570, 670, 770, 780, 790],
    77: [770, 177, 277, 377, 477, 577, 677, 778, 779, 777],
    78: [178, 278, 378, 478, 578, 678, 778, 788, 789, 780],
    79: [179, 279, 379, 479, 579, 679, 779, 789, 799, 790],
    80: [180, 280, 380, 480, 580, 680, 780, 880, 800, 890],
    88: [188, 288, 388, 488, 588, 688, 788, 889, 888, 880],
    89: [189, 289, 389, 489, 589, 689, 789, 889, 890, 899],
    90: [900, 190, 290, 390, 490, 590, 690, 790, 890, 900],
    99: [199, 299, 399, 499, 599, 699, 799, 899, 990, 999],
  },
];

const family_panel = [
  {
    111: [111, 116, 166, 666],
    112: [112, 117, 126, 167, 266, 667],
    113: [113, 118, 136, 168, 366, 668],
    114: [114, 119, 146, 169, 466, 669],
    115: [110, 115, 156, 160, 566, 660],
    122: [122, 127, 177, 226, 267, 677],
    123: [123, 128, 137, 178, 236, 268, 367, 678],
    124: [124, 129, 147, 179, 246, 269, 467, 679],
    125: [120, 125, 157, 170, 256, 260, 567, 670],
    133: [133, 138, 188, 336, 368, 688],
    134: [134, 139, 148, 189, 346, 369, 468, 689],
    135: [130, 135, 158, 180, 356, 360, 568, 680],
    144: [144, 149, 199, 446, 469, 699],
    145: [140, 145, 159, 190, 456, 460, 569, 690],
    155: [100, 150, 155, 556, 560, 600],
    222: [222, 227, 277, 777],
    223: [223, 228, 237, 278, 377, 778],
    224: [224, 229, 247, 279, 477, 779],
    225: [220, 225, 257, 270, 577, 770],
    233: [233, 238, 288, 337, 378, 788],
    234: [234, 239, 248, 289, 347, 379, 478, 789],
    235: [230, 235, 258, 280, 357, 370, 578, 780],
    244: [244, 249, 299, 447, 479, 799],
    245: [240, 245, 259, 290, 457, 470, 579, 790],
    255: [200, 250, 255, 557, 570, 700],
    333: [333, 338, 388, 888],
    334: [334, 339, 348, 389, 488, 889],
    335: [330, 335, 358, 380, 588, 880],
    344: [344, 349, 399, 448, 489, 899],
    345: [340, 345, 359, 390, 458, 480, 589, 890],
    355: [300, 350, 355, 558, 580, 800],
    444: [444, 449, 499, 999],
    445: [440, 445, 459, 490, 599, 990],
    455: [400, 450, 455, 559, 590, 900],
    555: ["000", 500, 550, 555],
  },
];

export default function CardForm({ data, time }) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useNavigate();
  const [first, setfirst] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const ARRAY_OPTIONS =
    data.gameName == "SP Pana"
      ? sp
      : data.gameName == "DP Pana"
      ? dp
      : data.gameName == "TP Pana"
      ? TP
      : data.gameName == "DP"
      ? dp
      : data.gameName == "SP"
      ? sp
      : data.gameName == "Jodi Family"
      ? family_jodi_number
      : data.gameName == "Red Jodi"
      ? red_family_jodi_number
      : data.gameName == "Red Jodi Family"
      ? red_family_jodi_number
      : data.gameName == "Cycle Pana"
      ? cycle_patti
      : data.gameName == "Family Pana"
      ? family_panel
      : [];

  const NewBlogSchema = Yup.object().shape({
    digit: Yup.string().required("Single Digit is required"),
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

  const OPTIONS = (valk) => {
    if (
      data.gameName === "Family Pana" ||
      data.gameName === "Cycle Pana" ||
      data.gameName === "Red Jodi Family" ||
      data.gameName === "Red Jodi" ||
      data.gameName === "Jodi Family"
    ) {
      for (let value of Object.values(ARRAY_OPTIONS)) {
        return value[valk];
      }
    } else {
      var digit = valk.replaceAll(" ", "");
      for (let value of Object.values(ARRAY_OPTIONS)) {
        return value[digit];
      }
    }
  };
  const GAMENAME = data.gameName.split("Pana")[0].toLowerCase();
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
                  <Stack direction={"column"} spacing={{ xs: 3, sm: 2 }}>
                    {data.gameName === "Family Pana" ||
                    data.gameName === "Cycle Pana" ||
                    data.gameName === "Red Jodi Family" ||
                    data.gameName === "Red Jodi" ||
                    data.gameName === "Jodi Family" ? (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select {data.gameName}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={values.digit}
                          label={`Select ${data.gameName}`}
                          {...getFieldProps("digit")}
                          error={Boolean(touched.digit && errors.digit)}
                        >
                          {Object.keys(ARRAY_OPTIONS[0]).map((key, i) => (
                            <MenuItem value={key}>{key}</MenuItem>
                          ))}
                        </Select>
                        {values.digit !== "" ? (
                          <Typography variant="p" sx={{ margin: 1 }}>
                            {OPTIONS(values.digit).map(
                              (item, index) => item + ","
                            )}
                          </Typography>
                        ) : (
                          <Typography variant="p"></Typography>
                        )}
                      </FormControl>
                    ) : (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select {data.gameName}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={values.digit}
                          label={`Select ${data.gameName}`}
                          {...getFieldProps("digit")}
                          error={Boolean(touched.digit && errors.digit)}
                        >
                          <MenuItem value={`${GAMENAME}1`}>
                            {GAMENAME} : 1
                          </MenuItem>
                          <MenuItem value={`${GAMENAME}2`}>
                            {GAMENAME} : 2
                          </MenuItem>
                          <MenuItem value={`${GAMENAME}3`}>
                            {GAMENAME} : 3
                          </MenuItem>
                          <MenuItem value={`${GAMENAME}4`}>
                            {GAMENAME} : 4
                          </MenuItem>
                          <MenuItem value={`${GAMENAME}5`}>
                            {GAMENAME} : 5
                          </MenuItem>
                          <MenuItem value={`${GAMENAME}6`}>
                            {GAMENAME} : 6
                          </MenuItem>
                          <MenuItem value={`${GAMENAME}7`}>
                            {GAMENAME} : 7
                          </MenuItem>
                          <MenuItem value={`${GAMENAME}8`}>
                            {GAMENAME} : 8
                          </MenuItem>
                          <MenuItem value={`${GAMENAME}9`}>
                            {GAMENAME} : 9
                          </MenuItem>
                          <MenuItem value={`${GAMENAME}0`}>
                            {GAMENAME} : 0
                          </MenuItem>
                        </Select>
                        {values.digit !== "" ? (
                          <Typography variant="p" sx={{ margin: 1 }}>
                            {data.gameName === "TP Pana"
                              ? OPTIONS(values.digit)
                              : OPTIONS(values.digit).map(
                                  (item, index) => item + ","
                                )}
                          </Typography>
                        ) : (
                          <Typography variant="p"></Typography>
                        )}
                      </FormControl>
                    )}
                  </Stack>

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
                    {/* You are playing in {data.GAMENAME} */}
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
