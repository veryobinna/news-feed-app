import React from 'react';
import GoogleLogin from 'react-google-login';
import createHistory from 'history/createBrowserHistory';
import user from '../user/user';

const history = createHistory({
  forceRefresh: true,
});

export default class Login extends React.Component {
  componentWillMount() {
    if (user.isLogin) {
      history.push('/');
      window.location.reload();
    }
  }

  render() {
    const responseGoogle = (reply) => {
      user.login(reply);
      window.location.reload();
    };
    return (
      <div className="container-fluid login-page">
        <div className="text-center">

          <h1 className="loginheader">News Hub</h1>
        </div>
        <div className="text-center">
          <p className="logintext"> View news headlines from over 70 Sources </p>
        </div>

        <div className="button-text">
          <div className="text-center">
            <GoogleLogin
              clientId="460538549894-1an8hpmun7pnjp0ub2mvsjl8t4t8svo2.apps.googleusercontent.com"
              buttonText="Sign-in"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </div>
      </div>
    );
  }
}
