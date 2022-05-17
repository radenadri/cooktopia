import React from "react";

import { graphql } from "gatsby";

import { Heading } from "@chakra-ui/react";

import Layout from "@components/Layout";
import RecipeLists from "@components/RecipeLists";
import Seo from "@components/Seo";

export const query = graphql`
  query getRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {content: {tags: {eq: $tag}}}
    ) {
      edges {
        node {
          title
          id
          cookTime
          prepTime
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

const TagTemplate = ({ data, location, pageContext }) => {
  const recipes = data.allContentfulRecipe.edges;
  console.log(recipes);

  return (
    <Layout location={location}>
      <Seo title={pageContext.tag} />
      <Heading as="h2" size="2xl" mb="8">{pageContext.tag}</Heading>
      <RecipeLists recipes={recipes} />
    </Layout>
  );
}

export default TagTemplate;