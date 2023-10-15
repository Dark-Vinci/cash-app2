import { JSX } from 'react';

import type { NavCardProps } from '@types';
import scss from './nav-subcard.module.scss';

export function NavSubCard({imageSRC, title, description}: NavCardProps): JSX.Element {
    return(
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
