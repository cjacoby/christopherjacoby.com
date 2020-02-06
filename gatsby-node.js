/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(node.internal.type);
//   const { createNodeField } = actions
//   if (node.isCreatedByStatefulCreatePages) {
//       console.log("Special page");
//       console.log(node.context)
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  console.log("Creating Pages");
  const { createPage } = boundActionCreators;
  const result = await graphql(`
  {
    allAirtable(sort: {fields: data___date}, filter: {data: {publish_status: {eq: "publish"}}}) {
      edges {
        node {
          data {
            PostMarkdown
            author
            date
            slug
            title
            Tags
          }
        }
      }
    }
  }
`)
  console.log("Airtable Result:");
  console.log(JSON.stringify(result, null, 4))
  result.data.allAirtable.edges.forEach(({ node }) => {
    createPage({
      path: node.data.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        postTitle: node.data.title,
        postDate: node.data.date,
        postSlug: node.data.slug,
        postContent: node.data.PostMarkdown,
        postAuthor: node.data.author,
        postTags: node.data.Tags
      },
    })
  })
}
