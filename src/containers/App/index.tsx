import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Routes from '../../routes/__Routes';
import store from '../../store';
import ModalDetail from '../../components/ModalDetail';

const persistor = persistStore(store);

const App = (): JSX.Element => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ModalDetail>
          <Routes />
        </ModalDetail>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
