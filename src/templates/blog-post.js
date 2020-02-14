import React from "react"
// import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import TagList from "../components/taglist"
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';


export default ({ pageContext: { title, PostMarkdown, author, date, Tags} }) => {
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <p>by {author} on {" "}
            <span
                css={css`
                  color: #bbb;
                `}
            >
            {date}
            </span>
        </p>
        <TagList tags={Tags} clickable={true}/>
      </div>
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
