import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Img,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import loginImg from "../assets/login.jpg";
import loginBg from "../assets/loginBg.jpg";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { validateUser } from "../services/Api";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email:"", password:""});
  const [err, setErr] = useState("")
  const {setAuth} = useContext(AuthContext)

  const handleLogin=async(e)=>{
    e.preventDefault();
    const config = {
      "Content-type": "application/json"
    }
    try {
      const response = await validateUser(formData, config)
     setAuth(response.data)
     navigate("/")
    } catch (error) {
      setErr(error.response?.data?.message)
    }
  }
  return (
    <Flex h="100vh">
      <Img src={loginImg} />
      <Box flex={1} backgroundImage={`url(${loginBg})`} p="2%">
        <Box>
          <ArrowBackIcon
            onClick={() => navigate("/")}
            cursor="pointer"
            fontSize="1.5rem"
          />
        </Box>
        <Box textAlign="center">
          <Heading fontSize="8rem" color="#D9D9D9">
            Hi!
          </Heading>
          <Heading size="md">Login Using Email</Heading>
          <Text fontSize={"1.5rem"} mt="2%" fontWeight={700} color="red">{err}</Text>
          <Box w="50%" m="5% auto">
            <Formik>
              {() => (
                <form onSubmit={handleLogin}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl>
                      <FormLabel htmlFor="email" color="#908E8E">
                        Email Address
                      </FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        variant="filled"
                        value={formData.email}
                        onChange={(e)=>setFormData({...formData, email: e.target.value})}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="password" color="#908E8E">
                        Password
                      </FormLabel>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        variant="filled"
                        value = {formData.password}
                        onChange={(e)=>setFormData({...formData, password:e.target.value})}
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      bg="black"
                      color="white"
                      _hover={{}}
                      _active={{}}
                      width="full"
                    >
                      Login
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
            <Text p="5%">
              New to Sugar?{" "}
              <Link color="#FF008B" onClick={() => navigate("/register")}>
                Register
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
