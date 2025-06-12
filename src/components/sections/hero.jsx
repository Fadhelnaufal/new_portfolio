"use client";
import React from "react";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCircleFill,
  RiDownloadLine,
  RiShakeHandsLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiWhatsappFill,
} from "@remixicon/react";
import PartnersMarquee from "./partnersMarquee";
import SlideUp from "@/utlits/animations/slideUp";

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img
                  src={"/images/about/aku.svg"}
                  alt="About Me"
                  className="mb-3 rounded"
                />
                <h2 className="text-center">Fadhel Naufal A</h2>
                <p>Web Developer</p>
                <div className="about-social text-center">
                  <ul className="d-flex justify-content-center me-2">
                    <li className="">
                      <Link href="https://wa.me/6281217560338" target="_blank">
                        <RiWhatsappLine size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/badakmenyelam/" target="_blank">
                        <RiInstagramLine  size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/in/fadhelna/" target="_blank">
                        <RiLinkedinFill size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/fadhelnaufal" target="_blank">
                        <RiGithubLine size={20} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <p>Hello There!</p>
                <h2>
                  I’m Fadhel , a Freshgraduate of Informatics Engineering
                  Education at Universitas Negeri Malang.
                </h2>
                <div className="adress-field">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i>
                        <RiCircleFill size={14} />
                      </i>{" "}
                      Available for Freelancing
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <Link href="/" className="theme-btn">
                    Download CV <RiDownloadLine className="ms-2" size={15} />{" "}
                  </Link>
                </div>
              </div>
            </SlideUp>
            <SlideUp>
              <PartnersMarquee />
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
