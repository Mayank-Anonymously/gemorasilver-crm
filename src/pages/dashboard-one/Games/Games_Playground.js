import { Container } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Page from "src/components/Page";
import CardForm from "src/components/_dashboardone/Games/Forms/CardForm";
import useSettings from "src/hooks/useSettings";
import { PATH_DASHBOARD } from "src/routes/paths";
import PlaygroundForm from "../../../components/_dashboardone/Games/PlaygroundForm";

export default function Add_user() {
  const { themeStretch } = useSettings();
  const location = useLocation();
  const { data, time } = location.state;
  return (
    <Page title="Playground | Asfiya_Art_Shop">
      <Container maxWidth={themeStretch ? "xxl" : "xxl"}>
        <HeaderBreadcrumbs
          heading={data.gameName}
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "Games" },
            { name: "Playground" },
          ]}
        />
        {data.gameName === "SP Pana" ? (
          <CardForm data={data} time={time} />
        ) : data.gameName === "DP Pana" ? (
          <CardForm data={data} time={time} />
        ) : data.gameName === "TP Pana" ? (
          <CardForm data={data} time={time} />
        ) : data.gameName === "SP" ? (
          <CardForm data={data} time={time} />
        ) : data.gameName === "DP" ? (
          <CardForm data={data} time={time} />
        ) : data.gameName === "Jodi Family" ? (
          <CardForm data={data} time={time} />
        ) : data.gameName === "Red Jodi" ? (
          <CardForm data={data} time={time} />
        ) : data.gameName === "Red Jodi Family" ? (
          <CardForm data={data} time={time} />
        ) : data.gameName === "Cycle Pana" ? (
          <CardForm data={data} time={time} />
        ) : data.gameName === "Family Pana" ? (
          <CardForm data={data} time={time} />
        ) : (
          <PlaygroundForm data={data} time={time} />
        )}
      </Container>
    </Page>
  );
}
