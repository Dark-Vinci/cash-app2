import { JSX } from 'react';

import scss from './nav.module.scss';
import { NavCards, NavSubCards, LearnMore, StayInTouch } from '.';

export function Navigator(): JSX.Element {
    return (
        <div className={scss.container}>
            <h1>Do more with your money</h1>

            {/* main cards */}
            <div className="nav_cards">
                <NavCards />
            </div>

            {/* sub cards */}
            <div className="nav_sub_cards">
                <NavSubCards />
            </div>

            {/* learn more */}
            <div className="learn_more">
                <LearnMore />
            </div>

            {/* stay in touch */}
            <div className="stay_in_touch">
                <StayInTouch />
            </div>
        </div>
    );
}