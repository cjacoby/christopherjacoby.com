import React from "react"

import Layout from "../components/layout"
import styles from "./index.module.css"

import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import SEO from "../components/seo"
import PostPreview from "../components/postpreview"

// fix fontawesome svgs from flashing big
config.autoAddCss = false


const IndexPage = ({ data }) => {
  const blogPosts = data.allSitePage.nodes.reverse();
  const postedBlogPosts = blogPosts.filter(({context}) => context.date !== null);

  return (
  <Layout>
    <SEO title="Home" />

    <div className={styles.gridcontainer}>
      <div className={styles.contentchild}>
        <article>
          <p>
            I am a Machine Learning Engineer / Data Scientist with interests in Audio & Music Information Retrieval, and NLP.
          </p>
          <p>
            I have a Masters in Music Technology from NYU / Steinhardt, where I worked in the <a href="https://research.steinhardt.nyu.edu/marl/">Music & Audio Research Laboratory (MARL)</a> with <a href="https://wp.nyu.edu/jpbello/">Juan Bello</a>.
            I am currently a Senior Data Scientist in Change Healthcare's Artificial Intelligence group. Prior to that
            I worked for a series of Music Techology startups.
          </p>
        </article>

        <article>
          <h3>Recent Posts</h3>
          {postedBlogPosts.map(({context}) => (
            <PostPreview post={context} />
          ))}
        </article>

        <hr />

        <div>
          <h3>Upcoming Gigs</h3>
          <p>
            Unfortunately, due to Covid-19, all current scheduled gigs are likely to be cancelled.
          </p>
        </div>

        {/* <article>
          <h3>Software</h3>
          <p>
            <ul>
              <li><a href="https://github.com/pescadores/pescador">Pescador</a></li>
            </ul>
          </p>
        </article> */}
      </div>
      <div className={styles.rightchild}>
        <Img fixed={data.headshotImage.childImageSharp.fixed}/>
        <br />

        <p>
          <a href="https://www.linkedin.com/in/christopherjacoby/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          {" "}
          <a href="https://twitter.com/chrstphrjcby"><FontAwesomeIcon icon={faTwitter} /></a>
        </p>
        
      </div>
    </div>
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
    allSitePage(filter: {path: {glob: "/blog/*"}}) {
      nodes {
        context {
          slug
          title
          author
          date
          Tags
        }
      }
    }
  }
`