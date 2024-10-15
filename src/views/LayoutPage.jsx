import { Grid } from "@aws-amplify/ui-react";
import FooterView from './FooterView';
import { Outlet } from "react-router-dom";

export default function LayoutPage() {
    return (
        <Grid
            templateRows="85% 15%"
            alignItems="center"
            wrap="nowrap"
            gap="2rem"
            backgroundColor="white"
            borderRadius="1rem"
            padding="4rem"
            height="87vh"
          >
            {/* Header?*/}
            
            
            {/* Main Content */}
            <Outlet/>

            {/* Header?*/}
            <FooterView />
          </Grid>
      );
}