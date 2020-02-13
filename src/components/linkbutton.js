import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { navigate } from "@reach/router";

const Button = styled.button`
cursor: pointer;
background: transparent;
font-size: 16px;
border-radius: 3px;
color: palevioletred;
border: 2px solid palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
transition: 0.5s all ease-out;
&:hover {
  background-color: palevioletred;
  color: white;
}

a {
    color: palevioletred;

}
a:hover {
    color: white;
}
`;


const LinkButton = ({ children, to }) => (
    <Button
        onClick={event => {
            navigate(to)
        }}
    >
        {children}
    </Button>
)

export default LinkButton;
