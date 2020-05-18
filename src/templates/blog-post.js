import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"

import styled from 'styled-components'
import { css } from "@emotion/core"
import TagList from "../components/taglist"
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';
import SEO from "../components/seo"

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
                .use(markdown)
                .use(html)
                .processSync(PostMarkdown)
        }} />
    </Layout>
  )
}
