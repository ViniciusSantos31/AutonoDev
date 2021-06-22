import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 400px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: 0 0 .5em black; */

  color: #5b1f3e;
  transition: all 0.3s ease-in;

  img {
    width: 200px;
    height: 364px;
  }

  .title {
    font-weight: bolder;
    font-size: 20px;
    text-align: center;

    svg {
      cursor: pointer;
    }
  }
  .more {
    cursor: pointer;
    &:hover {
      color: #964e74;
    }
  }
`;
