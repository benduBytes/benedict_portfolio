"use client";

import React from 'react'; // Make sure React is imported
import { useSwiper } from "swiper/react";
import { PiCaretCircleDoubleRightFill, PiCaretCircleDoubleLeftFill } from "react-icons/pi";

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretCircleDoubleLeftFill className={iconsStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}> {/* Corrected to slideNext */}
                <PiCaretCircleDoubleRightFill className={iconsStyles} />
            </button>
        </div>
    )
}

export default WorkSliderBtns;
