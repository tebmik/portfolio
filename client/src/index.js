import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyles from './utils/global';
import App from './components/App';
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <>
                    <App />
                    <GlobalStyles />
                </>
            </ThemeProvider>
        </BrowserRouter>
        ,
    </Provider>,
    document.querySelector('#root')
);
