import React, { Component } from "react";
import logo from "../../assets/img/logo.svg";
import "../css/style.css";
import { Link } from "react-router-dom";
import SignUp from './SignUp'
import Login from './Login'
import auth from './../auth/initAuth'

//material-ui components
import { TextField } from "material-ui/";

//theme related material-ui
import {
  MuiThemeProvider,
  getMuiTheme,
  darkBaseTheme
} from "material-ui/styles";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginToggle: true,
      isLoggedIn: auth.loggedIn()
    };
  }

  _loginSignUpToggle = () => {
    this.setState({ isLoginToggle: !this.state.isLoginToggle });
  };

  _refresh = () => {
    this.forceUpdate();
  };

  _updateStatus = () => {
    this.setState({ isLoggedIn: auth.loggedIn() });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Auth0 Authentication</h2>
          </div>

          <div className="border color-blue">
            <Link to="/PageOne">Go to Page One</Link>
          </div>

          <button onClick={this._loginSignUpToggle}>
            Click to {this.state.isLoginToggle ? "Sign Up" : "Login"}
          </button>

          {this.state.isLoginToggle ? (
            <Login
              _refresh={this._refresh}
              _updateStatus={this._updateStatus}
            />
          ) : (
            <SignUp />
          )}

          {/* Render children here*/}
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
