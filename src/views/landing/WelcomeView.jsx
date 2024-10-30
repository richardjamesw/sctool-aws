import { Heading, Flex, Image, Button } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

export default function WelcomeView() {
  return (
    <Flex direction="column" alignSelf="center" alignItems="center">
      <Flex direction="row" alignItems="center" margin="0 5.5rem 0 0">
        <Image src="logo.png" width="5rem" height="5rem" />
        <Heading level="4" color="#27AE6B">
          brightlens.io
        </Heading>
      </Flex>
      <Heading textAlign="center" level="6">
        Open your eyes! Sales, marketing, success!
      </Heading>
      <Link to="/account">
        <Button>account</Button>
      </Link>
    </Flex>
  );
}
