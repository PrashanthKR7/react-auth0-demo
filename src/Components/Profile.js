import React, { Component } from "react";
import { Panel, ControlLabel, Glyphicon } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import isAuthenticated from "../Auth/isAuthenticated";
import "./../Styles/Profile.css";

class Profile extends Component {

  componentWillMount() {
    this.setState({ profile: JSON.parse(localStorage.getItem("profile")) || null });
  }

  render() {
    const { profile } = this.state;
    return isAuthenticated() ? (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel>
                <Glyphicon glyph="user" /> Nickname
              </ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
          </Panel>
        </div>
      </div>
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: this.props.location }
        }}
      />
    );
  }
}

export default Profile;
