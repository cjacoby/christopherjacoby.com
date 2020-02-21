import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styled from 'styled-components';
import { css } from "@emotion/core"

import Layout from "../components/layout"
import PostPreview from "../components/postpreview"


const PageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  // text-align: center;

  > * {
    padding: 10px;
    flex: 1 100%;
  }
`;


const PageSection = styled.article`
margin: 1em;
text-align: left;
// background: deepskyblue;
`;

// const TagAside = styled.aside`
// background: hotpink;
// `;



const BlogPage = ( {data} ) => (
    <Layout>
      <SEO title="Blog" />
      <PageWrapper>
        <header
          css={css`
            text-align: center;
          `}
        >
          <h1>Blog</h1>
        </header>
        <div>
          {/* <h2>Recent Posts</h2> */}
          <PageSection>
            {data.allSitePage.nodes.reverse().map(( {context} ) => (
              <PostPreview post={context}/>
            ))}
          </PageSection>

          {/* <h2>All Posts</h2>
          <PageSection></PageSection> */}

          {/* <TagAside>
            <h4>Tags</h4>
          </TagAside> */}
          
        </div>
      </PageWrapper>
    </Layout>
)


export default BlogPage

export const query = graphql`
query SiteMetadata {
  allSitePage(filter: {path: {glob: "/blog/*"}}) {
    nodes {
      context {
        slug
        title
        author
        date
        Tags
      }
    }
  }
}
`
