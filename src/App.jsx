import { Flex } from "@aws-amplify/ui-react";
import WelcomeView from './views/WelcomeView';
import FooterView from './views/FooterView';
import "@aws-amplify/ui-react/styles.css";

export default function App() {
  return (
    <Flex
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="stretch"
        wrap="nowrap"
        gap="2rem"
        backgroundColor="white"
        borderRadius="1rem"
        padding="4rem"
        height="90vh"
      >
        {/* Header?*/}
        {/* // Top Center - Welcome screen*/}
        <WelcomeView />
        {/* // Below show Company description/overview*/}
        {/* // Footer*/}
        <FooterView />

      </Flex>
  );
}