import { JSX } from 'react';

import scss from './main.module.scss';
import { LearnMore, StayInTouch } from '../../nav';

const state = [
    'Licence',
    'Careers',
    'Press',
    'Support',
    'Legal',
    'Security',
    'Help',
    'Status',
];

export function FooterMain(): JSX.Element {
    return (
        <div className={scss.container}>
            {/* learn more */}
            <div className={scss.learn_more}>
                <LearnMore
                    state={state}
                />
            </div>

            <div className={scss.contact_stay_in_touch_container}>
                {/* stay in touch */}
                <div className={scss.stay_in_touch}>
                    <StayInTouch  
                        isFooter={true} 
                    />
                </div>

                {/* contact us */}
                <div className={scss.contact_us}>
                    <pre>
                        <strong>1 (800) 969-1940</strong>
                        9am - 7pm EST,
                        Monday to Friday
                    </pre>
                </div>
            </div>
        </div>
    );
}
