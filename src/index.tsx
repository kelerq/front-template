import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from 'templates/App';
import { store } from 'shared-state/store';
import { BrowserRouter } from 'react-router-dom';
import { loginCachedUserThunk } from 'shared-state/global/authorization/reducer';
import * as Toast from '@radix-ui/react-toast';
import * as Tooltip from '@radix-ui/react-tooltip';
import { QueryClient, QueryClientProvider } from 'react-query';

store.dispatch(loginCachedUserThunk({}));

const queryClient = new QueryClient();

const ConnectedApp = () => (
    <ReduxProvider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Tooltip.Provider>
                        <Toast.Provider>
                            <App />
                            <Toast.Viewport />
                        </Toast.Provider>
                    </Tooltip.Provider>
                </QueryClientProvider>
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
