import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link as GatsbyLink } from "gatsby";

import Layout from "@components/Layout";
import Seo from "@components/Seo";
import { AspectRatio, Box, Heading, Image, Link, Stack, VStack, Text, HStack, Icon } from "@chakra-ui/react";
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs";
import slugify from "slugify";

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

const RecipeTemplate = ({ location, data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipe;
  const pathToImage = getImage(image);
  const { tags, instructions, ingredients, tools } = content;

  return (
    <Layout location={location}>
      <Seo title={title} description={description} />
      <VStack align="start" spacing="16">
        <Stack w="full" spacing="8" direction={{ base: "column", lg: "row" }}>
          <AspectRatio w="100%" maxW="500px" ratio={1}>
            <Image
              as={GatsbyImage}
              image={pathToImage}
              alt={title}
              rounded="md"
              objectFit="cover" />
          </AspectRatio>
          <VStack align="start" spacing="8" as="article">
            <Heading as="h1" size="3xl">{title}</Heading>
            <Text as="p" fontSize="xl" lineHeight="taller">{description}</Text>
            <HStack w="full" justify="space-evenly">
              <VStack>
                <Icon
                  as={BsClock}
                  w="7"
                  h="7" />
                <Text as="h6" fontSize="lg">Prep Time</Text>
                <Text as="span" fontSize="lg" color="gray.500">{prepTime} min.</Text>
              </VStack>
              <VStack>
                <Icon
                  as={BsClockHistory}
                  w="7"
                  h="7" />
                <Text as="h6" fontSize="lg">Cook Time</Text>
                <Text as="span" fontSize="lg" color="gray.500">{cookTime} min.</Text>
              </VStack>
              <VStack>
                <Icon
                  as={BsPeople}
                  w="7"
                  h="7" />
                <Text as="h6" fontSize="lg">Serving</Text>
                <Text as="span" fontSize="lg" color="gray.500">{servings}</Text>
              </VStack>
            </HStack>
            <HStack>
              <Text as="h6" fontSize="lg">Tags : </Text>
              <HStack spacing="3">
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })

                  return (
                    <Link
                      as={GatsbyLink}
                      px="2"
                      py="1"
                      bg="purple.500"
                      color="white"
                      rounded="md"
                      fontSize="sm"
                      _hover={{
                        bg: "purple.400",
                      }}
                      to={`/tags/${slug}`}
                      key={index}
                    >
                      {tag}
                    </Link>
                  )
                })}
              </HStack>
            </HStack>
          </VStack>
        </Stack>
        <Stack
          spacing="16"
          w="full"
          direction={{ base: "column", lg: "row" }}>
          <VStack
            as="article"
            alignItems="stretch"
            spacing="8">
              <Heading as="h4" fontSize="3xl">Instructions</Heading>
              <VStack alignItems="start" spacing="8" maxW="container.md">
                {instructions.map((instruction, idx) => {
                  return (
                    <VStack align="start" key={idx}>
                      <HStack gap="1.5" alignItems="center">
                        <Text
                          as="span"
                          color="purple.500"
                          fontSize="2xl"
                          fontWeight="bold"
                          textTransform="uppercase"
                          w="auto">
                          Step {idx + 1}
                        </Text>
                        <Box bg="gray.300" h="1px" />
                      </HStack>
                      <Text as="p" fontSize="xl" lineHeight="taller" key={idx}>{instruction}</Text>
                    </VStack>
                  )
                })}
              </VStack>
          </VStack>
          <VStack
            as="article"
            alignItems="start"
            flex="1"
            spacing="16">
            <VStack
              alignItems="start"
              spacing="8">
              <Heading as="h4" fontSize="3xl">Ingredients</Heading>
              {ingredients.map((ingredient, idx) => {
                return (
                  <VStack align="stretch" key={idx}>
                    <Text as="p" fontSize="xl" key={idx}>{ingredient}</Text>
                  </VStack>
                )
              })}
            </VStack>
            <VStack
              alignItems="stretch"
              spacing="8">
              <Heading as="h4" fontSize="3xl">Tools</Heading>
              {tools.map((tool, idx) => {
                return (
                  <VStack align="stretch" key={idx}>
                    <Text as="p" fontSize="xl" color="purple.500" key={idx}>{tool}</Text>
                  </VStack>
                )
              })}
            </VStack>
          </VStack>
        </Stack>
      </VStack>
    </Layout>
  );
}

export default RecipeTemplate;