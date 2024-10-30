import { Grid, Flex } from "@aws-amplify/ui-react";
import FooterView from "./FooterView";
import { Outlet } from "react-router-dom";
import HeaderView from "./HeaderView";

export default function LayoutPage() {
  return (
    <Grid
      templateRows="10% 80% 15%"
      backgroundColor="white"
      wrap="nowrap"
      borderRadius="15px"
      minWidth="300px"
      height="auto"
      minHeight="96.5vh"
    >
      {/* Header?*/}
      <HeaderView/>

      {/* Main Content */}
      <Outlet />

      {/* Header?*/}
      <FooterView />
    </Grid>
  );
}
