import React from "react"
import Layout from "../components/layout"

import styled from 'styled-components'
import { css } from "@emotion/core"
import TagList from "../components/taglist"
import unified from 'unified';
import markdown from 'remark-parse';
// import html from 'remark-html';
import html from 'rehype-stringify';
import toc from 'remark-toc';
import SEO from "../components/seo"

import rehypePrism from "rehype-prism";
import remark2rehype from "remark-rehype";

const PostHeader = styled.div`
  // display: grid;
  // grid-template-columns: 70% auto;
`;

const PostTitle = styled.h1`
`;

const PostHeaderContainer = styled.div`
  margin: .5em auto;
  font-size: .8em;
  // display: flex;
  // justify-self: end;
  // display: grid;
  // grid-template-rows: auto auto;
  // justify-items: stretch;
`;


export default ({ pageContext: { title, PostMarkdown, author, date, Tags} }) => {
  return (
    <Layout>
      <SEO title={title} />
      <div>
        <PostHeader>
          <PostTitle>{title}</PostTitle>
          <PostHeaderContainer>
            by {author} on {" "}<span
                  css={css`
                    color: #bbb;
                  `}
              >
                {date}
              </span>
            | <TagList tags={Tags} clickable={true}/>
          </PostHeaderContainer>
        </PostHeader>
      </div>
      <hr css={css`
        margin-top: 1rem;
      `}
      />
      <div
        dangerouslySetInnerHTML={{
            __html: unified()
                // Transform markdown into a markdown syntax tree
                .use(markdown)
                .use(toc)
                // Transform markdown syntax tree to html syntax tree
                .use(remark2rehype)
                // Traverse html syntax tree to apply code highlighting to content within code tags
                .use(rehypePrism)
                // Transform html syntax tree to string to send to the client
                .use(html)
                // Apply all this to the PostMarkdown data
                .processSync(PostMarkdown)
        }} />
    </Layout>
  )
}
