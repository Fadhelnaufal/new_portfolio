import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const year = "2023" // You can use new Date().getFullYear() for dynamic year
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="copyright-text text-center">
                                <p>
                                    Copyright @{year}, <Link href="https://www.instagram.com/badakmenyelam">Badakmenyelam</Link> All
                                    Rights Reserved.
                                </p>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="copyright-text extra-copyright">
                                <p>
                                    
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer