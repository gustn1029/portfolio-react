
import React from 'react';
import { useState, useEffect,useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/header.css';
import Logo from '../img/logo.png';
import styled from 'styled-components';

interface MenuItem {
    id: number;
    title: string;
    path: string;
}

const menuItems:MenuItem[] = [
    {id: 1, title: 'home', path: '/'},
    {id: 2, title: 'about', path: '/about'},
    {id: 3, title: 'project', path: '/project'}
]

function Header() {

    const [thisItemId, setThisItemId] = useState<number | null>(1);
    const [isFly, setIsFly] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const headerHieght = headerRef.current?.clientHeight || 0;

    const handleScroll = (): void => {
        if(window.scrollY >= headerHieght - 20) {
            setIsFly(true);
        } else {
            setIsFly(false);
        }
    };

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [headerHieght]);

    function handleSetId(id:number): void {
        setThisItemId(id);
    };

    // style
    const FlyBox = styled.div`
        height: ${isFly ? headerHieght : 0}px;
    `;
    return (
        <div>
            <header className={`w-full px-8 py-4 flex justify-between items-center ${isFly ? 'fixed top-0 left-0 bg-gray-900/90' : 'relative top-auto left-auto bg-gray-900'} z-50`} ref={headerRef}>
                <Link to={'/'} className='animate-pulse text-gray-300'><img src={Logo} alt="logo" /></Link>
                <nav>
                    <h2 className="hidden">메뉴</h2>
                    <ul className='flex'>
                        {menuItems.map((item) => (
                            <li key={item.id} className='menu-item'>
                                <NavLink to={item.path}
                                    className={`${thisItemId === item.id ? 'text-white' : 'text-gray-500'} text-lg uppercase font-medium`}
                                    onClick={()=> handleSetId(item.id)}
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <FlyBox className={thisItemId === 1 ? '': 'mb-40'}></FlyBox>
        </div>
    );
}
export default Header;