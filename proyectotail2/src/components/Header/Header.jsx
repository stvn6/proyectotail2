import React, {useState} from 'react';
import Button from  "../Button/Button.jsx"
import SearchB from "../SearchB/SearchB.jsx"
import Nav from '../Nav/Nav.jsx';

const Header = () => {

    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full pt-0 fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7'>
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                <span className="text-3xl text-white mr-1 pt-2">
                        <ion-icon name="logo-ionitron"></ion-icon>
                </span>
                </div>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute text-white right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? "close-outline":"menu-outline"}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <div>
                        <Nav></Nav>
                    </div>
                    <Button>
                        SIGN IN
                    </Button>
                    <Button>
                        SIGN UP
                    </Button>
                </ul>
            </div>

        </div>
    )
}
export default Nav;