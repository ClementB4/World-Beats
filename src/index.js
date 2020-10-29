import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Root} from './components/Root';
import {Index} from './components/Index';
import {FeuillePerso} from './components/Feuille_de_perso';

function App() {
  return (
    <Router>
      <div className='App'>
        <Root />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/feuille_de_perso" component={FeuillePerso} />
        </Switch>
      </div>
    </Router> 
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);