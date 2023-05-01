import React from "react";
import API from "../api";

export default class CreateUser extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  handleUserName = (event) => {
    this.setState({ username: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
    };

    API.post("/users", {
      name: user.name,
      username: user.username,
      email: user.email,
    })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleName} />
          </label>
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleUserName} />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleEmail} />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
