import { Grid } from "@aws-amplify/ui-react";
import FooterView from "./FooterView";
import { Outlet } from "react-router-dom";

export default function LayoutPage() {
  return (
    <Grid
      templateRows="85% 15%"
      backgroundColor="white"
      alignItems="center"
      wrap="nowrap"
      borderRadius="15px"
      minWidth="300px"
      height="auto"
      minHeight="96.5vh"
    >
      {/* Header?*/}

      {/* Main Content */}
      <Outlet />

      {/* Header?*/}
      <FooterView />
    </Grid>
  );
}
