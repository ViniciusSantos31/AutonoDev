import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  height: 60px;
  display: flex;
  background: white;
  align-items: center;
  justify-content: space-around;
  border-radius: 100px;
  padding: 10px 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  input {
    width: 100%;
    border: none;
    color: #737373;
    font-size: 14px;
  }
  .search {
    cursor: pointer;
  }
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    &:after {
      content: '';
      height: 25px;
      width: 1px;
      background: gray;
      margin-right: 10px;
      margin-left: 10px;
    }
`;
