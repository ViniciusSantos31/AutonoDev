import styled, { css } from 'styled-components';

const style = css`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${style}
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 10;
  overflow: hidden;
`;

export const Content = styled.div`
  ${style}
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 65%;
  height: 60%;
  opacity: 1;
  background: none;
  z-index: 30;
  transform: translate(30%,30%);
  transform-origin: top;
  @media only screen and (max-width: 1030px) {
    height: 90%;
    transform: translate(30%,5%);
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  scrollbar-gutter: 20px;
  text-overflow: clip;
  

  img {
    width: 400px;
    height: 100%;
  }

  div {
    min-width: 75%;
    height: 100%;
    overflow-y: scroll;
    padding: 20px;
    gap: 30px;
    span {
      font-size: 24px;
      font-weight: bolder;
      text-transform: capitalize;
    }
    p {
      font-size: 15px;
      font-weight: lighter;
    }

  }
  @media only screen and (max-width: 1030px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 198px;
      height: 273px;
    }
  }
  
`;