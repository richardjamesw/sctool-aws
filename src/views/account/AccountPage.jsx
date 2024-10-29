import {
  Button,
  Flex,
  Grid
} from "@aws-amplify/ui-react";
import { useState } from "react";
import DashboardView from './DashboardView';
import InsightsView from './InsightsView';
import IntegrationsView from './IntegrationsView';
import SettingsView from './SettingsView';

export default function AccountPage() {
  const [outletView, setOutletView] = useState(DashboardView);

  function updateOutlet(newView) {
    switch (newView) {
      case "dashboard":
        setOutletView(DashboardView);
        break;
      case "insights":
        setOutletView(InsightsView);
        break;
      case "integrations":
        setOutletView(IntegrationsView);
        break;
      case "settings":
        console.log("test");
        setOutletView(SettingsView);
        break;
    }
  }

  return (
    //<Authenticator>
     // {({ signOut }) => (
        <Grid
          templateColumns=".2fr .8fr"
          height="80%"
          wrap="nowrap"
          margin="10px"
        >
          <Grid
            templateRows=".1fr .1fr .1fr .6fr .1fr"
            border="1px solid grey">
            <Button border="none" onClick={() => updateOutlet("dashboard")}>Dashboard</Button>
            <Button border="none" onClick={() => updateOutlet("insights")}>Insights</Button>
            <Button border="none" onClick={() => updateOutlet("integrations")}>Integrations</Button>
            <div/>
            <Button border="none" onClick={() => updateOutlet("settings")}>Settings</Button>
            {/*<Button onClick={signOut}>Sign Out</Button>*/}
          </Grid>
          <Flex margin="3rem">
            {outletView}
          </Flex>
        </Grid>
   //   )}
  //  </Authenticator>
  );
}
