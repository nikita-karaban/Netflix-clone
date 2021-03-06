import styled from "styled-components/macro";


export const Avatar = styled.img`
  //margin-top: 55px;
  //right: 20px;
  //top: 55px;
  width: 30px;
  cursor: pointer;
`;

// export const ButtonLink = styled(ReachRouterLink)`
// display: block;
// background-color: #e50914;
// width: 84px;
// height: fit-content;
// color: white;
// border: 0;
// font-size: 15px;
// border-radius: 3px;
// padding: 8px 17px;
// cursor: pointer;
// text-decoration: none;
// box-sizing: border-box;
//
// &:hover
// {
//   background-color: #f40612;
// }
// `;

export const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: url(${({src}) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'}
  ) top left / cover no-repeat;
  height: 100vh;
  border-bottom: 8px solid rgb(34, 34, 34);
  //, linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 75%,rgba(0,0,0,.8) 100%);
  
  .Gradient{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 75%,rgba(0,0,0,.8) 100%);
      
       @media (max-width: 680px) {
         background: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
       }
  }
`;