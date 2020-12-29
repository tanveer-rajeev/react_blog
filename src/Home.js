import React, { Component } from "react";
import { Container } from "reactstrap";
import AppNev from "./AppNev";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNev />
        <Container>
          <h5 className="card-body">Welcome User</h5>
        </Container>
      </div>
    );
  }
}

export default Home;
