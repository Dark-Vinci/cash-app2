import { JSX } from 'react';

import scss from './header.module.scss';

export function FooterHeader(): JSX.Element {
    return (
        <div className={scss.container}>
            <div className={scss.text}>
                <h2>Do more with your money</h2>
            </div>

            <div className={scss.box}>
                <div className={scss.box_text}>Download Cash App</div>
                <div className={scss.box_image}>
                    <img src="../../../asset/images/a2022.png" alt="cash app imag" />
                </div>
            </div>
        </div>
    );
}
