import { JSX } from 'react';
import { uid } from 'uid';

import scss from './learn-more.module.scss';
import { LearnMoreProps } from '@types';

export function LearnMore({state}: LearnMoreProps): JSX.Element {
    return (
        <div className={scss.learn_more}>
            <h3>Learn More</h3>
            <ul>
                {
                    state.map(el => {
                        return (
                            <div
                                key={ uid() } 
                                className={scss.element}
                                >
                                { el }
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
}
