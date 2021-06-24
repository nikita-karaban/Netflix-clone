import styled from "styled-components/macro";
import { Link as ReachRouterLink } from 'react-router-dom';

export const ButtonLink = styled(ReachRouterLink)`
  display: flex;
  align-items: center;
  background-color: #e50914;
  min-width: 84px;
  height: auto;
  color: white;
  border: 0;
  font-size: ${props => (props.fontSize? props.fontSize : `15px`) };
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  svg {
    width: 12px;
    margin: 1px 0 1px 10px;
    height: 100%;
    transform: scaleX(1);
  }

  &:hover {
    background-color: #f40612;
  }
`;