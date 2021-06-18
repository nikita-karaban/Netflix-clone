import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction};
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

// const Container = styled.div``;

export const MainSection = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  //font-weight: normal;

  @madia (max-width: 600px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  font-size: 21px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;