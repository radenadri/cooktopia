import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import setupTags from "@utils/setupTags";
import slugify from "slugify";

const TagLists = ({ recipes }) => {
  const tags = setupTags(recipes);

  return (
    <Box width="200px">
      <Heading
        as="h4"
        fontSize="3xl">
        Recipes
      </Heading>
      <UnorderedList
        listStyleType="none"
        m="0"
        mt="8"
        spacing="2">
        {tags.map((tag, idx) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });

          return (
            <ListItem>
              <Link
                as={GatsbyLink}
                color="gray.500"
                fontWeight="normal"
                fontSize="xl"
                to={`/tags/${slug}`}
                key={idx}>
                {text} ({value})
              </Link>
            </ListItem>
          )
        })}
      </UnorderedList>
    </Box>
  )
}

TagLists.propTypes = {
  recipes: PropTypes.array.isRequired,
}

export default TagLists;