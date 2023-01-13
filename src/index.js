import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { store } from 'redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'

import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-07-phonebook">
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
