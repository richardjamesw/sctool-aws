import {
  Menu,
  MenuItem,
  Flex,
  Grid,
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
          wrap="nowrap"
          margin="10px"
        >
          <Menu>
            <MenuItem onClick={() => updateOutlet("dashboard")}>Dashboard</MenuItem>
            <MenuItem onClick={() => updateOutlet("insights")}>Insights</MenuItem>
            <MenuItem onClick={() => updateOutlet("integrations")}>Integrations</MenuItem>
            <MenuItem onClick={() => updateOutlet("settings")}>Settings</MenuItem>
            {/*<MenuItem onClick={signOut}>Sign Out</MenuItem>*/}
          </Menu>
          <Flex>
            {outletView}
          </Flex>
        </Grid>
   //   )}
  //  </Authenticator>
  );
}
