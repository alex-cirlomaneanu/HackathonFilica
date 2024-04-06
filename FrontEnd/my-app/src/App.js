import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/shared/Layout";
import AppRoutes from "./AppRoutes";

function App() {
    return (
        <Layout>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route exact key={index} {...rest} element={element} />;
                })}
            </Routes>
        </Layout>
    );
}

export default App;
