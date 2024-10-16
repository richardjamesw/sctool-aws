import { Grid } from "@aws-amplify/ui-react";
import FooterView from './FooterView';
import { Outlet } from "react-router-dom";

export default function LayoutPage() {
    return (
        <Grid
            templateRows="85% 15%"
            backgroundColor="white"
            alignItems="center"
            wrap="nowrap"
            gap="1rem" padding="5px 5px 25px 5px"
            borderRadius="15px"
            height="96vh"
            minWidth="300px"
          >
            {/* Header?*/}
            
            
            {/* Main Content */}
            <Outlet/>

            {/* Header?*/}
            <FooterView />
          </Grid>
      );
}