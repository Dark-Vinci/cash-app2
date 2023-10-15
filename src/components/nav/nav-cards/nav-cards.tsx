import { JSX } from 'react'
import { uid } from 'uid';

import { NavCard } from './nav-card';
import scss from './nav-cards.module.scss';

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

export function NavCards(): JSX.Element {
    return (
        <div className={scss.nac_cards}>
            {
                state.map(
                    ({imgSRC, title, description}) => {
                    return (
                        <div
                            key={ uid() }
                        >
                            <NavCard
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