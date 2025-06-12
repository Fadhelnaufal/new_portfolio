import React from "react";
import Link from "next/link";
import { priceData } from "@/utlits/fackData/priceData";
import { RiArrowRightLine, RiShoppingBasketLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const Pricing = () => {
  return (
    <section className="pricing-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <p>Pricing</p>
                  <h2>Flexible Pricing Plan</h2>
                </div>
              </SlideUp>
            </div>
          </div>

          {/* Standard pricing cards */}
          <div className="row justify-content-center">
            {priceData.map(({ features, id, price, sortInfo, title }) => (
              <Card
                key={id}
                id={id}
                features={features}
                price={price}
                sortInfo={sortInfo}
                title={title}
              />
            ))}

            {/* Custom Plan Card */}
            <div className="col-lg col-md">
              <SlideUp delay={priceData.length}>
                <div className="pricing-item custom-plan">
                  <div className="pricing-details text-center">
                    <h4 className="title">Need a Custom Plan?</h4>
                    <p className="save-percent">
                      If you have any questions or need a tailored solution,
                      let’s connect and build what you need.
                    </p>

                    <div>
                      <Link href="/contact" className="theme-btn">
                        Contact Us{" "}
                        <i>
                          <RiArrowRightLine size={16} />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const Card = ({ id, title, price, sortInfo, features }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <SlideUp delay={id}>
        <div className="pricing-item">
          <div className="pricing-header">
            <h4 className="title">{title}</h4>
            <p
              className="save-percent"
              dangerouslySetInnerHTML={{ __html: sortInfo }}
            />
            <span className="price">{price}</span>
          </div>
          <div className="pricing-details">
            <ul>
              {features.map(({ id, feature, unable }) => (
                <li key={id} className={unable ? "unable" : ""}>
                  <i>
                    <RiArrowRightLine size={14} />
                  </i>
                  {feature}
                </li>
              ))}
            </ul>
              <Link href="#" className="theme-btn">
                Order Now{" "}
                <i>
                  <RiShoppingBasketLine size={16} />
                </i>
              </Link>
          </div>
        </div>
      </SlideUp>
    </div>
  );
};
