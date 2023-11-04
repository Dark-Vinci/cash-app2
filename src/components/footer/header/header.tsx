import { JSX } from 'react';

import scss from './header.module.scss';

import abc from '@images/a2022.png';

export function FooterHeader(): JSX.Element {
    return (
        <div className={scss.container}>
            <div className={scss.text}>
                <h2>Do more with your money</h2>
            </div>

            <div className={scss.box}>
                <DownloadLogoBox />
            </div>
        </div>
    );
}

export function DownloadLogoBox(): JSX.Element {
    return (
        <div className={scss.box}>
            <div className={scss.box_text}>Download Cash App</div>
            <div className={scss.box_image}>
                <img
                    src={abc}
                    alt="cash-app-image"
                />
            </div>
        </div>
    );
}
