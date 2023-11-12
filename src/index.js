
import './index.css';
import appState, {subscribe} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updatePost} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));


const renderEntire = (appState) => {
    root.render(
        <React.StrictMode>
            <App appState={appState} addPost={addPost} updatePost={updatePost}/>
        </React.StrictMode>
    );
}

renderEntire (appState);

subscribe(renderEntire);