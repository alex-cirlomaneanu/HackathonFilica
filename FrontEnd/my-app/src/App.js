import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home";
import Greenhouses from "./pages/greenhouses/greenhouses";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./HelloWorld";

function App() {
  return (
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}>
                <Route path="login" element={<Home/>} />
                <Route path="singup" element={<Home/>} />
                <Route path="store" element={<Home/>} />
                <Route path="hello" element={<HelloWorld/>} />
                <Route path="greenhouses" element={<Greenhouses/>} />
            </Route>
            <Route index element={<Home/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
