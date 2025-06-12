import React from "react";
import {
  RiBookLine,
  RiGraduationCapFill,
  RiLightbulbLine,
  RiTeamFill
} from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const Resume = () => {
  return (
    <section id="resume" className="resume-area">
      <div className="container ">
        <div className="resume-items">
          <div className="row">
            {/* EXPERIENCE SECTION */}
            <div className="col-xl col-md-6">
              <div className="single-resume">
                <h2>Experience</h2>
                <div className="experience-list">
                  <Card
                    year="Present (On Going)"
                    title="My Mosque"
                    institution="as Full Stack Developer"
                    icon={RiLightbulbLine}
                  />
                  <Card
                    year="2021 - 2023"
                    title="Edmon (Education Monitoring)"
                    institution="as Frontend Developer"
                    icon={RiLightbulbLine}
                  />
                  <Card
                    year="2021 - 2023"
                    title="CLearn (OOP Based on Gamification and Live Coding Website)"
                    institution="as UI/UX Designer and Frontend Developer"
                    icon={RiLightbulbLine}
                  />
                </div>
              </div>
            </div>

            {/* EDUCATION SECTION */}
            <div className="col-xl-6 col-md-6">
              <div className="experience-list">
                <div className="single-resume">
                  <h2>Education</h2>
                  <Card
                    year="2021 - 2025"
                    title="Bachelor Degree of Informatics Engineering Education"
                    institution="Universitas Negeri Malang"
                    icon={RiGraduationCapFill}
                  />
                  <Card
                    year="2018 - 2021"
                    title="Science Major"
                    institution="Senior High School 3 Ponorogo"
                    icon={RiGraduationCapFill}
                  />
                  <Card
                    year="2015 - 2018"
                    title="Junior High School"
                    institution="Junior High School 1 Jetis Ponorogo"
                    icon={RiGraduationCapFill}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

const Card = ({ year, title, institution, icon: Icon }) => {
  return (
    <SlideUp>
      <div className="resume-item">
        <div className="icon">
          <Icon /> {/* Render the icon component passed as prop */}
        </div>
        <div className="content">
          <span className="years">{year}</span>
          <h4>{title}</h4>
          <span className="company">{institution}</span>
        </div>
      </div>
    </SlideUp>
  );
};
