import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Layout from "../components/layout"
import { Link } from "gatsby"

const TagsPage = ({pageContext: { allTags } }) => (
    <Layout>
        <h1>Tags</h1>
        <ul>
            {allTags.map((tag) => (
            <li key={tag}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            </li>
            ))}
        </ul>
    </Layout>
)

export default TagsPage
