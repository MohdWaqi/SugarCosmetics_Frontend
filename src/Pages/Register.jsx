import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Img, Input, Link, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import loginImg from "../assets/login.jpg";
import loginBg from "../assets/loginBg.jpg";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { addUser, validateUser } from "../services/Api";
import { AuthContext } from "../Context/AuthContextProvider";

const Register = () => {
  const navigate = useNavigate()
  const [regData, setRegData] = useState({name:"", email:"", password:""})
  const [err, setErr] = useState("")
  const {setAuth} = useContext(AuthContext)

  const handleRegister = async(e) =>{
    e.preventDefault();
    const config = {
      "Content-type": "application/json"
    }
    try {
      
     await addUser(regData, config)
     const response = await validateUser({email:regData.email, password:regData.password}, config)
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
          <ArrowBackIcon cursor="pointer" onClick={()=>navigate("/")} fontSize="1.5rem" />
        </Box>
        <Box textAlign="center">
          <Heading fontSize="8rem" color="#D9D9D9">
            Hi!
          </Heading>
          <Heading size="md">Register Using Email</Heading>
          <Text fontSize={"1.5rem"} mt="2%" fontWeight={700} color="red">{err}</Text>
          <Box  w="50%" m="5% auto">
          <Formik
        >
          {({ errors, touched }) => (
            <form onSubmit={handleRegister}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name" color="#908E8E">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                    value={regData.name}
                    onChange={(e)=>setRegData({...regData, name: e.target.value})}
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
                    value={regData.email}
                    onChange={(e)=>setRegData({...regData, email: e.target.value})}
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
                    value={regData.password}
                    onChange={(e)=>setRegData({...regData, password: e.target.value})}
                  />
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
