import React from "react"
import styled from 'styled-components'
import { navigate } from "@reach/router";
import { css } from "@emotion/core"

// Utilities
import kebabCase from "lodash/kebabCase"

const TagButton = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  margin: auto 5px;
`;


const TagList = ({ tags }, clickable = false ) => {
    if (tags) {
       return (
         <div>Tags: {
            tags.map(( pageTag ) => (
                <TagButton
                  onClick={
                    clickable ? () => navigate(`/tags/${kebabCase(pageTag)}/`) : null}
                  css={
                    clickable? css`cursor: pointer;` : ``
                  }
                >
                  {pageTag}
                </TagButton>
            ))
         }</div>
       )
    }
    else {
        return <div>Tags: (none)</div>
    }
 }

 export default TagList
