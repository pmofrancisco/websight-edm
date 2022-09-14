import React, { useState } from 'react';
import * as R from 'ramda';
import { useRecoilValueLoadable } from 'recoil';

import { FlexContainer } from '../../components/FlexContainer';
import { IUser, usersState } from '../../selectors/users';
import {
  ErrorMessage,
  GridHeaderColumn,
  GridHeaderRow,
  GridRow,
  GridRowItem,
  PageTitle,
  SearchTextBox,
  Spinner,
} from './Dashboard.styled';

const Dashboard = () => {
  const { state, contents } = useRecoilValueLoadable(usersState);
  const [searchString, setSearchString] = useState<string>('');

  const filtered = R.filter(
    ({ email, firstName, lastName }) => R.startsWith(R.toLower(searchString), R.toLower(email))
      || R.startsWith(R.toLower(searchString), R.toLower(firstName))
      || R.startsWith(R.toLower(searchString), R.toLower(lastName)),
    contents as IUser[],
  );
  
  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <FlexContainer>
        <SearchTextBox
          placeholder="Search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </FlexContainer>
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
          {(filtered).map(({ id, email, firstName, lastName }) => (
            <GridRow key={id}>
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
