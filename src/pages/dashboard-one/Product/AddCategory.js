import { useEffect } from "react";
import { paramCase } from "change-case";
import { useParams, useLocation } from "react-router-dom";
// material
import { Container } from "@material-ui/core";
// redux
import { useDispatch, useSelector } from "../../../redux/store";
import { getProducts } from "../../../redux/slices/product";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import HeaderBreadcrumbs from "../../../components/HeaderBreadcrumbs";
import CategoryNewForm from "../../../components/_dashboardone/e-commerce/CategoryNewForm";

// ----------------------------------------------------------------------

export default function CreateCategory() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Ecommerce: Create a new product | Asfiya_Art_Shop">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading={"Create a new Category"}
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            {
              name: "E-Commerce",
            },
            { name: "New Category" },
          ]}
        />

        <CategoryNewForm />
      </Container>
    </Page>
  );
}
