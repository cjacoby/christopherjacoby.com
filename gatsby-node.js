/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Utilities
const kebabCase = require(`lodash/kebabCase`)

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const BUILDENV = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "production";

const queryToTagPageMap = (queryResult) => {
  // get a dict of {
  // tagName : post 
  // }
  let queryTags = queryResult.data.allAirtable.edges.map(({ node }) => {
    if (node.data.Tags != null) {
      return node.data.Tags.map(( tag ) => {
        let result = {}
        result[tag] = [node.data];
        return result
      });
    }
  })

  let flatTags = queryTags.flat().filter((tag) => tag != null);
  // console.log("Flat Tags: " + JSON.stringify(flatTags));

  // return flatTags;
  // Result is a dict of lists, keyed by tag.
  return flatTags.reduce((acc, currentValue) => {
    // console.log("Reduce: \n" + JSON.stringify(currentValue) + ", \n" + JSON.stringify(acc) + "\n");
    for (const key in acc) {
      if (key in currentValue) {
        currentValue[key].push(acc[key]);
        currentValue[key] = currentValue[key].flat();
      } else {
        currentValue[key] = acc[key];
      }
    }
    return currentValue;
  }, {});
}


exports.onCreateNode = ({ node, getNode, actions }) => {
  // console.log(node.internal.type);
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

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

  console.log(`Creating Pages in environment ${BUILDENV}`);
  const publishStatusList = BUILDENV === "development" ? `["publish", "draft"]` : `["publish"]`;
  console.log(`publish_status: ${publishStatusList}`)

  const { createPage } = actions;
  const result = await graphql(`
  {
    allAirtable(sort: {fields: data___date}, filter: {data: {publish_status: {in: ${publishStatusList}}}}) {
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
  // console.log("Airtable Result:");
  // console.log(JSON.stringify(result, null, 4));

  // Create blog pages
  result.data.allAirtable.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${kebabCase(node.data.slug)}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        title: node.data.title,
        date: node.data.date,
        slug: node.data.slug,
        PostMarkdown: node.data.PostMarkdown,
        author: node.data.author,
        Tags: node.data.Tags
      },
    })
  })

  // Create tag pages
  const tagPageMap = queryToTagPageMap(result);
  // console.log("About to make some posts:");
  // console.log(JSON.stringify(tagPageMap, null, 4));
  // console.log("\n\n");

  for (const tag in tagPageMap) {
    console.log("Tag: " + tag);
    createPage({
      path: `/tags/${kebabCase(tag)}`,
      component: path.resolve(`./src/templates/tag-posts.js`),
      context: {
        tag: tag,
        posts: tagPageMap[tag]
      }
    })
  }

  // Finally, create a page for all the tags
  createPage({
    path: "/tags",
    component: path.resolve(`./src/templates/tags.js`),
    context: {
      allTags: Object.keys(tagPageMap)
    }
  })
}
