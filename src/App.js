import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Messages/Dialogs";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Routes className='app-wrapper-content'>
                    <Route path="/profile" element={<Profile posts={props.appState.posts}/>}/>
                    <Route path='/dialogs/:id' element={<Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
 