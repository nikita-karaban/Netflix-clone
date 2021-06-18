import styled from "styled-components/macro";

export const Item = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 10px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;
  

  @media (max-width: 600px) {
    font-size: 16px;
  }
  
  .svg-icon-thin-x {
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    height: 1em;
    width: 1em;
    fill: #fff;
  }
  
  .svg-closed {
    transform: translateY(-50%) rotate(-45deg)
  }
`;
export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  padding: 0.8em 1.2em;

  &.closed {
    //font-size: 18px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 1.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;