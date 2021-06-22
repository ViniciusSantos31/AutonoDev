import styled, { css } from 'styled-components';
import { theme } from '../index';

interface ownProps {
  theme: keyof typeof theme;
  size: string;
}

export const Container = styled.button<ownProps>`
  /* height: 45px; */
  border-radius: 100px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease-in-out;
          filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));

  svg {
    color: #5b1f3e;
  }

  &:disabled {
    background: #c4c4c4;
    cursor: none;
  }

  ${props =>
    props.theme === theme.primary
      ? css`
          background: #ffb126;
          color: #5b1f3e;
          padding: 10px 20px;
          &:hover {
            background: rgba(255, 177, 38, 0.6);
          }
          &:disabled {
            background: rgba(255, 177, 38, 0.6);
            cursor: initial;
          }
        `
      : null}
  ${props =>
    props.theme === theme.secundary
      ? css`
          flex-direcrtion: row;
          padding: 10px;
          background: #fff;
          color: #5b1f3e;
          padding: 10px 20px;
          &:hover {
            background: rgba(255, 255, 255, 0.6);
          }
          &:disabled {
            background: rgba(255, 255, 255, 0.6);
            cursor: initial;
          }
        `
      : null}

  ${props =>
    props.theme === theme.rounded
      ? css`
          border-radius: 100%;
          padding: 10px;
          background: #5b1f3e;
          color: #ffb126;
          svg {
            color: #ffb126;
            z-index: 20;
          }
          &:hover {
            background: rgba(91, 31, 62, 0.6);
          }
          &:disabled {
            background: rgba(91, 31, 62, 0.6);
            cursor: initial;
          }
        `
      : null}
`;
