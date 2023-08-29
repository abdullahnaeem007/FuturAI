import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import { btnStyle, textStyle } from '../assets/styles';
import { useEffect } from 'react';

function Header(props) {
    const menu = [
        {
            name: 'Home',
            link: 'home' // Change this to the corresponding IDs of your sections
        },
        {
            name: 'Tools',
            link: 'tools'
        },
        {
            name: 'How to use',
            link: 'use'
        },
        {
            name: 'Revenue Model',
            link: 'revenue'
        },
        {
            name: 'Roadmap',
            link: 'roadmap'
        }
    ];

    return (
        <div className={`flex ${props.bg} flex-row justify-between items-center w-full px-4 md:px-12 py-4`}>
            <img src={logo} alt='logo' className='w-16'/>
            <div className='md:flex hidden space-x-6 flex-row justify-center items-center '>
                {menu.map((item, index) => (
                    <Link
                        to={item.link}
                        smooth={true}
                        offset={-20} // Adjust this offset as needed
                        key={index}
                        onClick={()=>{if(item.link=='home'){window.location.replace('/')}}}
                        className={`font-bold ${textStyle} hover:cursor-pointer hover:text-brandBlue text-white/70`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <button className={`bg-white/20 ${btnStyle}`}>Uniswap</button>
        </div>
    );
}

export default Header;
