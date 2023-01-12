import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from 'app/templates';
import { store } from 'state/store';
import { BrowserRouter } from 'react-router-dom';
import { loginCachedUserThunk } from 'state/global/authorization/reducer';

store.dispatch(loginCachedUserThunk({}));

const ConnectedApp = () => (
    <ReduxProvider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </ReduxProvider>
);

ReactDOM.render(
    <React.StrictMode>
        <ConnectedApp />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
