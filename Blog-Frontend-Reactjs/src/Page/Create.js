import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css'

const Create = (props) => {
  return (
    <React.Fragment>
        <h1>Create</h1>
        <Form action="http://localhost:3001/create" method="POST">
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email"/>
            </FormGroup>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="username" name="username" id="username"/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password"/>
            </FormGroup>
            <FormGroup>
                <Label for="gender">Gender</Label>
                <Input type="select" name="gender" id="gender">
                    <option>Male</option>
                    <option>Female</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="file">File</Label>
                <Input type="file" name="avatar" id="file" />
            </FormGroup>   
            <Button>Create</Button>
        </Form>
    </React.Fragment>
  );
}

export default Create;