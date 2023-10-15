import { JSX } from 'react';
import { VscTwitter } from 'react-icons/vsc';
import { PiLinkedinLogoFill } from 'react-icons/pi'
import { FaTwitch, FaInstagram } from 'react-icons/fa';
import { BiLogoTiktok } from 'react-icons/bi';

import scss from './stay-in-touch.module.scss';

// children?: React.ReactNode;
// size?: string | number;
// color?: string;
// title?: string;

export function StayInTouch(): JSX.Element {
    return (
        <div className={scss.stay_in_touch}>
            <h3>Stay in Touch</h3>

            <div className={scss.icon_container}>
                <VscTwitter color='white' />
                <PiLinkedinLogoFill color='white' />
                <FaTwitch color='white' />
                <FaInstagram color='white' />
                <BiLogoTiktok color='white' />
            </div>
        </div>
    );
}
