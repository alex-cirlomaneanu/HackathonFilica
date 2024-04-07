import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./pages/shared/Layout";
import AppRoutes from "./AppRoutes";
import React, {useState} from "react";
import ChatInterface from "./ChatInterface";


function App() {
    const [harvestRecords, setHarvestRecords] = useState([]);

    const addHarvestRecord = (record) => {
        setHarvestRecords([...harvestRecords, record]);
    };

    return (
        <Layout>
            <Routes>
                {AppRoutes.map((route, index) => {
                    // Clone the element and inject additional props
                    const element = React.cloneElement(route.element, {
                        harvestRecords,
                        addHarvestRecord,
                        key: index
                    });
                    return <Route key={index} path={route.path} element={element} />;
                })}
            </Routes>
            <ChatInterface />
        </Layout>
    );
}

export default App;
