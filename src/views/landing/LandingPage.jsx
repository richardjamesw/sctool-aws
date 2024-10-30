import { Grid } from "@aws-amplify/ui-react";
import WelcomeView from "./WelcomeView";

export default function LandingPage() {
  return (
    <Grid
      templateRows="50% 50%"
      alignItems="center"
      wrap="nowrap"
      margin="10px"
    >
      {/* // Top Center - Welcome screen*/}
      <WelcomeView />

      {/* // Below show Company description/overview*/}
    </Grid>
  );
}
