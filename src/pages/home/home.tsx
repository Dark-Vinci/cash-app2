import { JSX, useState, useEffect } from 'react';

import style from './home.module.scss';

import {Header, Footer, FooterHeader} from '@components';

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
                    <div>
                        <div className={style.el}>DO MORE</div>
                        <div className={style.el}>WITH YOUR</div>
                        <div className={style.el}>
                            MONEY
                        </div>
                        <FooterHeader />
                    </div>
                </div>

                <div className={style.bank}>
                    {Array(1000).fill('ABC').toString()}
                </div>

                <div className={style.bitcoin}>
                    {Array(1000).fill('999').toString()}
                </div>

                <div className={style.stock}>
                    {Array(1000).fill('XXX').toString()}
                </div>

                <div className={style.explore}>
                    {Array(1000).fill('ZZZ').toString()}
                </div>

                <div className={style.footer}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
