import { JSX, useState } from 'react';
import { SiCashapp } from 'react-icons/si';
import { SlMenu } from 'react-icons/sl';
import { RxCross2 } from 'react-icons/rx';

import style from './header.module.scss';

export function Header(): JSX.Element {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
        return;
    };

    return (
        <div className={style.container}>
            <div className={style.left}>
                <SiCashapp
                    color='white'
                    // enableBackground={'transparent'}
                    size={40}
                />
                <h4><a href="./cashapp">Cash App</a></h4>
            </div>

            <div className={style.right}>
                <div>
                    <button
                        type="button"
                        className={style.button}
                    >Log in</button>
                    <div
                        className={style.icon_container}
                        onClick={toggleMenu}
                    >
                        {
                            openMenu ? <RxCross2/> : <SlMenu/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
