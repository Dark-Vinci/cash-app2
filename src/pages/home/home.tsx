import { NavLink } from "react-router-dom";
import { JSX } from 'react';

import scss from './home.module.scss';

import { Footer, Header, FooterHeader as Sticky } from '@components';

export function Home(): JSX.Element {
    return (
        <div className={scss.container}>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to='/login' 
                            replace={true} 
                            relative="path"
                            >login
                        </NavLink>
                    </li>
                    <li><NavLink to='/bitcoin'>bitcoin</NavLink></li>
                    <li><NavLink to='/spend'>spend</NavLink></li>
                    <li><NavLink to='/stock'>stock</NavLink></li>
                    <li><NavLink to='/send'>send</NavLink></li>
                    <li><NavLink to='/bank'>bank</NavLink></li>
                </ul>
            </nav>

            <h1>This is the home page</h1>

            <div className={scss.header}>
                <Header />
            </div>

            <div className={scss.footer}>
                <Footer />
            </div>

            <div className={scss.sticky}>
                <Sticky />
            </div>
        </div>
    );
}