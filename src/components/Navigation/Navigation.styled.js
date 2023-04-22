import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #212121;
  padding: 16px 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  &.active {
    color: orangered;
  }
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 20px;
`;
