import { JSX } from 'react';
import { SiCashapp } from 'react-icons/si';
import { SlMenu } from 'react-icons/sl';

import scss from './header.module.scss';

export function Header(): JSX.Element {
    return (
        <div className={scss.container}>
            <div className={scss.right}>
                <SiCashapp color='transparent'/>
                <h4><a href=".">Cash App</a></h4>
            </div>

            <div className={scss.left}>
                <button type="button">Log in</button>
                <SlMenu />
            </div>
        </div>
    );
}
