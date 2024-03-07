import { Center, Icon, VStack, Text, Box, Button, Container } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { BsPatchCheckFill } from 'react-icons/bs';
import { Link } from "react-router-dom";


const RegisterSuccess = () => {
  return (
    <Container>
        <Center minH="100vh">
        <Card
         p= {{
            base: "4",
            md: "10",
         }}
         showCard={true}
         >
            <VStack spacing={6}>
                <Icon as={BsPatchCheckFill} color="p.purple" boxSize="48px" />
                <Text color="p.black" fontWeight="medium" textStyle="h4">Successfully Registered
                </Text>
                <Text textStyle="p2" color="black.60" textAlign="center">
                    Hurry! You have successfully created your account. Enter the App to explore it's all features.
                </Text>
                <Box w="full">
                    <Link to="/signin">
                    <Button w="full">Enter the app</Button>
                    </Link>
                </Box>
            </VStack>
        </Card>
    </Center>
    </Container>
  )
}

export default RegisterSuccess;
