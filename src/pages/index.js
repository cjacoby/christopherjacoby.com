import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
  return (
  <Layout>
    <SEO title="Home" />

    <p>
      I am a Machine Learning Engineer / "Full Stack Data Scientist", with particular interest in Audio & Music,
      and how computers can help us be more human. 
    </p>
    <p>
      I have a Masters in Music Technology from NYU / Steinhardt, where I worked in the <a href="https://research.steinhardt.nyu.edu/marl/">Music & Audio Research Laboratory (MARL)</a> with <a href="https://wp.nyu.edu/jpbello/">Juan Bello</a>.
      I am currently a Senior Data Scientist in Change Healthcare's Artificial Intelligence team. Prior to that
      I worked for a series of Music Techology startups.
    </p>

    <h3>Software</h3>
    <p>
      <ul>
        <li>Pescador</li>
        <li>Manta?</li>
      </ul>
    </p>

    <h3>Data</h3>

    <h3>Publications</h3>
    <p>
      <ul>
        <li>Few papers</li>
      </ul>
    </p>

  </Layout>
  )
}


export default IndexPage
