import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiBootstrapFill, RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiNextjsFill, RiPhpFill, RiReactjsFill, RiTailwindCssFill } from '@remixicon/react';
import React from 'react'
import { faLaravel } from '@fortawesome/free-brands-svg-icons';
import Marquee from "react-fast-marquee";


const PartnersMarquee = () => {
    return (
        <div className="about-content-part-bottom">
            <h2>Tech Stack</h2>
            <div className="company-list">
                <div className="scroller">
                    <div className="scroller__inner">
                        <Marquee className='' speed={50} gradient={false} pauseOnHover>
                            <div className="company-item me-4">
                                <RiHtml5Fill size={50} color="#E34F26" />
                            </div>
                            <div className="company-item me-4">
                                <RiCss3Fill size={50} color="#1572B6" />
                            </div>
                            <div className="company-item me-4">
                                <RiJavascriptFill size={50} color="#F7DF1E" />
                            </div>
                            <div className="company-item me-4">
                                <RiTailwindCssFill size={50} color="#38B2AC" />
                            </div>
                            <div className="company-item me-4">
                                <RiBootstrapFill size={50} color="#563D7C" />
                            </div>
                            <div className="company-item me-4">
                               <FontAwesomeIcon icon={faLaravel} size="2xl" color="#FF2D20" />
                            </div>
                            <div className="company-item me-4">
                                <RiReactjsFill size={50} color="#61DAFB" />
                            </div>

                            <div className="company-item me-4">
                                <RiNextjsFill size={50} color="#ffffff" />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee