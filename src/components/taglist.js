import React from "react"
import styled from 'styled-components'

const TagButton = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  margin: auto 5px;
`;


const TagList = ({ tags } ) => {
    console.log(tags);
    if (tags) {
       return (
         <div>Tags: {
            tags.map(( pageTag ) => (
                <TagButton>{pageTag}</TagButton>
            ))
         }</div>
       )
    }
    else {
        return <div>Tags: (none)</div>
    }
 }

 export default TagList
