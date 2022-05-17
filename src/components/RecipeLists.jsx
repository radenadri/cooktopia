import React from "react";
import PropTypes from "prop-types";
import { SimpleGrid } from "@chakra-ui/react";

import RecipeCard from "@components/RecipeCard";

const RecipeLists = ({ recipes }) => {
  return (
    <SimpleGrid
      flex="1"
      columns={{ base: 1, md: 2, lg: 3 }}
      gap="8">
      {recipes.map(recipe => <RecipeCard key={recipe.node.id} recipe={recipe.node} /> )}
    </SimpleGrid>
  )
}

RecipeLists.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipeLists;