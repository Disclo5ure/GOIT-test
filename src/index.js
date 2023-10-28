import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ContextProvider } from 'context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <ContextProvider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/GOIT-test">
            <App />
          </BrowserRouter>
        </PersistGate>
      </ContextProvider>
    </Provider>
  </>
);
