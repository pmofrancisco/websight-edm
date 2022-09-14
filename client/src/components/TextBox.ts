import styled from 'styled-components';

export const TextBox = styled.input`
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  font-size: 16px;
  padding: 8px;

  :active, :focus {
    border: 1px solid #00ce89;
    outline: none;
  }
`;