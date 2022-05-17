import React from "react";

import Layout from "@components/Layout";
import Seo from "@components/Seo";
import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as GatsbyLink, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const query = graphql`
  query getBioForAbout {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const About = ({ data, location }) => {
  const { title } = data.site.siteMetadata;

  return (
    <Layout location={location}>
      <Seo title="About" />
      <Stack maxH={{ md: "400px" }} direction={{ base: "column", md: "row" }} gap="8">
        <VStack align="start" justify="start" w={{ base: "full", md: "50%" }} spacing="8">
          <Heading as="h1" fontSize={{
            base: "3xl",
            md: "4xl",
          }} fontWeight="bold" letterSpacing="wide">
            Welcome to {title}!
          </Heading>
          <VStack align="start" justify="start" spacing="4">
            <Text as="p" fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie ultricies velit vel tristique. Praesent rutrum turpis ac ipsum auctor elementum.
            </Text>
            <Text as="p" fontSize="xl">
              Integer porta nibh nisi, at dictum velit dictum quis. Suspendisse rutrum neque tortor, ut consectetur neque elementum a.
            </Text>
            <Text as="p" fontSize="xl">
              Suspendisse potenti. Donec a nisi ac eros congue posuere. In orci lectus, tempor eget varius at, lacinia a ex.
            </Text>
          </VStack>
          <Button
            as={GatsbyLink}
            fontFamily="Source Sans Pro"
            size="lg"
            to="mailto:radenadriep@gmail.com"
            variant="primary">Reach me out</Button>
        </VStack>
        <Box w={{ base: "full", md: "50%" }}>
          <StaticImage
            alt="about-img"
            src="../assets/images/about-img.jpg"
            placeholder="blurred"
            layout="fullWidth"
            imgStyle={{ borderRadius: ".75rem" }}
            style={{ maxHeight: "100%" }}
          />
        </Box>
      </Stack>
    </Layout>
  );
}

export default About;
