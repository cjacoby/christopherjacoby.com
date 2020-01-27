import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


const BlogPage = ( {data} ) => (
    <Layout>
      <SEO title="Blog" />
      <div>
        <h1>
          Blog
        </h1>

      <h4>Posts</h4>
      <p>
        {data.allSitePage.nodes.map(( {context} ) => (
          <div>
            <Link to={`/` + context.postSlug}>{context.postTitle}</Link>
            <p>Posted {context.postDate} by {context.postAuthor}</p>
          </div>
        ))}
      </p>
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
      }
    }
  }
}
`

// {JSON.stringify(data.allAirtable.edges, null, 4)}

// ({ node }) => (
//  <div>
//  {node.context.postTitle}
// </div>
