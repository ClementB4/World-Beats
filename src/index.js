import React from 'react';
import ReactDOM from 'react-dom';

// import {Router, Router, browserHistory, IndexRoute} from "react-router";

import './styles/index.css';
import App from './components/App';

// class App extends React.Component {
//   render() {
//     return (
//       <Router history={browserHistory}>
//         <Route path={"/"} component={Root}>
//           <IndexRoute component={Home} />
//           <Route path={"user"} component={User} />
//           <Route path={"home"} component={Home} />
//         </Route>
//       </Router>
//     );
//   }
// }




ReactDOM.render(
    <App />,
  document.getElementById('root')
);