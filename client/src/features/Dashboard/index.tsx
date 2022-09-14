import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { IUser, usersState } from '../../selectors/users';
import {
  ErrorMessage,
  GridHeaderColumn,
  GridHeaderRow,
  GridRow,
  GridRowItem,
  PageTitle,
  Spinner,
} from './Dashboard.styled';

const Dashboard = () => {
  const { state, contents } = useRecoilValueLoadable(usersState);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <GridHeaderRow>
        <GridHeaderColumn>Email</GridHeaderColumn>
        <GridHeaderColumn>First Name</GridHeaderColumn>
        <GridHeaderColumn>Last Name</GridHeaderColumn>
      </GridHeaderRow>
      {state === 'loading' && (
        <GridRow>
          <Spinner />
        </GridRow>
      )}
      {state === 'hasValue' && (
        <>
          {(contents as IUser[]).map(({ id, email, firstName, lastName }) => (
            <GridRow>
              <GridRowItem>{email}</GridRowItem>
              <GridRowItem>{firstName}</GridRowItem>
              <GridRowItem>{lastName}</GridRowItem>
            </GridRow>
          ))}
        </>
      )}
      {state === 'hasError' && (
        <GridRow>
          <ErrorMessage>Failed to load data.</ErrorMessage>
        </GridRow>
      )}
    </>
  );
};

export default Dashboard;
