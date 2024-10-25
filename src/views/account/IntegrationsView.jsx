import { Flex, Grid } from "@aws-amplify/ui-react";
import IntegrationCard from "./IntegrationCard";

export default function IntegrationsView() {
  let acConnected = false;
  return (
    <Grid
      templateRows=".25fr 1fr 1fr 1fr .25fr"
      alignItems="center"
      wrap="nowrap"
      margin="10px"
    >
      {/* Integrations & Workflows */}
      <Flex direction="column" margin={"10px 10px 40px 10px"}>
        <h2>Integrations & Workflows</h2>
        <h5 style={{margin:"-10px 1px 1px 10px"}}>Monitor your data seamlessly for the tools you use everyday.</h5>
      </Flex>

      {/* Active Campaign */}
      <IntegrationCard
        title={"Active Campaign"} 
        description={"Sync your contacts and manage marketing campaigns directly through Active Campaign."}
        connected={acConnected}
        logo="logo_ac.png" />

      {/* Gong */}
      <IntegrationCard
        title={"Gong"} 
        description={"Leverage Gong for call analysis and insights."}
        connected={acConnected}
        logo="logo_gong.webp" />
      
      {/* ChatGPT */}
      <IntegrationCard
        title={"ChatGPT"} 
        description={"Automate responses using ChatGPT's API."}
        connected={acConnected}
        logo="logo_chatgpt.svg" />
    </Grid>
  );
}
