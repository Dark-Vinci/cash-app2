import { JSX } from 'react';
import { VscTwitter } from 'react-icons/vsc';
import { PiLinkedinLogoFill } from 'react-icons/pi'
import { FaTwitch, FaInstagram } from 'react-icons/fa';
import { BiLogoTiktok } from 'react-icons/bi';

import scss from './stay-in-touch.module.scss';
import {StayInTouchProps} from '@types';

export function StayInTouch({isFooter}: StayInTouchProps): JSX.Element {
    let iconClassName = scss.icon_nav_container;

    if (isFooter) {
        iconClassName = scss.icon_footer_container;
    }

    return (
        <div className={scss.stay_in_touch}>
            <h3>Stay in Touch</h3>

            <div className={iconClassName}>
                <VscTwitter color='white' />
                <PiLinkedinLogoFill color='white' />
                <FaTwitch color='white' />
                <FaInstagram color='white' />
                <BiLogoTiktok color='white' />
            </div>
        </div>
    );
}
