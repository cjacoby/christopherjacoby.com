import React from "react"
import { Link } from "gatsby"

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

export default TagPosts
