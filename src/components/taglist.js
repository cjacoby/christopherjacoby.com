import React from "react"
import styled from 'styled-components'
import { navigate } from "@reach/router";
import { css } from "@emotion/core"

// Utilities
import kebabCase from "lodash/kebabCase"

const TagDiv = styled.div`
  display: inline-block;
`;

const TagButton = styled.button`
  background: #4DB3AB;
  border-radius: 3px;
  border: none;
  color: white;
  margin: auto 2px;
`;


const TagList = ({ tags }, clickable = false ) => {
    if (tags) {
       return (
         <TagDiv>{
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
         }</TagDiv>
       )
    }
    else {
        return <TagDiv>Tags: (none)</TagDiv>
    }
 }

 export default TagList
