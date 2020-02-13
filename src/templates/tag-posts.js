import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Layout from "../components/layout"
import PostPreview from "../components/postpreview"

const TagPosts = ({ pageContext: { tag, posts }}) => {
    console.log("tag-posts:" + tag);
    console.log(JSON.stringify(posts, null, 2));

  return (
    <Layout>
        <div>
        <h1>{tag}</h1>
            {posts.map(( post ) => (
                <PostPreview post={post} />
            ))}
        {/*
                This links to a page that does not yet exist.
                You'll come back to it!
                */}
        <Link to="/tags">All tags</Link>
        </div>
    </Layout>
  )
}

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

export default TagPosts

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