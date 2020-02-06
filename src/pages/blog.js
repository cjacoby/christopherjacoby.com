import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import TagList from "../components/taglist"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Context } from "@emotion/stylis"

const BlogPost = styled.div`
  margin: 1em auto;
`;


const BlogPage = ( {data} ) => (
    <Layout>
      <SEO title="Blog" />
      <div>
        <h1>
          Blog
        </h1>

        <h4>Posts</h4>
        {data.allSitePage.nodes.map(( {context} ) => (
          <BlogPost>
            <Link to={`/` + context.postSlug}>{context.postTitle}</Link>
            <div>Posted {context.postDate} by {context.postAuthor}</div>
            <TagList tags={context.postTags} />
          </BlogPost>
        ))}
      </div>
    </Layout>
)


export default BlogPage

export const query = graphql`
query SiteMetadata {
  allSitePage(filter: {context: {postSlug: {}}, isCreatedByStatefulCreatePages: {eq: false}}) {
    nodes {
      context {
        postSlug
        postTitle
        postAuthor
        postDate
        postTags
      }
    }
  }
}
`
