import React, { Component } from "react";
import AppNev from "./AppNev";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { Container, input, Button, label, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

class SubmitPost extends Component {
  emptyPost = {
    title: "",
    body: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      post: this.emptyPost,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit() {
    const post = this.state.post;

    await fetch(`http://localhost:8080/users/1/createPost`, {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: post.title,
        body: post.body,
      }),
    });
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.emptyPost[name] = value;
    this.setState({ ...this.state, post: this.emptyPost });
    console.log(this.emptyPost);
  };

  render() {
    const title = <h3>Submit your post</h3>;
    return (
      <div>
        <AppNev />
        <Container>
          {title}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <label for="title">Title </label>
              <input
                type="text"
                name="title"
                id="title"
                size="39"
                onChange={this.handleChange}
              ></input>
            </FormGroup>
            <FormGroup>
              <label for="body">Description </label>
              <textarea
                rows="4"
                cols="50"
                name="body"
                onChange={this.handleChange}
              ></textarea>
            </FormGroup>

            <FormGroup>
              <Button color="info" type="submit">
                Submit{" "}
              </Button>
              <Button color="info" tag={Link} to="/submitPost">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default SubmitPost;
