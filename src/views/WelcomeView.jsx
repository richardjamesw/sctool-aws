import {
    Text,
    Heading,
    Flex,
    Image,
  } from "@aws-amplify/ui-react";

export default function WelcomeView() {
    return (
        <Flex direction="column" 
        justifyContent="center"
        alignItems="center">
            <Flex direction={"row"}>
                <Image src="logo.png" />
                <Heading>BrightLens</Heading>
                <Text>Open your eyes!</Text>
            </Flex>
        </Flex>
    );
}