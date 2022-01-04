import React from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  onLoginSuccess = (response) => {
    "";
    console.log(response);
    this.props.signIn(response.profileObj);
  };

  login = () => {
    return (
      <GoogleLogin
        clientId="678254738076-kmlb7pov2he8uvv9cjh69m6g18tk5501.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.onLoginSuccess}
        cookiePolicy={"single_host_origin"}
      />
    );
  };

  onLogout = () => {
    this.props.signOut();
  };

  logout = () => {
    return <button onClick={this.onLogout}>Logout </button>;
  };

  authButton() {
    if (this.props.isSignedIn) {
      return this.logout();
    }
    return this.login();
  }

  render() {
    return this.authButton();
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
