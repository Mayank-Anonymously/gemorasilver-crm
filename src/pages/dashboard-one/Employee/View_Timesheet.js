import {
  Card,
  CardHeader,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Page from "src/components/Page";
import ViewTimeSheetTable from "src/components/_dashboardone/Employee/ViewTimeSheetTable";
import useSettings from "src/hooks/useSettings";

const ViewTimesheet = () => {
  const { themeStretch } = useSettings();
  const location = useLocation();
  const { data } = location.state;

  return (
    <Page title="View Timesheet || Asfiya_Art_Shop">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="Time sheet of emplyoee"
          links={[
            { name: "Dashboard" },
            { name: "employee" },
            { name: "timesheet" },
          ]}
        />
        <ViewTimeSheetTable data={data} />
      </Container>
    </Page>
  );
};

export default ViewTimesheet;
