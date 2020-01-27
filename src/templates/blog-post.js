import React from "react"
// import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';

// const Template

export default ({ pageContext: { postTitle, postContent, postAuthor, postDate} }) => {
  return (
    <Layout>
      <div>
        <h1>{postTitle}</h1>
        <p>by {postAuthor} on {" "}
            <span
                css={css`
                  color: #bbb;
                `}
            >
            {postDate}
            </span>
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{
            __html: unified()
                .use(markdown)
                .use(html)
                .processSync(postContent)
        }} />
    </Layout>
  )
}

// export const query = graphql`
// query BlogPostFromAirtable {
//     __typename
//     sitePage {
//       context {
//         postTitle
//         postAuthor
//         postContent
//         postSlug
//       }
//     }
//   }  
// `

// query($slug: String!) {
//     markdownRemark(frontmatter: { content: { eq: $PostMarkdown } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }


// .frontmatter.title
// {/* <p>{JSON.stringify(post)}</p>  */}
// {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
// //   const post = data;  //.markdownRemark