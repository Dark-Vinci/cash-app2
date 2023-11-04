import { JSX } from 'react';

import style from './footer.module.scss';

import { FooterHeader } from './header';
import { FooterMain } from './main';
import { FooterBody } from './body';

export function Footer(): JSX.Element {
    return (
        <div className={style.container}>
            {/* left */}
            <div className={style.left}>
                <FooterHeader />
            </div>

            {/* right hand side */}
            <div className={style.right}>
                <div className={style.main}>
                    <FooterMain />
                </div>

                <div className={style.body}>
                    <FooterBody />
                </div>
            </div>
        </div>
    );
}
