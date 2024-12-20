import React from 'react';

const Item = ({Links, title}) =>{
    return (
        <ul>
            <h1 className="mb-1 font-semibold">{title}</h1>
            {Links.map((Link) => (
                <li key={Link.name}>
                    <a className="text-white hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                       href={Link.link}>
                        {Link.name}</a>
                </li>
            ))}
        </ul>
    )
}
export default Item