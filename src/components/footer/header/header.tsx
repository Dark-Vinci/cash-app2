import { JSX } from 'react';

import scss from './header.module.scss';


export function Header(): JSX.Element {
    return (
        <div className={scss.container}>
            <div className={scss.text}>
                <h2>Do more with your money</h2>
            </div>

            <div className={scss.box}>
                <div className="box_text">Download Cash App</div>
                <div className="box_image">
                    <img src="../../../asset/images/a2022.png" alt="cash app imag" />
                </div>
            </div>
        </div>
    );
}