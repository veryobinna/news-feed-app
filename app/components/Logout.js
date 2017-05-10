import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory';
import user from '../userModel/userModel';

const history = createHistory({
  forceRefresh: true,
});
/**
 * sign out Component
 * @class Logout
 * @extends {Component}
 */
class Logout extends Component {
  /**
   *before Component mounts
   *logs the user out
   * @memberof Logout
   * @returns {null}
   */
  componentWillMount() {
    if (user.isLogin) {
      user.logOut();
      history.push('/#/login');
      window.location.reload();
    } else {
      history.push('/#/login');
    }
  }
}
export default Logout;
