import React from "react"
import styled from 'styled-components'

const FooterContent = styled.div`
    max-width: 1010px;
    padding: 26px 20px;
    width: 50%;
    align-items: center;
    margin: 0 auto;
    text-align: center;
`;

const Footer = () => (
    <FooterContent>
        copyright Christopher Jacoby 2020.
    </FooterContent>
)

export default Footer
