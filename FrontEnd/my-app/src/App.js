import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}>
                <Route path="login" element={<Home/>} />
                <Route path="singup" element={<Home/>} />
                <Route path="store" element={<Home/>} />
            </Route>
            <Route index element={<Home/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
