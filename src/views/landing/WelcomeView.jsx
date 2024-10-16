import {
    Heading,
    Flex,
    Image,
    Button
} from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

export default function WelcomeView() {
    return (
        <Flex direction="column"
            alignItems="center" margin="0px 100px 0px 0px">
            <Flex direction="row" alignItems="center" >
                <Image src="logo.png" margin="10px 10px 10px 10px" width="80px" height="80px"/>
                <Flex direction="column" alignItems="center">
                    <Heading level="4" color="#27AE6B">brightlens.io</Heading>
                    <Heading textAlign={"center"} level="6">Open your eyes! Sales, marketing, success!</Heading>
                    
                    <Link to="/account">
                        <Button>account</Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
}