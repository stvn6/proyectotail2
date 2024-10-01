import React from 'react';
import ItemsContainer from "../Item/ItemsContainer.jsx";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white items-center">
            <ItemsContainer />
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center items-center pt-2 text-gray-400 text-sm pb-8">
                <span className="flex justify-center items-center">
                    <ion-icon name="logo-ionitron"></ion-icon>
                </span>
                <span>© 2024 Appy. All rights reserved.</span>
                <span>Term. Privacy Policy</span>
            </div>
        </footer>
    )
}
export default Footer;