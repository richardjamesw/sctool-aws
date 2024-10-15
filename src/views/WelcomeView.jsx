import {
    Heading,
    Flex,
    Image,
    Button
  } from "@aws-amplify/ui-react";

export default function WelcomeView() {
    return (
        <Flex direction="column"
            alignItems="center" margin="0 8em 0 0">
            <Flex direction="row">
                <Image src="logo.png" margin="0 2em 0 0" width="80px" height="80px"/>
                <Flex direction="column">
                    <Heading level="4" color="#27AE6B">brightlens.io</Heading>
                    <Heading level="6">Open your eyes! Sales, marketing, success!</Heading>
                    <Button alignSelf="center" width="100px">account</Button>
                </Flex>
            </Flex>
        </Flex>
    );
}