import { Center, Icon, VStack, Text, Box, Button, Container } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { MdEmail } from 'react-icons/md';


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
                <Icon as={MdEmail} color="p.purple" boxSize="48px" />
                <Text color="p.black" fontWeight="medium" textStyle="h4">Email Verification</Text>
                <Text textStyle="p2" color="black.60" textAlign="center">
                    We have sent you an email verification 
                    <Box as="b" color="p.black">
                        mtmalikatarannum@gmail.com
                    </Box>
                    If you do not receive it, click the button below.
                </Text>
                <Button w="full" variant="outline">Re-Send Email</Button>
            </VStack>
        </Card>
    </Center>
    </Container>
  )
}

export default RegisterEmailVerify;
