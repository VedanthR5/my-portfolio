import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-8">
      <section className="container mx-auto">
        <h1 className="text-5xl text-blue-900 flex justify-center PlayFair p-2">
          Projects
        </h1>
        <h2 className="text-lg text-blue-700 flex justify-center mb-12 OpenSans">
          A look at the projects I've created!{" "}
        </h2>
        <section className="grid grid-cols2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16 ">
                <h3 className="text-green-400 text-4xl font-bold mb-2 hover:text-blue-400 PlayFair">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-black text-xs space-x-4 OpenSans">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Location</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-black font-semibold leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-900 font-bold hover:underline hover:text-blue-400 text-xl"
                  >
                    View the Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉🏾
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
