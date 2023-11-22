import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TableContainer from './components/Table/TableContainer';
import DragonWidgetContainer from './components/DragonWidget/DragonWidgetContainer';
import NodeContainer from './components/Node/NodeContainer';
import LoginContainer from './components/Login/loginContainer';

function App(props) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                <Routes>
                        <Route path="/table" element={<TableContainer/>}/>
                        <Route path="/dragonwidget" element={<DragonWidgetContainer/>}/>
                        <Route path="/node" element={<NodeContainer/>}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
