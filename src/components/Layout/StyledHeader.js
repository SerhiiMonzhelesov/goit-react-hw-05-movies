import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid grey;

  nav {
    display: flex;
    gap: 40px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 10px;
  text-transform: uppercase;
  font-size: 20px;

  &.active {
    color: black;
    text-shadow: 0px 0px 7px rgb(13 86 28 / 71%);
    transform: scale(1.1);
    transition: transform 200ms ease-in-out, text-shadow 200ms ease-in-out;
  }

  &:hover {
    color: black;
    text-shadow: 0px 0px 7px rgb(13 86 28 / 71%);
    transition: text-shadow 200ms ease-in-out;
  }
`;
