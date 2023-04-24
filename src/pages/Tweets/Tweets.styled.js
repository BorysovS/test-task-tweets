import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  width: 120px;
  background-color: #ebd8ff;
  padding: 10px 20px;
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

export const WrapperSelect = styled.div`
  width: 400px;
`;

export const FilterThumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
`;

export const Container = styled.div`
  padding: 0px 24px;
`;

export const BtnLoadMore = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  background-color: #ebd8ff;
  padding: 10px 6px;
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
  :hover {
    background-color: #471ca9;
    color: #ebd8ff;
  }

  :disabled {
    background-color: rgb(83 76 76 / 22%);
    color: rgb(255 245 245 / 57%);
  }
`;
