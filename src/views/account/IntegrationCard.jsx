import { Flex, Image, Button } from "@aws-amplify/ui-react";

export default function IntegrationCard(props) {
  props.title
  props.description
  props.logo

  let connBorder = "2px solid red";
  if (props.connected)
    connBorder = "2px solid green";

  return (
    <Flex
      direction="column"
      wrap="nowrap"
      margin="5px"
      padding="7px"
      border={connBorder}
      borderRadius="15px"
      backgroundColor="whitesmoke"
    >
      <Flex justifyContent={"space-between"}>
        {/* Icon with connected status */}
        <Image src={props.logo} width="3rem" height="3rem" />

        {/* Sync or Delete Button */}
        <Button>Sync</Button>
      </Flex>

      {/* Title */}
      <h3 style={{margin:"0px 0px 0px 10px"}}>{props.title}</h3>

      {/* Description */}
      <h5 style={{margin:"-10px 1px 10px 10px"}}>{props.description}</h5>

    </Flex>
  );
}
