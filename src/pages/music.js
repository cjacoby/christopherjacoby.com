import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MusicPage = () => (
    <Layout>
      <SEO title="Music" />
      <ul>
        <li><Link to="/music/compositions/">Compositions</Link></li>
        <li><Link to="/music/tunes/">Tunes</Link></li>
      </ul>
      <h3>News</h3>
      <div>

      </div>

      <h3>Current Projects</h3>
      <div>
        <ul>
        <li>Wind Weavers</li>
          <li>Ground Lift</li>
          <li>Madeira</li>
          <li>Phoenix</li>
        </ul>
      </div>

      <h3>Past Projects</h3>
      <div>

      </div>

      <h3>Archive</h3>
      <div>

      </div>

    </Layout>
)


export default MusicPage
