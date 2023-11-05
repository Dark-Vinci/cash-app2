import { JSX, useState, useEffect } from 'react';

import style from './home.module.scss';

import {Header, Footer, FooterHeader, DownloadLogoBox} from '@components';

export function Home(): JSX.Element {
    const [height, setHeight] = useState<number>(window.innerHeight);
    const updateDimensions = (): void => {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div className={style.container}>
            {/* LEARN MORE|> PAUSE |> NAV */}
            {/*the video background of the webpage*/}
            <div className={style.video_container}>
                <video
                    style={{ height: `${ height }px`, width: '100vw'}}
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src='https://videos.ctfassets.net/jwea2w833xe7/3y2LHtOPJFRAH891WycmcH/886c74f16b2d45aacd88bd6455be7b3c/WEB_HERO_16x9_x264_RF30.mp4'
                        type="video/mp4"
                    />
                </video>
            </div>

            {/*the main content of the web page*/}
            <div className={style.content_container} >
                <div className={style.nav}>
                    <Header />
                </div>

                <div className={style.content_header}>
                    <div className={style.word_content}>
                        <h1>
                            <span className={style.el}>DO MORE</span>
                            <span className={style.el}>WITH YOUR</span>
                            <span className={style.elem}>
                                <span>MONEY</span>
                                <span><DownloadLogoBox /></span>
                            </span>
                        </h1>

                        <div>
                            <div>
                                Send and spend, bank*, and buy stocks or bitcoin**
                            </div>

                            <div className={style.longer}>
                               <div>
                                   Cash App is a financial services platform, not a bank. Banking services are provided by Cash App’s bank partner(s). Prepaid debit cards issued by Sutton Bank. Brokerage services by Cash App Investing LLC, member FINRA/SIPC, subsidiary of Block, Inc. Bitcoin services provided by Block, Inc, formerly known as Square, Inc.
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
