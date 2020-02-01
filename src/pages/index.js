import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '@styles';
import { Intro, Layout, SEO } from '@components';

const Container = styled.main`
  ${theme.sidePadding};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Alec Chen" description="software engineer" />
    <Container>
      <Intro></Intro>
    </Container>
  </Layout>
);

// IndexPage.propTypes = {
//   location: PropTypes.object.isRequired,
//   data: PropTypes.object.isRequired,
// };

export default IndexPage;
