import './App.css'
import Footer from "../src/components/Footer/Footer.jsx"
import Nav from "../src/components/Header/Header.jsx"
import Home from './components/Home/Home';


function App() {

    return (
        <>
        <BrowserRouter>
            <Nav/>
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