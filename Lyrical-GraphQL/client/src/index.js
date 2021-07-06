import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import SongCreate from './components/SongCreate';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
}); 

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/new/song">
            <SongCreate />
          </Route>
        </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
