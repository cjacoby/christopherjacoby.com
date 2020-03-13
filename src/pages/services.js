import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ServicesPage = () => (
    <Layout>
      <SEO title="Services" />
      <header
          css={css`
            text-align: center;
          `}
        >
          <h1>Services</h1>
        </header>

        <p>Please contact me directly for any of the following. I am mostly interested in only opportunities in the Greater Bay Area.</p>

        <section>
            <h3>Music & Audio</h3>
            <ul>
                <li>Live Sound Operator for small and medium size venues.</li>
                <li>Band or individual for Contra dance, English Country Dance, or Scottish Country Dance.</li>
                <li>"Celtic"/"Traditional Music" for weddings or events.</li>
            </ul>
        </section>

        <section>
            <h3>Lessons & Classes</h3>
            <ul>
                <li>Sound Reinforcement / Live Sound</li>
                <li>Project Management with Scrum/Agile</li>
                <li>Beginner to intermediate Guitar, Mandolin, or Piano Accordion</li>
                <li>Playing music for Contra/English/Scottish dance</li>
                <li>Intro to Sourdough Bread Baking</li>
                <li>Intro to Homemade Pasta Making</li>
            </ul>
        </section>
    </Layout>
)


export default ServicesPage
