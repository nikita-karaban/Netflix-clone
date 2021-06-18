import styled from "styled-components/macro";

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  padding-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto 40px;
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 0 30px;
  z-index: 1;
  //margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  outline: none;
`;
export const Button = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  //text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  svg {
    width: 12px;
    margin: 1px 0 1px 10px;
    height: 100%;
    transform: scaleX(1);
  }
  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;