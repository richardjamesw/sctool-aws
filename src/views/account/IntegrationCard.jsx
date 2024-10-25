import { Flex, Grid, Image, Button } from "@aws-amplify/ui-react";

export default function IntegrationCard(props) {
  props.title
  props.description
  props.logo

  let connBorder = "2px solid red";
  if (props.connected)
    connBorder = "2px solid green";

  return (
    <Flex
      direction={"column"}
      wrap="nowrap"
      margin="5px"
      padding="8px"
      border={connBorder}
      borderRadius="10px"
      backgroundColor="whitesmoke"
    >
      <Grid alignItems={"center"} templateColumns={".1fr .3fr .5fr .1fr"}>
        {/* Icon with connected status */}
        <Image src={props.logo} width="3rem" height="3rem" />

        {/* Title */}
        <h3>{props.title}</h3>

        <div/>
        {/* Sync or Delete Button */}
        <Button>Sync</Button>
      </Grid>

      {/* Description */}
      <h5 style={{margin:"-10px 1px 10px 10px"}}>{props.description}</h5>

    </Flex>
  );
}
