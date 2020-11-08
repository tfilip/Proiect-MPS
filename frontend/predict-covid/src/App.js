import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row
} from 'reactstrap';
import './App.css';

class App extends Component {


  render() {
    const symptoms = ['Cough', 'Fever', 'Sleepiness', 'Lose of smell and taste']

    return (
      <Container className="App">
        <h2>Covid Checker</h2>
        <Form className="form">
          <Row>
            <Col>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="18"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup tag="fieldset">
                <Label>Traveled outside the country</Label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="travel" value="1" /> Yes </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="travel" value="0" /> No </Label>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup tag="fieldset">
                <Label>Gender</Label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="gender" value="1" /> Male </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="gender" value="0" /> Female </Label>
                </FormGroup>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup tag="fieldset">
                <Label>Contact with confirmed person</Label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="contact" value="1" /> Yes </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="contact" value="0" /> No </Label>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Label>Symptoms</Label>
          <FormGroup check inline>
              {symptoms.map((value, index) => {
                return <Label check key={index}>
                    <Input type="checkbox"/>{value}</Label>
              })}
            </FormGroup>
          </Row>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default App;