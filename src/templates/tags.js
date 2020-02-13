// import React from "react"
// import PropTypes from "prop-types"

// // Components
// import { Link, graphql } from "gatsby"

// const Tags = ({ pageContext, data }) => {
//   const { tag } = pageContext
//   const { edges, totalCount } = data.allMarkdownRemark
//   const tagHeader = `${totalCount} post${
//     totalCount === 1 ? "" : "s"
//   } tagged with "${tag}"`

//   return (
//     <div>
//       <h1>{tagHeader}</h1>
//       <ul>
//         {edges.map(({ node }) => {
//           const { slug } = node.fields
//           const { title } = node.frontmatter
//           return (
//             <li key={slug}>
//               <Link to={slug}>{title}</Link>
//             </li>
//           )
//         })}
//       </ul>
//       {/*
//               This links to a page that does not yet exist.
//               You'll come back to it!
//             */}
//       <Link to="/tags">All tags</Link>
//     </div>
//   )
// }

// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }

// export default Tags

// export const pageQuery = graphql`
//   query($tag: String) {
//     allMarkdownRemark(
//       limit: 2000
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `

import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const TagsPage = ({pageContext: { allTags } }) => (
    <Layout>
        <h1>Tags</h1>
        <ul>
            {allTags.map((tag) => (
            <li key={tag}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            </li>
            ))}
        </ul>
    </Layout>
)

// TagsPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }

export default TagsPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 2000) {
//       group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `