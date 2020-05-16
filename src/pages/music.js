import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import styles from "./music.module.css"

import Gig from "../components/gig"
import SEO from "../components/seo"

const MusicPage = ( {data} ) => {
  const gigs = data.allAirtable.nodes;
  // .sort((a, b) => {
  //   if (a === b) {
  //     return 0;
  //   } else if (a === null && b !== null) {
  //     return -1;
  //   } else if (b === null && a !== null) {
  //     return 1;
  //   }

  //   var keyA = new Date(a.Date);
  //   var keyB = new Date(b.Date);
  //   return keyA > keyB ? 1 : -1;
    
  // });
  console.log(gigs);

  return (
    <Layout>
      <SEO title="Music" />
      <header
          css={css`
            text-align: center;
          `}
        >
          <h1>Music</h1>
        </header>
      <div className={styles.gridcontainer}>
        <div className={styles.contentchild}>
          <h3>Upcoming Gigs</h3>
          <div>
            <ul>
              {gigs.map(({data}) => (
                <li><Gig {...data} /></li>
              ))}
            </ul>
          </div>

        </div> {/* end content child */}

        <div className={styles.rightchild}>
          <h4>Listen</h4>
          <div>
            <ul>
              <li><a href="https://soundcloud.com/christopherjacoby">Soundcloud</a></li>
            </ul>
          </div>
          
          <h4>Current Projects</h4>
          <div>
            <ul>
              <li><a href="https://groundliftcontra.bandcamp.com/">Ground Lift</a></li>
              <li><a href="https://www.dianastrong.com/wind-weavers">Wind Weavers</a></li>
              <li>Madeira</li>
              <li><a href="https://phoenix-danceband.bandcamp.com/">Phoenix</a></li>
            </ul>
          </div>

          <h4>Past Projects</h4>
          <div>
            <ul>
              <li>Phase X</li>
              <li>Last Exit</li>
              <li>Stunt Double</li>
            </ul>
          </div> {/* end past projects */}

        </div> {/* end content child */}

      </div> {/* end gridcontainer */}
    </Layout>
)}


export default MusicPage


export const query = graphql`
query GigQuery {
  __typename
  allAirtable(filter: {table: {eq: "Gigs"}}, sort: {fields:data___Date, order:ASC}) {
    edges {
      node {
        id
      }
    }
    nodes {
      data {
        Band
        Date
        Location
        Name
        Venue
        URL
      }
    }
  }
}
`;

// {/* <ul> */}
//         {/* <LinkButton to="/music/compositions/">Compositions</LinkButton> */}
//         {/* <LinkButton to="/music/tunes/">Tunes</LinkButton> */}
//         {/* <li><Link to="/music/compositions/">Compositions</Link></li>
//         <li><Link to="/music/tunes/">Tunes</Link></li> */}
//       {/* </ul> */}
//       {/* <h3>News</h3>
//       <div>

//       </div> */}

//       {/* <h3>Archive</h3>
//       <div>

//       </div> */}
