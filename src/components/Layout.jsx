import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout = ({ location, children, isFull }) => {
  const pathName = location.pathname;
  const baseHeight = isFull ? '100%' : 'auto';

  return (
    <Flex
      flexDir="column"
      maxW="1280px"
      h="100%"
      mx="auto"
      px="4"
      data-location={pathName}>
      <Header />
      <Box
        flex="2"
        p="4"
        h={baseHeight}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
