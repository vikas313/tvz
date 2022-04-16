import React, { Fragment } from 'react'
import img1 from './CardImages/AreaQ.jpeg';
import img2 from './CardImages/19-02.jpeg';
import img3 from './CardImages/1911 Revolution.jpeg';
import img4 from './CardImages/Christmas Story.jpeg';
import img5 from './CardImages/Einstein.jpeg';
import img6 from './CardImages/Fighter.jpeg';
import img7 from './CardImages/FirstDog.jpeg';
import img8 from './CardImages/Hell\'s gate.jpeg';
import img9 from './CardImages/Medici.jpeg';
import img10 from './CardImages/Modus.jpeg';
import img11 from './CardImages/Picnic.jpeg';
import img12 from './CardImages/Wolf Creek.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
export default function Logedin() {
    let arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]

    let [count, setcount] = useState(0)
    let [secount, setsecount] = useState(5)
    const handlefront = () => {
        if (secount < arr.length) {
            setcount(secount);
            setsecount(prev => prev + 5);
            console.log('front clicked')
        }
    }
    const handlebackbtn = () => {
        if (count >= 5) {
            setcount(prev => prev - 5);
            setsecount(prev => prev - 5);
        }
    }
    return (
        <div className='logged' >
            <header className='appbarlogged' >
                <section className='appbarside1' >
                    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M111.513 17.7858C113.26 15.7557 114.885 13.8992 116.389 12.2161L120 8.20315V0.75708H88.9557L90.7316 9.9745H105.601C104.262 11.5602 102.801 13.3316 101.218 15.2886C99.6355 17.2456 98.0377 19.265 96.4246 21.3468C94.8024 23.4468 93.2593 25.5195 91.7953 27.5648C91.0405 28.627 90.342 29.6526 89.6998 30.6418H71.4933C72.3544 29.5405 73.3057 28.5127 74.3375 27.5693C75.5153 26.4676 76.6597 25.4754 77.7706 24.5927C78.7506 23.774 79.7306 22.9401 80.7107 22.0909C81.6679 21.2676 82.5397 20.3499 83.3129 19.3517C84.0647 18.3848 84.6792 17.3186 85.1391 16.1834C85.6084 14.9791 85.8409 13.6956 85.8239 12.4033C85.8414 10.8092 85.5755 9.22478 85.0386 7.72379C84.5238 6.31806 83.6837 5.05405 82.587 4.035C81.3305 2.91314 79.8371 2.08919 78.218 1.62449C76.2894 1.06571 74.291 0.784401 72.2831 0.789037V0.75708H54.1906V0.843822H54.1449C53.6336 2.75518 53.0341 4.82632 52.3462 7.05725C51.6584 9.28818 50.9492 11.5435 50.2188 13.8231C49.467 16.0997 48.7061 18.3169 47.9361 20.4748C47.1661 22.6327 46.4523 24.5927 45.7949 26.3549C45.0919 24.5897 44.366 22.6296 43.6173 20.4748C42.8686 18.3199 42.1274 16.1027 41.394 13.8231C40.6544 11.5435 39.9437 9.28818 39.2619 7.05725C38.5802 4.82632 37.9715 2.75518 37.4358 0.843822L0 0.75708V10.0476H10.9112V39.5123H21.8132V10.0476H28.4284C29.9121 14.3298 31.4369 18.4341 33.0165 22.3101C35.6949 28.8781 38.3352 34.6121 40.9374 39.5123H50.3694C52.9686 34.6091 55.6074 28.875 58.2857 22.3101C59.8425 18.4889 61.3491 14.444 62.81 10.221H71.3928C72.2549 10.195 73.0955 10.4931 73.7485 11.0565C74.0476 11.3537 74.2806 11.7106 74.4324 12.1039C74.5842 12.4972 74.6514 12.9181 74.6296 13.3392C74.6296 14.4744 74.0894 15.5777 73.0089 16.649C71.9285 17.7204 70.5056 18.9804 68.7403 20.4291C65.3924 23.1409 62.8571 25.7401 61.1345 28.2267C59.4132 30.6736 58.5031 33.5989 58.5322 36.5904V37.8733C58.536 38.3315 58.5695 38.789 58.6327 39.2429H120V30.6418H101.46C102.9 28.5631 104.499 26.4097 106.258 24.1818C108.018 21.954 109.769 19.8219 111.513 17.7858Z" fill="white" />
                    </svg>
                    <p>Movies</p>
                    <p>Series</p>
                    <p>Podcasts</p>
                    <p>Radio</p>

                </section>
                <section className='appbarside2' >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19 19L14.65 14.65" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <AccountCircleIcon color="secondary" className='account' />
                    <p>Name</p>
                    <ArrowDropDownIcon className='arrowdown' />

                </section>
            </header>
            <section className="imgbox" >
                <section className='imgbox1' >
                    <img src={img1} height="400" />
                </section>
                <section className='imgbox2' >
                    <h1>ARIA Q</h1>
                    <p>Aria Q</p>
                    <span>1hour 30 Minutes|
                        <button>2017</button>
                        <button>4+</button>
                        <button>Story</button>
                        <button>Animals</button>

                    </span>
                    <p>A cold wind blows, and snow starts to fall Mouse hides in a den that's cozy and small. <br />Snuggling into a wee-sized heap,ONE begins snoring and drifts off to sleep.<br /> Count to ten with these cuddly forest creatures as they settle down and hibernate for the winter.</p>
                    <p>Director: Justin Lin I Cast: David Kirshenbaum, Warren Riker, Michael Rosenblat...</p>
                    <button  className='watch' >WATCH NOW</button>
                    <svg  className='love' width="66" height="64" viewBox="0 0 66 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_109_238)">
                            <path d="M33.1165 44.4327L33.0045 44.5L32.9373 44.4579C11.7313 31.6822 19.009 19.3526 26.8801 19.5013C27.132 19.5013 27.3867 19.5266 27.6386 19.5575C30.8072 19.9419 32.2991 21.704 33.0045 23.2193C33.7071 21.704 35.2018 19.9419 38.3704 19.5715C46.485 18.5697 54.9355 31.2529 33.1165 44.4327Z" stroke="white" stroke-width="1.4" />
                        </g>
                        <defs>
                            <filter id="filter0_d_109_238" x="0.299805" y="0.799988" width="65.4004" height="62.5214" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="9" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_109_238" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_109_238" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </section>

            </section>

            <h3  className='content' >Related content</h3>
            <section className='imgarr' >

                <svg onClick={handlebackbtn} className='svg1' width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8235 34.1765L17.2505 34.6047V34V32.3333V32.2296L17.177 32.1563L2.9819 18L17.177 3.84368L17.2505 3.77042V3.66666V2V1.3953L16.8235 1.82346L1.61683 17.071L0.828461 17.8186L0.637173 18L0.828461 18.1814L1.61681 18.929L16.8235 34.1765Z" fill="white" stroke="white" stroke-width="0.5" />
                </svg>
                <span>
                    {arr.slice(count, secount).map(v => <img src={v} height="200" width={200} />)}
                </span>
                <svg onClick={handlefront} className='svg2' width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.17701 1.82346L0.75 1.3953V2V3.66667V3.77043L0.823465 3.84369L15.0186 18L0.823465 32.1563L0.75 32.2296V32.3333V34V34.6047L1.17701 34.1765L16.3836 18.929L17.172 18.1814L17.3633 18L17.172 17.8186L16.3837 17.071L1.17701 1.82346Z" fill="white" stroke="white" stroke-width="0.5" />
                </svg>

            </section>
            <p className='footer' > Copyright © 2022 . All rights reserved.  </p>
        </div>
    )
}
