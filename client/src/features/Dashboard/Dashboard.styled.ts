import styled from 'styled-components';

export const ErrorMessage = styled.div`
  color: #ba495a;
  font-size: 16px;
`;

export const GridHeaderRow = styled.div`
  align-items: center;
  border-top: 1px solid #d2d2d2;
  display: none;
  gap: 16px;
  padding: 16px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const GridHeaderColumn = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
`;

export const GridRow = styled.div`
  align-items: center;
  border-top: 1px solid #d2d2d2;
  display: grid;
  padding: 16px;

  &:hover {
    background-color: #f9fafb;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    gap: 16px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const GridRowItem = styled.div``;

export const PageTitle = styled.h1`
  margin: 16px;
`;

export const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #00ce89;
  width: 32px;
  height: 32px;
  margin: auto;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;