import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/ReduxStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
function RenderTreeApp() {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}
reportWebVitals();
RenderTreeApp(store.getState())

