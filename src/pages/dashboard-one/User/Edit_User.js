import { Container } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Page from "src/components/Page";
import EditUserForm from "src/components/_dashboardone/User/EditUserForm";
import useSettings from "src/hooks/useSettings";
import { PATH_DASHBOARD } from "src/routes/paths";

export default function Edit_user() {
  const { themeStretch } = useSettings();
  const location = useLocation();
  const { data } = location.state;

  return (
    <Page title="Edit User | Asfiya_Art_Shop">
      <Container maxWidth={themeStretch ? false : "xxl"}>
        <HeaderBreadcrumbs
          heading={`Edit ${data.name} details`}
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "User", href: PATH_DASHBOARD.blog.root },
            { name: "Edit User" },
          ]}
        />
        <EditUserForm data={data} />
      </Container>
    </Page>
  );
}
