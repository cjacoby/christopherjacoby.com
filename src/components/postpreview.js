import React from "react"
import styled from 'styled-components'
// import { Link } from "gatsby"
import { navigate } from "gatsby"

import TagList from "./taglist"

// Utilities
import kebabCase from "lodash/kebabCase"

const Child = styled.div`
  // padding: 0.25rem 0.5rem;
  // background: palevioletred;
`;

const BlogPost = styled.div`
  margin: 1em auto;
  padding: 0.25em 0.5em;
  &:hover {
      cursor: pointer;
      background-color: rgba(216, 112, 99, 0.5);  // "#D87093? / palevioletred
      color: white;
      border-radius: .5em;
  }
`;

const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 70% auto;
`;

const PostTitle = styled.h3`
  display: inline;
  margin: auto;
`;

const PostMetadata = styled.div`
  font-size: .8rem;
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
        <PostContainer>
            <Child><PostTitle>{post.title}</PostTitle></Child>
            <Child><PostTags><TagList tags={post.Tags} /></PostTags></Child>
        </PostContainer>
        <PostMetadata>Posted {post.date} by {post.author}</PostMetadata>
    </BlogPost>  
)

export default PostPreview
