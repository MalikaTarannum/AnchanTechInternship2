import {
  Center,
  Container,
  FormControl,
  Stack,
  Text,
  Input,
  FormLabel,
  Flex,
  Checkbox,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { object, string, ref } from 'yup';
import { Formik, Form, Field, } from "formik";
import Card from "../../../components/Card";

const signupValidationSchema = object({
    name: string().required("Name is required"),
    surname: string().required("Surname is required"),
    email: string().email("Email is invalid").required("Email is required"),
    password: string().min(6, "Password must be atleast 6 characters").required("Password is required"),
    repeatPassword: string().oneOf([ref("password"), null], "Password must match").required("Repeat Password is required"),
});

const Signup = () => {
  return (
    <Container m="30px auto">
      <Center minH="100vh">
        <Card>
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signupValidationSchema}
          >
            {() => (
                <Form>
                <Stack mt="10" spacing={6}>
                  <Flex gap="4">
                  <Field name="name">
                    {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                               {...field}
                              name="name" placeholder="Enetr your name.." />
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                    )}
                  </Field>
                  <Field name="Surname">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)} >
                      <FormLabel htmlFor="Surname">SurName</FormLabel>
                      <Input 
                      {...field}
                      type="Surname" placeholder="Enetr your Surname.." />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                  </Field>
                  </Flex>
                  <Field name="email">
                  {({ field, meta }) => (
                  <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor="Email">Email</FormLabel>
                    <Input
                    {...field}
                     type="Email" placeholder="Enetr your Email.." />
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
                     type="Password" placeholder="Enetr your Password.." />
                     <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                  )}
                  </Field>
                  <Field name="repeatPassword">
                  {({ field, meta }) => (
                  <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor="repeatPassword">
                      Repeat Password
                    </FormLabel>
                    <Input
                        {...field}
                      type="repeatPassword"
                      placeholder="Enetr Repeat Password.."
                    />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                  )}
                  </Field>
                  <Checkbox>
                    <Text textStyle="p3">
                      I agree with
                      <Text as="span" color="p.purple">
                        Terms & Conditions
                      </Text>
                    </Text>
                  </Checkbox>
                  <Button type="submit">Create Account</Button>
                  <Text textStyle="p3" color="black.60" textAlign="center">
                    Already have an acount?
                    <Link to="/Signin">
                      <Text as="span" color="p.purple">
                        Login
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
