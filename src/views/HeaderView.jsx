import { Flex, Button, Image } from "@aws-amplify/ui-react";

export default function HeaderView() {
  return (
    <Flex direction="row" justifyContent={"space-between"} margin="5px 15px 5px 15px">
        <Flex alignItems={"center"}>
            <Image src="logo.png" width="2rem" height="2rem" />
            <Button border="none">Home</Button>
        </Flex>
        <Button border="none">Sign Out</Button>
    </Flex>
  );
}