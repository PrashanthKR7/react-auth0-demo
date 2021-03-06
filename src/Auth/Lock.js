import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Auth0Lock from "auth0-lock";
import { AUTH_CONFIG } from "./auth0-variables";

class Lock extends Component {
  lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
    auth: {
      responseType: "token",
      sso: false,
      redirect: false
    },
    container: AUTH_CONFIG.container,
    theme: {
      primaryColor: "#4fc4d0",
      logo: "https://gethyphen.com/images/apple-touch-icon-72x72.png"
    },
    languageDictionary: {
      title: "Hyphen Auth"
    }
  });

  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.onAuthenticated = this.onAuthenticated.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);
    this.onAuthenticated();
  }

  onAuthenticated() {
    this.lock.on("authenticated", authResult => {
      let expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      );
      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("id_token", authResult.idToken);
      localStorage.setItem("expires_at", expiresAt);

      this.getUserProfile(authResult.accessToken);

      this.setState({ loggedIn: true });
    });
  }

  getUserProfile(accessToken) {
    this.lock.getUserInfo(accessToken, (err, profile) => {
      if (profile) {
        localStorage.setItem("profile", JSON.stringify(profile));
      }
    });
  }

  componentDidMount() {
    // Avoid showing Lock when hash is parsed.
    if (!/access_token|id_token|error/.test(this.props.location.hash)) {
      this.lock.show();
    }
  }

  render() {
    const style = { marginTop: "32px" };

    return !this.state.loggedIn ? (
      <div>
        <h2>Login Page</h2>
        <div id={AUTH_CONFIG.container} style={style} />
      </div>
    ) : (
      <Redirect
        to={{
          pathname: "/private",
          state: { from: this.props.location }
        }}
      />
    );
  }
}

export default Lock;
