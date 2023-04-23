import * as Yup from "yup";

import { useSnackbar } from "notistack5";
import { useFormik, Form, FormikProvider } from "formik";
// material
import { useTheme, styled } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Grid,
  Container,
  Typography,
  useMediaQuery,
  Button,
  Input,
} from "@material-ui/core";
// utils
import fakeRequest from "../../../utils/fakeRequest";
// components
import Page from "../../../components/Page";
import { makeStyles } from "@material-ui/styles";

import {
  WalletSummary,
  WalletMethods,
  WalletBillingAddress,
} from "../Transaction/index";
import { BookingDetails } from "../general-booking";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  minHeight: "200%",
  padding: 50,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #3b82f6 20%, #1e3a8a 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "none",
    width: "20rem",
    height: 48,
    marginTop: "20rem",
    padding: "0 32px",
    textDecorationLine: "none",
  },
});
// ----------------------------------------------------------------------

export default function Payment() {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const classes = useStyles();
  const [walletBalanceData, setwalletBalanceData] = useState([]);
  const [userId, setUserId] = useState("");
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const getAlltranscation = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      userid: userId,
      type: "cr",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://10.10.8.53:7500/all/users/transactions", requestOptions)
      .then((response) => response.json())
      .then((result) => setwalletBalanceData(result))
      .catch((error) => console.log("error", error));
  };
  console.log(
    "walletBalanceData::",
    walletBalanceData.map((item) => item.userid)
  );
  useEffect(() => getAlltranscation(), []);

  const PaymentSchema = Yup.object().shape({
    amount: Yup.string().required("Add any amount "),
    // phone: Yup.string().required("Phone is required"),
    // email: Yup.string()
    //   .email("Email must be a valid email address")
    //   .required("Email is required"),
    // address: Yup.string().required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      amount: "",
      method: "Net banking",
    },
    validationSchema: PaymentSchema,
    onSubmit: async (values, { resetForm }) => {
      const submitData = {
        amount: values.amount,
      };
      await fakeRequest(500);
      if (values.method === "Net banking") {
        alert(
          JSON.stringify(
            {
              ...submitData,
              method: values.method,
            },
            null,
            2
          )
        );
      } else if (values.method === "cash") {
        alert(
          JSON.stringify(
            {
              ...submitData,
              method: values.method,
            },
            null,
            2
          )
        );
      } else if (values.method === "Cheque") {
        alert(
          JSON.stringify(
            {
              ...submitData,
              method: values.method,
            },
            null,
            2
          )
        );
      }
      if (values.newCardamount) {
        alert(
          JSON.stringify(
            {
              ...submitData,
              method: values.method,
            },
            null,
            2
          )
        );
      }
      resetForm();
      enqueueSnackbar("Payment success", { variant: "success" });
    },
  });
  const handleChange = (event) => {
    setUserId(event.target.value);
  };
  // console.log("userId:::", userId);
  return (
    <RootStyle title="Wallet Topup | Asfiya_Art_Shop">
      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" align="center" paragraph>
            Let's finish powering you up!
          </Typography>
          <Typography align="center" sx={{ color: "text.secondary" }}>
            Professional plan is right for you.
          </Typography>
        </Box>

        <Card>
          <FormikProvider value={formik}>
            <Form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
              <Grid container spacing={upMd ? 5 : 2}>
                <Grid item xs={12} md={4}>
                  <WalletBillingAddress formik={formik} ID={userId} />
                  <Box sx={{ marginTop: 10, marginLeft: 8 }}>
                    <Input value={userId} onChange={handleChange} />
                    <Button
                      variant="contained"
                      onClick={() => getAlltranscation()}
                    >
                      Submit
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <WalletMethods formik={formik} />
                </Grid>
                <Grid item xs={12} md={4}>
                  {/* <WalletSummary formik={formik} /> */}
                </Grid>
              </Grid>
            </Form>
          </FormikProvider>
          <BookingDetails walletdata={walletBalanceData} />
        </Card>
      </Container>
    </RootStyle>
  );
}
