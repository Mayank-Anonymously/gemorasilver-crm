import { Container } from "@material-ui/core";
import React from "react";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Page from "src/components/Page";
import AddUserForm from "src/components/_dashboardone/User/AddUserForm";
import useSettings from "src/hooks/useSettings";
import { PATH_DASHBOARD } from "src/routes/paths";

export default function Add_user() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Add User | Asfiya_Art_Shop">
      <Container maxWidth={themeStretch ? false : "xxl"}>
        <HeaderBreadcrumbs
          heading="Create New User"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "User" },
            { name: "Add User" },
          ]}
        />
        <AddUserForm />
      </Container>
    </Page>
  );
}
