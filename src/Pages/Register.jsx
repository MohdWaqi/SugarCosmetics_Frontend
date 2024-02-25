import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Img, Input, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import loginImg from "../assets/login.jpg";
import loginBg from "../assets/loginBg.jpg";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  return (
    <Flex h="100vh">
      <Img src={loginImg} />
      <Box flex={1} backgroundImage={`url(${loginBg})`} p="2%">
        <Box>
          <ArrowBackIcon cursor="pointer" onClick={()=>navigate("/")} fontSize="1.5rem" />
        </Box>
        <Box textAlign="center">
          <Heading fontSize="8rem" color="#D9D9D9">
            Hi!
          </Heading>
          <Heading size="md">Register Using Email</Heading>
          <Box  w="50%" m="5% auto">
          <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name" color="#908E8E">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="regemail" color="#908E8E">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="regemail"
                    name="regemail"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="regpassword" color="#908E8E">Password</FormLabel>
                  <Field
                    as={Input}
                    id="regpassword"
                    name="regpassword"
                    type="password"
                    variant="filled"

                    validate={(value) => {
                      let error;
                    
                      if (value.length < 6) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" bg="black" color="white" _hover={{}} _active={{}} width="full" >
                  Register
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
        <Text p="5%">Already have an Account? <Link color="#FF008B" onClick={()=>navigate("/login")}>Login</Link></Text>
        </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Register;
