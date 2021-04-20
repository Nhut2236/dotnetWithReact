import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./scss/global.scss";

const app = (
   <App />
);

ReactDOM.render(app, document.getElementById('root'))
