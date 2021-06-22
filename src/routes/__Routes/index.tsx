import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import InputText from '../../components/Input';
import HomePage from '../../containers/pages/HomePage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/buscaLivro" component={HomePage} />
      <Redirect from="*" to="/buscaLivro" />
    </Switch>
  );
}
