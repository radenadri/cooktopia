import { Center, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => (
  <Center minH="60px" p="4">
    <Text
      display="flex"
      justify="center"
      alignItems="center">
        Made with <Icon as={AiFillHeart} mx="1" color="pink.600" /> by <Link color="purple.600" href="https://radenadri.netlify.app" ml="1">Adriana Eka Prayudha</Link>
    </Text>
  </Center>
)

export default Footer;