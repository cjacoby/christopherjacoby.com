import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MusicPage = () => (
    <Layout>
      <SEO title="Music" />
      <ul>
        <li><Link to="/music/bands/">Bands</Link></li>
        <li><Link to="/music/compositions/">Compositions</Link></li>
      </ul>
    </Layout>
)


export default MusicPage
