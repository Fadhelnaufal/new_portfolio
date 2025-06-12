import { RiInstagramLine, RiMailLine, RiMapPinLine, RiPhoneLine, RiWhatsappLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiInstagramLine size={20} /></i>
                            </div>
                            <h2>Instagram:</h2>
                            <a className='text-decoration-none '>badakmenyelam</a>
                        </div>
                    </SlideUp>
                    <SlideUp delay={3}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact-icon">
                                <i> <RiWhatsappLine size={20} /></i>
                            </div>
                            <h2>contact number:</h2>
                            <p>+6281217560338</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={4}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <div className="contact-icon">
                                <i> <RiMailLine size={20} /></i>
                            </div>
                            <h2>Email address:</h2>
                            <p>fadhelnaufal12@gmail.com</p>
                        </div>
                    </SlideUp>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption