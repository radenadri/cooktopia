import React from "react"

import Layout from "@components/Layout";
import Seo from "@components/Seo";
import Banner from "@components/Banner";
import AllRecipes from "@components/AllRecipes";

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Homepage" />
      <Banner />
      <AllRecipes />
    </Layout>
  );
}

export default Home;