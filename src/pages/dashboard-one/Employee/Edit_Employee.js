import { Container } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Page from "src/components/Page";
import EditEmployeeForm from "src/components/_dashboardone/Employee/EditEmployeeForm";
import useSettings from "src/hooks/useSettings";
import { PATH_DASHBOARD } from "src/routes/paths";

export default function Edit_Employee() {
  const { themeStretch } = useSettings();
  const location = useLocation();
  const { data } = location.state;
  return (
    <Page title="Edit Employee | Asfiya_Art_Shop">
      <Container maxWidth={themeStretch ? false : "xxl"}>
        <HeaderBreadcrumbs
          heading={`Edit ${data ? data.name : "Employee"}`}
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "Employee", href: PATH_DASHBOARD.blog.root },
            { name: "Edit Employee" },
          ]}
        />
        <EditEmployeeForm data={data} />
      </Container>
    </Page>
  );
}
