import { Stack } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import TagLists from '@components/TagLists';
import RecipeLists from '@components/RecipeLists';

const query = graphql`
  query AllRecipes {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      edges {
        node {
          id
          title
          cookTime
          prepTime
          content {
            tags
          }
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.edges;

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      py="8"
      gap={{ base: 8, md: 1}}>
        <TagLists recipes={recipes} />
        <RecipeLists recipes={recipes} />
    </Stack>
  )
}

export default AllRecipes;