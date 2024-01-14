import React from 'react';
import ReactDOM from 'react-dom/client';

import { render } from "react-dom";
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from './Layouts/MainLayout';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import store from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient()


const root = document.getElementById("root");
render(<Router>
  <Provider store={store}>
    {/* <MainLayout> */}
    <QueryClientProvider client={queryClient}>

      <App />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    {/* </MainLayout> */}
  </Provider>
</Router>, root);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


