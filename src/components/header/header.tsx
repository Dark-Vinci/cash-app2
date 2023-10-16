import { JSX, useState } from 'react';
import { SiCashapp } from 'react-icons/si';
import { SlMenu } from 'react-icons/sl';
import { RxCross2 } from 'react-icons/rx';

import scss from './header.module.scss';

export function Header(): JSX.Element {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
        return;
    };

    return (
        <div className={scss.container}>
            <div className={scss.right}>
                <SiCashapp color='transparent'/>
                <h4><a href=".">Cash App</a></h4>
            </div>

            <div className={scss.left}>
                <button type="button">Log in</button>
                <div 
                    className={scss.icon_container}
                    onClick={toggleMenu}
                    >
                    {
                        openMenu ? <RxCross2 /> : <SlMenu/>
                    }
                </div>
            </div>
        </div>
    );
}
