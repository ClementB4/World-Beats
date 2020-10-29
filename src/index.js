import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Root} from './components/Root';
import {Home} from './components/Home';
import {FeuillePerso} from './components/Feuille_de_perso';
import {JournalBord} from './components/Journal_de_bord';
import {Marchand} from './components/Marchand';

function App() {
  return (
    <Router>
      <div className='App'>
        <Root />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/journal_de_bord" component={JournalBord} />
          <Route path="/feuille_de_perso" component={FeuillePerso} />
          <Route path="/marchand" component={Marchand} />
        </Switch>
      </div>
    </Router> 
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);