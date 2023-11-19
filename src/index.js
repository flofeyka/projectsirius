import './index.css'
import reportWebVitals from './reportWebVitals';
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import store from "./redux/ReduxStore";
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

let RenderTreeApp = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
            </Provider>
        </React.StrictMode>
    )
}

reportWebVitals();
RenderTreeApp(store.getState())