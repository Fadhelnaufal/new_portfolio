import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import Link from 'next/link'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/aku.svg"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Fadhel Naufal, a Web Developer.
                                </h2>
                                <p>I am a Web Developer focused on building web-based applications with experience in creating responsive, functional, and modern user interfaces. A recent graduate in Informatics Engineering Education from the Universitas Negeri Malang (UM). I have a strong interest in web development, UI/UX design, and graphic design.</p>
                                <p>I am passionate about creating digital solutions that not only work well but also look visually appealing and user-friendly. With a strong willingness to learn and grow, I am ready to contribute to a team and take on new challenges in the world of web development.</p>
                                <div className="menu-btns">
                                    <Link href="/contact" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery