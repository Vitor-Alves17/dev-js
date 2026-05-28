import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Page404} from "./pages/Page404.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<Page404/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default App