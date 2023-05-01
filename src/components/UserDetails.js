import React from "react";
import API from "../api";

export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "", username: "", email: "" },
    };
  }

  componentDidMount() {
    API.get(`users/${this.props.id}`)
      .then((res) => {
        console.log(this.props.id);
        const user = res.data;
        this.setState({ user });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Nom: {this.state.user.name}</h1>
          <h1>Usuari: {this.state.user.username}</h1>
          <h1>Email: {this.state.user.email}</h1>
        </div>
      </div>
    );
  }
}
