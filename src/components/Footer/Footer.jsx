import React from 'react';
import ItemsContainer from "../Item/ItemsContainer.jsx";
import Logo from "../Logo/Logo.jsx";

const Footer = () => {
    return (
        <footer className="bg-[#592507] text-white items-center">
            <ItemsContainer />
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center items-center pt-2 text-white text-sm pb-8">
                <span className="flex justify-center items-center text-2xl">
                   <Logo> </Logo>
                </span>
                <span>© 2024 Appy. All rights reserved.</span>
                <span>Term. Privacy Policy</span>
            </div>
        </footer>
    )
}
export default Footer;