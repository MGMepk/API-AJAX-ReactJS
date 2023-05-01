import React from "react";
import API from "../api";
import UserDetails from "./UserDetails";

export default class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    API.get(`users`)
      .then((res) => {
        const users = res.data.users;
        this.setState({ users });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id} onClick={() => new UserDetails(user.id)}>
              Nom: {user.name}, Usuari: {user.username}, Email: {user.email}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
