import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import App from './App';
import configureStore from './store/configure-store'
import '../public/assets/css/style.css';

import localeData from '../build/locales/data.json';
addLocaleData([...en]);

const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

const initialStore = {
    login: {
        error: '',
        token: false
    },
    DCRList: {
        toggleHeader: true,
        isFull: false
    }
}
let store = configureStore(initialStore)


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <IntlProvider locale={language} messages={messages}>
            <App />
          </IntlProvider>
      </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
