import { Center, Icon, VStack, Text, Box, Button, Container } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { BsPatchCheckFill } from 'react-icons/bs';
import { Link } from "react-router-dom";


const ResetPasswordSuccess = () => {
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
                <Icon as={BsPatchCheckFill} color="green" boxSize="48px" />
                <Text color="p.black" fontWeight="medium" textStyle="h4">
                    Password Reset Successfully 
                </Text>
                <Text textStyle="p2" color="black.60" textAlign="center">
                   Now you can access your account.
                </Text>
                <Box w="full">
                    <Link to="/signin">
                      <Button w="full">Signin</Button>
                    </Link>
                </Box>
            </VStack>
        </Card>
    </Center>
   </Container>
  )
}

export default ResetPasswordSuccess;
