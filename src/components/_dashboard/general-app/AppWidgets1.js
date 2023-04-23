import { merge } from "lodash";
import { Icon } from "@iconify/react";
import ReactApexChart from "react-apexcharts";
import personFill from "@iconify/icons-eva/person-fill";
// material
import { useTheme, styled } from "@material-ui/core/styles";
import { Card, Typography, Box } from "@material-ui/core";
// utils
import { fNumber } from "../../../utils/formatNumber";
import { BaseOptionChart } from "../../charts";
import { useSelector } from "../../../redux/store";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  display: "flex",
  position: "relative",
  alignItems: "center",
  padding: theme.spacing(1, 6),
  backgroundColor: theme.palette.primary.darker,
}));

const IconStyle = styled(Icon)(({ theme }) => ({
  width: 120,
  height: 120,
  opacity: 0.12,
  position: "absolute",
  right: theme.spacing(-3),
  color: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

const TOTAL = 1038566;
const CHART_DATA = [44];

export default function AppWidgets1(props) {
  const { value } = useSelector((state) => state.TopUp);
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    chart: { sparkline: { enabled: true } },
    legend: { show: false },
    plotOptions: {
      radialBar: {
        hollow: { size: "78%" },
        track: { margin: 0 },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 6,
            color: theme.palette.common.white,
            fontSize: theme.typography.subtitle2.fontSize,
          },
        },
      },
    },
  });

  return (
    <RootStyle>
      <ReactApexChart
        type="radialBar"
        series={CHART_DATA}
        options={chartOptions}
        width={43}
        height={43}
      />
      <Box sx={{ ml: 3, color: "common.white" }}>
        <Typography variant="h6"> {fNumber(value.payload)}</Typography>
        <Typography style={{ fontSize: 12 }} sx={{ opacity: 0.32 }}>
          Wallet Balance
        </Typography>
      </Box>
      <IconStyle icon={personFill} />
    </RootStyle>
  );
}
