import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/index.jsx";
import {Contact} from "./pages/Contact/index.jsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    )
}