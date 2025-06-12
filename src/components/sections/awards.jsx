import React from "react";
import { RiBookLine, RiMedal2Fill, RiTrophyFill } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const Awards = () => {
  return (
    <section>
      <div className="container ">
        <div className="resume-items">
          <div className="row">
            {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
            <div className="col-xl col-md">
              <div className="single-resume">
                <h2 className="text-center">Awards</h2>
                <div className="experience-list">
                  <Card
                    year={"2023"}
                    title={
                      "Gold Medal in Indonesia Inventors Day 2023 (IID 2023)"
                    }
                    institution={
                      "I have won a gold medal in IID 2023 in the event WINTEX (World Inventions Technology Expo) on category 'Education and Teaching Materials'. This event was held by the Indonesian Invention and Innovation Promotion Association (INNOPA) in collaboration with the Indonesian Ministry of Education, Culture, Research, and Technology. The event took place at the Aston Denpasar Hotel and Convention Center in Denpasar, Bali, Indonesia on 16-19 September 2023. This award is a recognition of my innovation in the field of education and teaching materials. I am very grateful for this achievement and hope to continue to contribute to the world of education through my innovations."
                    }
                    role={"Frontend Developer and UI/UX Designer"}
                  />
                  <Card
                    year={"2023"}
                    title={
                      "Incubation Award in Indonesia Inventors Day 2023 (IID 2023)"
                    }
                    institution={
                      "Category: Education and Teaching Materials. This award is a recognition of my innovation in the field of education and teaching materials. I am very grateful for this achievement and hope to continue to contribute to the world of education through my innovations."
                    }
                    role={"Frontend Developer and UI/UX Designer"}
                  />
                  <Card
                    year={"2023"}
                    title={
                      "3rd Place in Lomba Inovasi Digital Mahasiswa 2023 (LIDM 2023)"
                    }
                    institution={
                      "The Student Digital Innovation Competition is an event organized by the Indonesian Talent Development Center, the National Achievement Center of the Ministry of Education and Culture, as a comprehensive effort to improve soft skills, technological literacy, and achievements in the Industrial Revolution 4.0. In this competition, I won third place in the Digital Education Technology Innovation category. This achievement is recognition of my innovation in the field of education and educational materials. I am deeply grateful for this achievement and hope to continue contributing to the world of education through my innovations."
                    }
                    role={"Frontend Developer and UI/UX Designer"}
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

export default Awards;
const Card = ({ year, title, institution, role }) => {
  return (
    <SlideUp>
      <div className="resume-item">
        <div className="icon">
          <RiTrophyFill />
        </div>
        <div className="content">
          <span className="years">{year}</span>
          <h4>{title}</h4>
          <span className="company"> {institution} </span>
          <br />
          <span className="role">- as <strong>{role}</strong> </span>
        </div>
      </div>
    </SlideUp>
  );
};
