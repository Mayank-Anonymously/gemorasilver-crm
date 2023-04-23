import { Container } from "@material-ui/core";
import React from "react";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Page from "src/components/Page";
import AddEmployeeForm from "src/components/_dashboardone/Employee/AddEmployeeForm";
import useSettings from "src/hooks/useSettings";
import { PATH_DASHBOARD } from "src/routes/paths";

export default function Add_Employee() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Add Employee | Asfiya_Art_Shop">
      <Container maxWidth={themeStretch ? false : "xxl"}>
        <HeaderBreadcrumbs
          heading="Create New Employee"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "Employee", href: PATH_DASHBOARD.blog.root },
            { name: "Add Employee" },
          ]}
        />
        <AddEmployeeForm />
      </Container>
    </Page>
  );
}
