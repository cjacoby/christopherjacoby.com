import React from "react"
import Img from "gatsby-image"
import styled from 'styled-components';
import { css } from "@emotion/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"


const Container = styled.div`
display: grid;
grid-template-columns: 70% auto;
`;

const ContentChild = styled.div`
  padding: 0.25rem 0.5rem;
`;

const RightBarChild = styled.div`
  margin: auto;
`;


const IndexPage = ({ data }) => {
  return (
  <Layout>
    <SEO title="Home" />

    <Container>
      <ContentChild>
        <article>
          <p>
            I am a Machine Learning Engineer with particular interests in Audio & Music,
            and how computers can help us be more human.
          </p>
          <p>
            I have a Masters in Music Technology from NYU / Steinhardt, where I worked in the <a href="https://research.steinhardt.nyu.edu/marl/">Music & Audio Research Laboratory (MARL)</a> with <a href="https://wp.nyu.edu/jpbello/">Juan Bello</a>.
            I am currently a Senior Data Scientist in Change Healthcare's Artificial Intelligence group. Prior to that
            I worked for a series of Music Techology startups.
          </p>
        </article>

        {/* <article>
          <h3>Recent Posts</h3>
          <p>
            blah blah
          </p>
        </article> */}

        {/* <article>
          <h3>Software</h3>
          <p>
            <ul>
              <li><a href="https://github.com/pescadores/pescador">Pescador</a></li>
            </ul>
          </p>
        </article> */}
      </ContentChild>
      <RightBarChild>
        <Img fixed={data.headshotImage.childImageSharp.fixed}/>
        <br />

        <p>
          <a href="https://www.linkedin.com/in/christopherjacoby/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          {" "}
          <a href="https://twitter.com/chrstphrjcby"><FontAwesomeIcon icon={faTwitter} /></a>
        </p>
        
      </RightBarChild>
    </Container>

    {/* <h3>Data</h3> */}

    {/* <h3>Publications</h3>
    <p>
      <ul>
        <li>Few papers</li>
      </ul>
    </p> */}

  </Layout>
  )
}


export default IndexPage

export const query = graphql`
  query {
    headshotImage: file(relativePath: { eq: "cbj-headshot.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`