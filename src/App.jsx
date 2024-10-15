import { Grid } from "@aws-amplify/ui-react";
import WelcomeView from './views/WelcomeView';
import FooterView from './views/FooterView';
import "@aws-amplify/ui-react/styles.css";

export default function App() {
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
        
        {/* // Top Center - Welcome screen*/}
        <WelcomeView />
        {/* // Below show Company description/overview*/}

        {/* // Footer*/}
        <FooterView />

      </Grid>
  );
}