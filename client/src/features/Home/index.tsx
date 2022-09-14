import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Container,
  Form,
  FormControl,
  Header,
  Label,
  SignInButton,
  TextBox,
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
          <Label>Username</Label>
          <TextBox />
        </FormControl>
        <FormControl>
          <Label>Password</Label>
          <TextBox type="password" />
        </FormControl>
        <SignInButton>Sign In</SignInButton>
      </Form>
    </Container>
  );
};

export default Home;
