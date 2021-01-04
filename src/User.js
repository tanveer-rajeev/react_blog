import React, { Component } from "react";
import AppNev from "./AppNev";
import Spinner from "./Spinner";
class User extends Component {
  state = {
    isLoading: true,
    Users: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:8080/users/getAllUser");
      const body = await response.json();
      console.log(body);
      this.setState({ Users: body, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { Users, isLoading } = this.state;
    if (isLoading)
      return (
        <div>
          <Spinner />
        </div>
      );

    return (
      <div>
        <AppNev />
        <h2>Users</h2>
        {Users.map((user) => (
          <div id={user.id}>{user.userName}</div>
        ))}
      </div>
    );
  }
}

export default User;
