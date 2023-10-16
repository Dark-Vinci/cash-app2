/* eslint-disable jsx-a11y/img-redundant-alt */
import { JSX } from 'react';

import type { NavCardProps } from '@types';
import scss from './nav-card.module.scss';

export function NavCard({imageSRC, title, description}: NavCardProps): JSX.Element {
    return (
        <div className={scss.navcard}>
            <div className={scss.image_container}>
                <img 
                    src={imageSRC}
                    alt={title} 
                />
            </div>

            <div className={scss.other_container}>
                {/* title */}
                <div>{title}</div>

                {/* description */}
                <div>{description}</div>
            </div>
        </div>
    );
}
