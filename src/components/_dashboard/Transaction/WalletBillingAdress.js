import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// material
import { styled } from "@material-ui/core/styles";
import { Typography, TextField, Stack } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import AppWidgets1 from "../general-app/AppWidgets1";
// import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
// import { useDispatch, useSelector } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addBalance } from "../../../redux/slices/WalletBalance";

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

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    padding: 0,
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
}));

// ----------------------------------------------------------------------

PaymentBillingAddress.propTypes = {
  formik: PropTypes.object.isRequired,
  ID: PropTypes.number,
};

export default function PaymentBillingAddress({ formik, ID }, props) {
  const { touched, errors, getFieldProps, isSubmitting, values } = formik;
  const [balance, setBalance] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();

  const getWalletBalance = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      userid: 1,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://10.10.8.53:7500/get_wallet_balance", requestOptions)
      .then((response) => response.json())
      .then((result) => setBalance(result))
      .catch((error) => console.log("error", error));
  };
  // const USERID = userId.map((_userId) => _userId.userid);
  const WALLETBALANCE = balance.walletBalance;
  useEffect(() => getWalletBalance(), dispatch(addBalance(WALLETBALANCE)), []);

  return (
    <RootStyle>
      <Typography variant="subtitle1">Billing Address</Typography>

      <Stack spacing={3} mt={5}>
        <TextField
          fullWidth
          label="Amount to be added "
          {...getFieldProps("amount")}
          error={Boolean(touched.amount && errors.amount)}
          helperText={touched.amount && errors.amount}
        />

        {/* <TextField
            fullWidth
            label="Phone number"
            {...getFieldProps("phone")}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
          />

          <TextField
            fullWidth
            label="Email"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            label="Address"
            {...getFieldProps("address")}
            error={Boolean(touched.address && errors.address)}
            helperText={touched.address && errors.address}
          /> */}
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          // onClick={() => dispatch(addBalance(WALLETBALANCE))}
          className={classes.root}
          sx={{ mt: 5, mb: 3 }}
        >
          Add Amount to Wallet
        </LoadingButton>
        {/* <AppWidgets1 values={values} /> */}
      </Stack>
    </RootStyle>
  );
}
