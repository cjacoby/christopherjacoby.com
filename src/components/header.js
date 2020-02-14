import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975)
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;

  > * {
    flex: 1;
    
  }
`;

const NavLeft = styled.div`
  width: 50%;
  text-align: left;
  order: 1;
`;

const NavRight = styled.div`
  width: 50%;
  text-align: right;
  margin: 0 auto;
  svg {
    margin-right: 20px;
  }
  order: 2;
`;

const MenuLink = styled(props => <Link {...props} />)`
`;


const Header = ({ siteTitle, menuLinks }) => (
  <Nav>
    <NavHeader>
      <NavLeft>
        <Link
            to="/"
            style={{
              // color: `white`,
              textDecoration: `none`,
            }}
          >
          {siteTitle}
        </Link>
      </NavLeft>

      <NavRight>
        {menuLinks.map(link => (
          <MenuLink to={link.link}>
            {link.name}{" "}
          </MenuLink>
        ))}
      </NavRight>
    </NavHeader>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
