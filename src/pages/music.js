import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import LinkButton from "../components/linkbutton"

const MusicPage = () => (
    <Layout>
      <SEO title="Music" />
      {/* <ul> */}
        {/* <LinkButton to="/music/compositions/">Compositions</LinkButton> */}
        {/* <LinkButton to="/music/tunes/">Tunes</LinkButton> */}
        {/* <li><Link to="/music/compositions/">Compositions</Link></li>
        <li><Link to="/music/tunes/">Tunes</Link></li> */}
      {/* </ul> */}
      {/* <h3>News</h3>
      <div>

      </div> */}

      <h3>Listen</h3>
      <div>
        <ul>
          <li><a href="https://soundcloud.com/christopherjacoby">Soundcloud</a></li>
        </ul>
      </div>

      <h3>Current Projects</h3>
      <div>
        <ul>
          <li><a href="https://groundliftcontra.bandcamp.com/">Ground Lift</a></li>
          <li><a href="https://www.dianastrong.com/wind-weavers">Wind Weavers</a></li>
          <li>Madeira</li>
          <li><a href="https://phoenix-danceband.bandcamp.com/">Phoenix</a></li>
        </ul>
      </div>

      <h3>Past Projects</h3>
      <div>
        <ul>
          <li>Phase X</li>
          <li>Last Exit</li>
          <li>Stunt Double</li>
        </ul>

      </div>

      {/* <h3>Archive</h3>
      <div>

      </div> */}

    </Layout>
)


export default MusicPage
