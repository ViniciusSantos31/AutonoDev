import styled, { css } from 'styled-components';
import image from '../../../../assets/background.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 97vh;
  background: url(${image});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% 100%;
  padding-bottom: 5%;

  .abs {
    position: absolute;
    bottom: 10px;
  }

  @media only screen and (max-width: 1300px) {
    background: url(${image});
    background-repeat: no-repeat;
    background-position: top center;
    background-clip: padding-box;
    background-size: auto 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  position: relative;
  top: 0%;
  left: 0%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-transform: uppercase;
  color: white;
  font-weight: bolder;
  font-size: 5rem;

  p + p {
    color: #5b1f3e;
  }
`;

export const Buttons = styled.div`
  position: relative;
  width: 60%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  margin-top: 50px;
`;

export const Body = styled.div`
  max-width: 1920px;
  margin-top: 10px;
  gap: 40px;
  margin-bottom: 30px;
`;

export const Grid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  margin-top: 10px;
  gap: 0.5rem;

  @media only screen and (max-width: 1920px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: 1600px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    align-item: center;
  }

  @media only screen and (max-width: 1190px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    align-item: center;
  }

  @media only screen and (max-width: 810px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const div = css`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 100px 0px 0px 0px;
`;

export const Filter = styled.div`
  ${div}
`;

export const FilterPagination = styled.div`
  ${div}
  justify-content: flex-end;
  padding-right: 20px;
  margin: 0;
`;
