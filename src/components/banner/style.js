import styled from 'styled-components'

export const Container = styled.header`
  position: relative;
  //height: 448px;
  color: white;
  object-fit: contain;
  //padding-left: 56px;
  .fadeBottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 208px;
    pointer-events: none;
    
    background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37, 37, 37, 0.21),
            #111
    );
  }
`;
export const ModalVideoWrapper = styled.div`
  @keyframes modal-video-inner {
    from {
      transform: scale(0.75);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .modal-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000000;
    cursor: pointer;
    opacity: 1;
    animation: modal-video 0.3s ease-in;
  }

  .modal-video-body {
    max-width: 800px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .modal-video-inner {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .modal-video-movie-wrap {
    width: 90%;
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
    background-color: rgba(29, 29, 29, 0.6);
    border-radius: 1rem;
    transform: scale(1);
    opacity: 1;
    animation: modal-video-inner 0.3s 0.1s ease-in;
    box-shadow: 0 1rem 1.5rem -0.5rem rgba(0, 0, 0, 0.5);
  }

  .modal-video-movie-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  .modal-video-close-btn {
    position: absolute;
    z-index: 2;
    top: -2.5rem;
    right: 1rem;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .modal-video-close-btn:before {
    transform: translate(-50%, -50%) rotate(45deg)
  }

  .modal-video-close-btn:after {
    transform: translate(-50%, -50%) rotate(-45deg)
  }

  .modal-video-close-btn:before,
  .modal-video-close-btn:after {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    top: 50%;
    left: 50%;
    background: #fff;
    border-radius: 5px;
  }
`;
export const Contents = styled.div`
  margin-left: 15px;
  padding-left: 56px;
  padding-top: 240px;
  padding-bottom: 60px;
  //height: 190px;
  
  
`;
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;
export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding: 0.5rem 2rem ;
  
  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;
export const Description = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  //height: 80px;
`;