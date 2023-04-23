import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLinkBtn = styled(Link)`
  background: #ebd8ff;
  padding: 14px 59px;
  border: 0px solid transparent;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  :hover,
  :focus {
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    color: #ebd8ff;
  }
`;
