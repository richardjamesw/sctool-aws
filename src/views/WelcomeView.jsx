import {
    Heading,
    Flex,
    Image,
  } from "@aws-amplify/ui-react";

export default function WelcomeView() {
    return (
        <Flex direction="column" 
            justifyContent="center"
            alignItems="center">
            <Flex direction="row">
                <Image src="logo.png" margin="0 2em 0 0" width="80px" height="80px"/>
                <Flex direction="column">
                    <Heading level="4" color="#27AE6B">brightlens.io</Heading>
                    <Heading level="6">Open your eyes!</Heading>
                </Flex>
            </Flex>
        </Flex>
    );
}