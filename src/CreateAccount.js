import React, { Component } from "react";
import AppNev from "./AppNev";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { Container, input, Button, label, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

class CreateAccount extends Component {
  emptyAccount = {
    username: "",
    password: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      account: this.emptyAccount,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const account = this.state.account;
    await fetch(`http://localhost:8080/users`, {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: account.username,
        password: account.password,
      }),
    });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.emptyAccount[name] = value;
    this.setState({ ...this.state, account: this.emptyAccount });
    console.log(this.emptyAccount);
  };
  render() {
    const headline = <h3>Create Account</h3>;

    return (
      <div>
        <AppNev />
        <Container>
          {headline}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <label for="username">Username </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={this.handleChange}
              ></input>
            </FormGroup>
            <FormGroup>
              <label for="password">Password </label>
              <input
                type="text"
                name="password"
                id="password"
                onChange={this.handleChange}
              ></input>
            </FormGroup>
            <FormGroup>
              <Button color="info" type="submit">
                Save
              </Button>
              <Button color="info" tag={Link} to="/createAccount">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default CreateAccount;
