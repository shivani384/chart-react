import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk";
import reducer from "../src/store/reducers/reducer";
import {Provider} from "react-redux"
import {createStore, applyMiddleware,compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"


//const composeEnhancers = process.env.NODE_ENV === 'development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;
const store= createStore(reducer
  ,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
