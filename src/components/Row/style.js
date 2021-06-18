import styled from "styled-components/macro";
import {Link} from "react-router-dom";

export const Title = styled.h2`
  color: white;
`;

export const Posters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  .posterLarge {
    max-height: 250px;
    opacity: 1;
  }
`;

export const Poster = styled.img`
  max-height: 100px;
  object-fit: contain;
  margin-right: 10px;
  transition: transform 450ms;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;

export const Container =  styled.div`
  margin-left: 5vw;
  padding-top: 40px;
`;

export const Wrapper = styled(Link)``;