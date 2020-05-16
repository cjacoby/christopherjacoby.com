import React from "react"
import styles from "./postpreview.module.css"
import { navigate } from "gatsby"
// import styled from 'styled-components'

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import TagList from "./taglist"

const PostPreview = ( { post } ) => (
  <div className={styles.blogpost}
        onClick={event => {
            navigate(`/blog/${kebabCase(post.slug)}`)
        }}
    >
        <div className={styles.container}>
          {/* These internal divs are to make the grid-container work right. */}
            <div><h3 className={styles.title}>{post.title}</h3></div>
            <div>
              <div className={styles.tags}>
                <TagList tags={post.Tags} />
              </div>
            </div>
        </div>
        <div className={styles.metadata}>Posted {post.date} by {post.author}</div>
  </div>
)

export default PostPreview
