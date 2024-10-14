import { Flex } from "@aws-amplify/ui-react";
import WelcomeView from './views/WelcomeView';
import LoginView from './views/LoginView';

export default function App() {
  return (
    <Flex
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
        alignContent="stretch"
        wrap="nowrap"
        gap="2rem"
        backgroundColor="white"
        borderRadius={"1rem"}
        padding={"4rem"}
        height="90vh"
      >
        {/* Header?*/}
        <Flex
          direction="row"
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"3rem"}>
          {/* // Left side Welcome screen*/}
          <WelcomeView />
          {/* // Right side*/}
          <LoginView/>
        </Flex>
        {/* // Below show Company description/overview*/}
        {/* // Footer*/}
      </Flex>
  );
}