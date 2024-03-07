import {
  Center,
  FormControl,
  Stack,
  Text,
  Input,
  FormLabel,
  Button,
  FormErrorMessage,
  Box,
  Icon,
  Container,
} from "@chakra-ui/react";
import { object, string, } from "yup";
import { Formik, Form, Field } from "formik";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const forgotValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = () => {
  return (
  <Container>
      <Center minH="100vh">
      <Card>
        <Link to="/signin">
        <Icon as={AiOutlineArrowLeft} boxSize={6} />
        </Link>
        <Text mt={4} textStyle="h1">Forgot Password</Text>
        <Text textStyle="p2" color="black.60" mt="4">
          Enter your email address for which account you want to reset your
          password
        </Text>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={forgotValidationSchema}
        >
          {() => (
            <Form>
              <Stack mt="8" spacing={6}>
                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="Email">Email</FormLabel>
                      <Input
                        {...field}
                        type="Email"
                        placeholder="Enetr your Email.."
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Box>
                  <Button w="full" type="submit">
                    Reset Password
                  </Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Center>
  </Container>
  );
};

export default ForgotPassword;
