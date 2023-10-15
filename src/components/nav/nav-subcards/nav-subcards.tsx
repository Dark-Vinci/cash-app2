import { JSX } from 'react';
import { uid } from 'uid';

import scss from './nav-subcards.module.scss';
import { NavSubCard } from '.';

interface Abc {
    readonly imgSRC: string;
    readonly title: string;
    readonly description: string;
}

const state: Array<Abc> = [
    {
        imgSRC: '',
        title: '',
        description: '',
    },
];

export function NavSubCards(): JSX.Element {
    return (
        <div className={scss.nav_sub_cards}>
            {
                state.map(
                    ({imgSRC, title, description}) => {
                    return (
                        <div
                            key={ uid() }
                        >
                            <NavSubCard
                                imageSRC={imgSRC}
                                title={title}
                                description={description}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}