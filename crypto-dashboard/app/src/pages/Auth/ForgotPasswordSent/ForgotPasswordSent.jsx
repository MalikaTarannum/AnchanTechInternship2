import { Center, Icon, VStack, Text, Box, Button, Container } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { BsPatchCheckFill } from 'react-icons/bs';


const RegisterEmailVerify = () => {
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
                    Successfully Sent
                </Text>
                <Text textStyle="p2" color="black.60" textAlign="center">
                    We have sent instructions on how to reset your password to
                    <Box as="b" color="p.black">
                        mtmalikatarannum@gmail.com
                    </Box>
                   Please follow the instructions from the email. We have sent you an email verification to
                </Text>
            </VStack>
        </Card>
    </Center>
   </Container>
  )
}

export default RegisterEmailVerify;
