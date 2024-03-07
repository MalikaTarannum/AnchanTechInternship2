import {
  Center,
  Container,
  FormControl,
  Stack,
  Text,
  Input,
  FormLabel,
  Checkbox,
  Button,
  FormErrorMessage,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { object, string, } from "yup";
import { Formik, Form, Field } from "formik";
import Card from "../../../components/Card";

const signinValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
});

const Signin = () => {
  return (
    <Container >
      <Center minH="100vh">
        <Card>
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signinValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
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
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="Password">Password</FormLabel>
                        <Input
                          {...field}
                          type="Password"
                          placeholder="Enetr your Password.."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <HStack justify="space-between">
                    <Checkbox>
                      <Text textStyle="p3">Remember Me</Text>
                    </Checkbox>
                    <Link to="/ForgotPassword">
                      <Text textStyle="p3" as="span" color="p.purple">
                        Forgot Password?
                      </Text>
                    </Link>
                  </HStack>
                  <Box>
                    <Button w="full" type="submit">Login</Button>
                    <Link to="/signup">
                      <Button variant="outline" mt="3" w="full">
                        Create Account
                      </Button>
                    </Link>
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

export default Signin;
