import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
const IndexPage = () => (
  <Layout>
    <SEO title="Alec Chen | Software Engineer" />
    <h1>Hi I'm Alec</h1>
    <p>Software Developer in Vancouver, B.C.</p>
  </Layout>
);

export default IndexPage;
