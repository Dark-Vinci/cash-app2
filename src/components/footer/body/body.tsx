import {JSX} from 'react';

import scss from './body.module.scss';

export function FooterBody(): JSX.Element {
    return (
        <div className={scss.container}>
            <div className={scss.item1}>
                *Cash App is a financial services platform, not a bank. 
                Banking services are provided by Cash App’s bank partner(s). 
                Brokerage services by Cash App Investing LLC, member FINRA/SIPC, 
                subsidiary of Block, Inc. Bitcoin services provided by Block, 
                Inc, formerly known as Square, Inc.
            </div>

            <div className={scss.item2}>
                Cash App waives ATM fees for all in-network withdrawals every month 
                you have at least $300 direct deposited into your Cash balance. Additional 
                information <a href="http://">here</a>.
            </div>

            <div className={scss.item3}>
                **Brokerage services by Cash App Investing LLC, member FINRA/SIPC, 
                subsidiary of Block, Inc. formerly known as Square, Inc. Investing involves risk; 
                you may lose money. Fractional shares may involve additional risks, 
                see your Account Agreement. Bitcoin services by Block, Inc. 
                Cash App Investing does not trade bitcoin and Block, 
                Inc. is not a member of FINRA or SIPC. **
            </div>

            <div className={scss.item4}>
                Fractional shares may involve additional risks. Fractional shares are not transferable. 
                For a complete explanation of conditions, restrictions and limitations 
                associated with fractional shares see our Cash App Investing Customer Account Agreement.
                <a href="http://">Cash App Investing Customer Account Agreement.</a>
            </div>

            <div className={scss.item5}>
                Additional fees for securities may apply such as regulatory fees and fees 
                to transfer securities externally. Please see our <a href="http://">House Rules </a> for more information.
            </div>

            <div className={scss.item6}>
                No content on this website shall be considered as a recommendation or 
                solicitation for the purchase or sale of securities. Stock company names 
                are shown for illustrative purposes only and are not endorsements.
            </div>
        </div>
    );
}