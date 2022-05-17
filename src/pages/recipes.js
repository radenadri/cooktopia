import React from "react";

import Layout from "@components/Layout";
import Seo from "@components/Seo";
import AllRecipes from "@components/AllRecipes";

const Recipes = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="All Recipes" />
      <AllRecipes />
    </Layout>
  );
}

export default Recipes;