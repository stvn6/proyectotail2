import React from 'react';

const Button = (props) => {
    return (
        <button className="bg-gray-600 text-white font-[Poppins] py-1.5 px-5 rounded md:ml-8 hover:bg-indigo-400 duration-500">
            {props.children}
        </button>
    )
}
export default Button;