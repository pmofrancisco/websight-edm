import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TextBox } from '../../components/TextBox';
import {
  Container,
  Form,
  FormControl,
  Header,
  Label,
  SignInButton,
} from './Home.styled';

const Home = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false); 
  return isSignedIn ? <Navigate to="/dashboard" /> : (
    <Container>
      <Header>Sign In</Header>
      <Form onSubmit={(e) => {
        e.preventDefault();
        setIsSignedIn(true);
      }}>
        <FormControl>
          <Label htmlFor="username">Username</Label>
          <TextBox id="username" name="username" />
        </FormControl>
        <FormControl>
          <Label htmlFor="password">Password</Label>
          <TextBox type="password" id="password" name="password" />
        </FormControl>
        <SignInButton>Sign In</SignInButton>
      </Form>
    </Container>
  );
};

export default Home;
