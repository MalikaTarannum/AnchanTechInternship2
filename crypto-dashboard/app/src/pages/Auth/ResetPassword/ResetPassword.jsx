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
    Container,
  } from "@chakra-ui/react";
  import { object, string, ref } from "yup";
  import { Formik, Form, Field } from "formik";
  import Card from "../../../components/Card";
  
  const forgotValidationSchema = object({
    password: string().min(6, "Password must be atleast 6 characters").required("Password is required"),
    repeatPassword: string().oneOf([ref("password"), null], "Password must match").required("Repeat Password is required"),
  });
  
  const ForgotPassword = () => {
    return (
    <Container>
        <Center minH="100vh">
        <Card>
          <Text mt={4} textStyle="h1">Reset Password</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your new password
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={forgotValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>
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
                      New Repeat Password
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
  