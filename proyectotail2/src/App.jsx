import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "../src/components/Footer/Footer.jsx"
import Header from "../src/components/Header/Header.jsx"
import Home from './components/Home/Home';
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"


function App() {

    return (
        <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    )
}
export default App