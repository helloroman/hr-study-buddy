import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from 'views/Root.styles';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import Notes from 'views/Notes';
import React from 'react';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
