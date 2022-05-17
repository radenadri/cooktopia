import React from "react";
import PropTypes from "prop-types";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AspectRatio, Box, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import slugify from "slugify";
import { Link as GatsbyLink } from "gatsby";

const RecipeCard = ({ recipe }) => {
  const { title, image, prepTime, cookTime } = recipe;
  const pathToImage = getImage(image);
  const slug = slugify(title, { lower: true });

  return (
    <LinkBox as="article">
      <Box
      transitionDuration="slow"
      transitionProperty="all"
      transitionTimingFunction="ease-out"
      _hover={{
        transform: "scale(1.025, 1.025)",
      }}>
        <AspectRatio ratio={16 / 9}>
          <Image
            as={GatsbyImage}
            image={pathToImage}
            alt={title}
            rounded="md"
            objectFit="cover" />
        </AspectRatio>
        <LinkOverlay as={GatsbyLink} to={`/${slug}`}>
          <Text
            as="h5"
            fontFamily="Playfair Display"
            fontSize="xl"
            fontWeight="semibold"
            mt="2">{title}</Text>
          <Text
            as="p"
            color="gray.500"
            mt="1">
            Prep: {prepTime} min. | Cook : {cookTime} min.
          </Text>
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default RecipeCard;