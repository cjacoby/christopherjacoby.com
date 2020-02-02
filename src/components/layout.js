/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
// import { css } from "@emotion/core"
// import { Link } from "gatsby"
// import { rhythm } from "../utils/typography"
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={'title'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
        </Helmet>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </React.Fragment>
    )}
  />
)

// import Header from "./header"
 

// export default ({ children }) => (
//   <div
//     css={css`
//       margin: 0 auto;
//       max-width: 700px;
//       padding: ${rhythm(2)};
//       padding-top: ${rhythm(1.5)};
//     `}
//   >
//     <Link to={`/`}>
//       <h3
//         css={css`
//           margin-bottom: ${rhythm(2)};
//           display: inline-block;
//           font-style: normal;
//         `}
//       >
//         Pandas Eating Lots
//       </h3>
//     </Link>
//     <Link
//       to={`/about/`}
//       css={css`
//         float: right;
//       `}
//     >
//       About
//     </Link>
//     {children}
//   </div>
// )

// From before; disabling for tutorial
// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
