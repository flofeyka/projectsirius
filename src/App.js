import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import VRContainer from './components/VR/VRContainer';
import TextareaContainer from './components/TextArea/TextareaContainer';
import TableContainer from './components/Table/TableContainer';
import DragonWidgetContainer from './components/DragonWidget/DragonWidgetContainer';

function App(props) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                <Routes>
                        <Route path="/textarea" element={<TextareaContainer/>}/>
                        <Route path="/table" element={<TableContainer/>}/>
                        <Route path="/dragonwidget" element={<DragonWidgetContainer/>}/>
                        <Route path="/VR" element={<VRContainer/>}/>
                </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
