import {JSX} from 'react';

import { FooterHeader } from './header';
import { FooterMain } from './main';
import { FooterBody } from './body';

export function Footer(): JSX.Element {
    return (
        <div className="container">
            {/* left */}
            <div className="left">
                <FooterHeader />
            </div>

            {/* right hand side */}
            <div className="right">
                <div className="main">
                    <FooterMain />
                </div>

                <div className="body">
                    <FooterBody />
                </div>
            </div>
        </div>
    );
}
