import React from 'react';
import { Route, Router, Link, Switch } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css'

const Signin = (props) => {
  return (
    <React.Fragment>
        <h1>Sign in</h1>
        <Form action="http://localhost:3001/users" method="POST">
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="username" name="username" id="username"/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password"/>
            </FormGroup>
            <Button>Sign in</Button>
            <br/>
            <br/>
            <p>Haven't account? <Link to="/create">Create new account</Link></p>
        </Form>
    </React.Fragment>
  );
}

export default Signin;