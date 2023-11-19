
import './index.css';
import store  from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


const renderEntire = (appState) => {
    root.render(
        <React.StrictMode>
            <App store={store} appState={appState} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}

renderEntire (store.getState());

store.subscribe( () => {
    const state = store.getState();
    renderEntire(state);
} );