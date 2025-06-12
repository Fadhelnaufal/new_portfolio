'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { RiArrowRightUpLine } from '@remixicon/react';
import SlideUp from '@/utlits/animations/slideUp';
import { projectsData } from '@/utlits/fackData/projectData';
import Image from 'next/image';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');

    const customCategoryOrder = ['Website', 'App', 'Game', 'Branding']; // ✅ Add this here

    const handleCategoryClick = (item) => {
        setCategory(item);
        setAnimationClass(getRandomAnimation());
    };

    // Get unique categories
    const filteredCategory = ['All'];
    projectsData.forEach(({ category }) => {
        if (!filteredCategory.includes(category)) {
            filteredCategory.push(category);
        }
    });

    // Sorted and filtered projects
    const filteredProjects = category === 'All'
    ? [...projectsData].sort((a, b) => {
        const indexA = customCategoryOrder.indexOf(a.category);
        const indexB = customCategoryOrder.indexOf(b.category);

        // If category is not in customCategoryOrder, put it at the end
        return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
    })
    : projectsData.filter(project => project.category === category);


    return (
        <section id="portfolio" className={`projects-area ${className}`}>
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>Projects & Experience</h2>
                                    <p>Here are some of my projects and experience.</p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <SlideUp>
                        <ul className="project-filter filter-btns-one justify-content-left pb-15">
                            {filteredCategory.map((item, id) => (
                                <li key={id} onClick={() => handleCategoryClick(item)} className={item === category ? "current" : ""}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SlideUp>
                    <div className="row project-masonry-active overflow-hidden">
                        {filteredProjects.map(({ id, category, src, title, description, slug }) => (
                            <Card
                                key={id}
                                id={id}
                                category={category}
                                src={src}
                                title={title}
                                description={description}
                                slug={slug}
                                animationClass={animationClass}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

const Card = ({ category, title, description, src, animationClass, id, slug }) => {
    return (
        <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
            <SlideUp delay={id}>
                <div className="project-item style-two">
                    <div className="project-image">
                        <Image width={383} height={249} sizes='100vw' style={{ width: "100%", height: "auto" }} src={src} alt="Project" />
                        <Link href={`/single-project/${slug}`} className="details-btn">
                            <RiArrowRightUpLine />
                        </Link>
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{category}</span>
                        <h3 className="title">{title}</h3>
                        <p className="me-2">
                            {description.length > 100 ? `${description.slice(0, 100)} …` : description}
                        </p>
                    </div>
                </div>
            </SlideUp>
        </div>
    );
};
