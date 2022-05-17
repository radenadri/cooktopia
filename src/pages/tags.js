import React from "react";

import Layout from "@components/Layout";
import Seo from "@components/Seo";
import { Link as GatsbyLink, graphql } from "gatsby";

import setupTags from "@utils/setupTags";
import { Box, LinkBox, LinkOverlay, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import slugify from "slugify";

export const query = graphql`
  query getAllTags {
    allContentfulRecipe {
      edges {
        node {
          content {
            tags
          }
        }
      }
    }
  }
`;

const Tags = ({ data, location }) => {
  const tags = setupTags(data.allContentfulRecipe.edges);

  return (
    <Layout location={location}>
      <Seo title="Tags" />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="8">
        {tags.map((tag, idx) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });

          return (
            <LinkBox key={idx} as="article">
              <Box
                bg="gray.500"
                borderRadius="md"
                color="white"
                p="4"
                textAlign="center"
                transitionDuration="slow"
                transitionProperty="all"
                transitionTimingFunction="ease-out"
                _hover={{
                  transform: "scale(1.025, 1.025)",
                }}>
                  <LinkOverlay as={GatsbyLink} to={`/tags/${slug}`}>
                    <VStack>
                      <Text as="h6" fontSize="xl">{text}</Text>
                      <Text as="p">{value} recipes</Text>
                    </VStack>
                  </LinkOverlay>
              </Box>
            </LinkBox>
          )
        })}
      </SimpleGrid>
    </Layout>
  );
}

export default Tags;