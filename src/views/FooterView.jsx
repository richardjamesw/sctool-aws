import { Flex, Button, Text, ButtonGroup } from "@aws-amplify/ui-react";

export default function FooterView() {
  return (
    <Flex direction="column"
      >

        {/* Buttons: Privacy Policy, About, Contact */}
        <ButtonGroup size="small" direction="row" alignSelf="center" border="none">
            <Button border="none">Policies</Button>
            <Button border="none">About</Button>
            <Button border="none">Contact</Button>
        </ButtonGroup>
        {/* Copyright */}
        <Text>Copyright © 2024, BrightLens Development Group</Text>
        {/* Social Links */}

      </Flex>
  );
}