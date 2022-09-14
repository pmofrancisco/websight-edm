import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  gap: 16px;
  margin: 32px;
  max-width: 500px;
  padding: 32px;

  @media (min-width: 576px) {
    margin: 32px auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Header = styled.h1`
  margin: 0 0 32px;
`;

export const Label = styled.label``;

export const SignInButton = styled.button`
  background-color: #00ce89;
  border: none;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 8px;
  transition: all 0.3s;
  width: 100%;

  &:hover {
    background-color: #07b178;
  }
`;

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