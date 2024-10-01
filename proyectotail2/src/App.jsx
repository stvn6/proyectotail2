import './App.css'
import Footer from "../src/components/Footer/Footer.jsx"
import Nav from "../src/components/Header/Header.jsx"
import Texto from "./components/Tittle/Tittles.jsx"

function App() {

    return (
        <>
            <div className="bg-gray-300 w-full h-screen">
                <Nav/>
                <Texto Titulo="Hello world!" Parrafo="Bienvenidos a mi Pagina Web"/>
            </div>
            <Footer />

        </>
    )
}
export default App