import { projectsData } from "@/utlits/fackData/projectData";
import Image from "next/image";

// Generate static paths for each project
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function SingleProject({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <div className="single-project-page-design">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center pb-30">
            <p>
              {project.category} - {project.client}
            </p>
            <h1>{project.title}</h1>
          </div>
        </div>
      </div>

      <div className="single-project-image">
        <Image
          width={1095}
          height={1072}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={project.src}
          alt={project.title}
          priority
        />
      </div>

      <div className="container pt-30">
        <div className="row">
          <div className="col-lg-4">
            <div className="single-project-page-left wow fadeInUp delay-0-2s">
              <div className="single-info">
                <p>Year</p>
                <h3>{project.year}</h3>
              </div>
              <div className="single-info">
                <p>Client</p>
                <h3>{project.client}</h3>
              </div>
              <div className="single-info">
                <p>Services</p>
                <h3>{project.service}</h3>
              </div>
              <div className="single-info">
                <p>Project</p>
                <h3>{project.type}</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="single-project-page-right wow fadeInUp delay-0-4s">
              <h2>Description</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </div>

        {project.gallery && (
          <div className="row pt-30">
            {project.gallery.map((img, i) => (
              <div className="col-lg-6" key={i}>
                <div className={`single-image wow fadeInUp delay-0-${i + 2}s`}>
                  <Image
                    width={633}
                    height={679}
                    sizes="100%"
                    style={{
                      width: "auto",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                    src={img}
                    alt={`gallery-${i}`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {project.videoUrl && (
          <div className="video-wrapper my-4">
            <div className="ratio ratio-16x9">
              <iframe
                src={project.videoUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
