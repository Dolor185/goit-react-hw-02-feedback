import styled from 'styled-components';

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 5px;
  border: none;
  background-color: #144722;
  color: #ffffff;
  cursor: pointer;
`;
