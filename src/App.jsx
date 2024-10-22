import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "../src/components/Footer/Footer.jsx"
import Header from "../src/components/Header/Header.jsx"
import Home from './components/Home/Home';
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import ProductsPage from "./components/Products/Products.jsx";


function App() {

    return (
        <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/products' element={<ProductsPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    )
}
export default App