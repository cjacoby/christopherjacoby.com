import React from "react"
import styled from 'styled-components'
// import { Link } from "gatsby"
import { navigate } from "gatsby"

import TagList from "./taglist"

// Utilities
import kebabCase from "lodash/kebabCase"

const EqualDivider = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  background: papayawhip;
  ${props => props.vertical && "flex-direction: column;"}

  > * {
    flex: 1;

    &:not(:first-child) {
      ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
    }
  }
`;

const Child = styled.div`
  padding: 0.25rem 0.5rem;
  background: palevioletred;
`;

const BlogPost = styled.div`
  margin: 1em auto;
  &:hover {
      cursor: pointer;
      background-color: palevioletred;
      color: white;
      border-radius: 3px;
  }
`;

const PostContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:left;
    align-content:left;
`;

const PostHeader = styled.div`
`;

const PostTitle = styled.h3`
  display: inline;
  padding: 0.25em;
  margin: auto;
`;

const PostMetadata = styled.div`

`;

const PostTags = styled.div`
  margin: auto;
  text-align: right;
`;

const PostPreview = ( { post } ) => (
    <BlogPost
        onClick={event => {
            navigate(`/blog/${kebabCase(post.slug)}`)
        }}
    >
        <EqualDivider>
            <Child><PostTitle>{post.title}</PostTitle></Child>
            <Child><PostTags><TagList tags={post.Tags} /></PostTags></Child>
        </EqualDivider>
        <PostMetadata>Posted {post.date} by {post.author}</PostMetadata>
    </BlogPost>  
)

export default PostPreview
