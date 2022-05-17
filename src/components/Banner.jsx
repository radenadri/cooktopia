import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
  query Bio {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const Banner = () => {

  const { site: { siteMetadata: { title, description } } } = useStaticQuery(query);

  return (
    <Box
      as="section"
      h="40vh"
      position="relative">
        <StaticImage
          className="banner-image"
          alt="img-cover"
          src="../assets/images/cover.jpg"
          placeholder="blurred"
          layout="fullWidth"
        />
        <Flex
          justify="center"
          align="center"
          position="absolute"
          top="0"
          left="0"
          h="100%"
          w="100%"
          bg="rgba(0,0,0,0.5)"
          rounded="lg">
            <VStack spacing="4" color="white" textAlign="center">
              <Heading as="h1" fontSize={{
                base: "5xl",
                md: "6xl",
              }} fontWeight="bold" letterSpacing="wide">
                { title }
              </Heading>
              <Text as="h4" fontSize="2xl">
                { description }
              </Text>
            </VStack>
        </Flex>
    </Box>
  )
}

export default Banner;