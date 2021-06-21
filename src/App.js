import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
//Will not work on server side rendering, will work only when rendered on client side, useful for large code
// import Posts from './containers/Posts';
import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
  state = { show: false }

  modeHandler = () => {
    this.setState(prevState => {
      return { show: !prevState.show }
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>
        {
          this.state.show ? ((<Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </Suspense>)) : <User />
        }
      </React.Fragment>
      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route path="/posts"
      //       render={() =>
      //       (<Suspense fallback={<div>Loading...</div>}>
      //         <Posts />
      //       </Suspense>)}
      //     />
      //   </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;
