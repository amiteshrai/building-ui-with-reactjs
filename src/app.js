import React from "react";
import "./app.css";
import TreeExplorer from './components/treeview/treeExplorer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>React Fundamentals</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div className="App-intro">
                <TreeExplorer />
            </div>
        </div>
    );
}

export default App;
