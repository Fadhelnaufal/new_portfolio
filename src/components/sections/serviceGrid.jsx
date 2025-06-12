import React from 'react'
import { RiGlobalFill, RiGraduationCapFill, RiPantoneFill, RiPenNibFill, RiQuillPenLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiPenNibFill size={60} />} title={"UI/UX Design"} description={"designing interfaces that are not only visually appealing, but also easy to use. Our focus is on creating an intuitive and enjoyable user experience on every screen."} />

                        <Card id={2} icon={<RiGlobalFill size={60} />} title={"Website Development"} description={"Building fast, responsive, and functional websites and web-based applications—from landing pages to complex web systems. Built with the latest technology and best practices."} />

                        <Card id={3} icon={<RiGraduationCapFill size={60} />} title={"LMS Development"} description={"Developing an efficient and interactive Learning Management System (LMS) platform that facilitates the digital learning process. Suitable for educational institutions, corporate training, and online courses."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p className='text-justify'>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}