import {
  Menu,
  MenuItem,
  Flex,
  Grid,
} from "@aws-amplify/ui-react";

import DashboardView from './DashboardView';
import InsightsView from './InsightsView';
import IntegrationsView from './IntegrationsView';
import SettingsView from './SettingsView';

export default function AccountPage() {
  var outletView = <DashboardView />;

  function updateOutlet(newView) {
    switch (newView) {
      case "dashboard":
        outletView = <DashboardView />;
        break;
      case "insights":
        outletView = <InsightsView />;
        break;
      case "integrations":
        outletView = <IntegrationsView />;
        break;
      case "settings":
        console.log("test");
        outletView = <SettingsView />;
        break;
    }
  }

  return (
    //<Authenticator>
     // {({ signOut }) => (
        <Grid
          templateColumns=".2fr .8fr"
          alignItems="flex-start"
          wrap="nowrap"
          margin="10px"
        >
          {/*<Button onClick={signOut}>Sign Out</Button>*/}
          <Menu>
            <MenuItem onClick={() => updateOutlet("dashboard")}>Dashboard</MenuItem>
            <MenuItem onClick={() => updateOutlet("insights")}>Insights</MenuItem>
            <MenuItem onClick={() => updateOutlet("integrations")}>Integrations</MenuItem>
            <MenuItem onClick={() => updateOutlet("settings")}>Settings</MenuItem>
          </Menu>
          <Flex>
            {outletView}
          </Flex>
        </Grid>
   //   )}
  //  </Authenticator>
  );
}
