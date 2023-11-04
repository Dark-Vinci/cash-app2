import { JSX } from 'react';

import scss from './nav.module.scss';
import { NavCards, NavSubCards, LearnMore, StayInTouch } from '.';

const state = [
    'License',
    'Careers',
    'Press',
    'Support',
    'Legal',
];

export function Navigator(): JSX.Element {
    return (
        <div className={scss.container}>
            <h1>Do more with your money</h1>

            {/* main cards */}
            <div className={scss.nav_cards}>
                <NavCards />
            </div>

            {/* sub cards */}
            <div className={scss.nav_sub_cards}>
                <NavSubCards />
            </div>

            {/* learn more */}
            <div className={scss.learn_more}>
                <LearnMore 
                    state={state}
                />
            </div>

            {/* stay in touch */}
            <div className={scss.stay_in_touch}>
                <StayInTouch 
                    isFooter={false}
                />
            </div>
        </div>
    );
}
