import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding: 0px 24px;
`;

export const HeroWrapper = styled.div`
  max-width: 450px;
`;

export const HeroTitle = styled.h1`
  font-size: 40px;
  text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.56);
  color: rgb(255, 254, 254);
`;

export const HeroText = styled.p`
  font-size: 22px;
  text-shadow: 0px 1px 7px rgba(0, 0, 0, 0.56);
  color: rgb(255, 254, 254);
`;

export const GoLinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  max-width: 200px;
  background-color: #ebd8ff;
  padding: 10px 10px;
  border: 0px solid transparent;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: normal;
  text-decoration: none;
  color: #373737;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #471ca9;
    color: #ebd8ff;
  }
`;

export const BtnSpan = styled.span`
  margin-right: 8px;
`;
