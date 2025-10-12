import { useState, useEffect } from "react";
import ProjectsGrid from "../components/molecules/ProjectsGrid";

function News() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/News.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando noticias:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex flex-col py-12 lg:py-20 items-center justify-center px-4 lg:px-8">
      <h1 className="text-2xl lg:text-4xl mb-6 lg:mb-8 text-gray-800 text-center">
        Noticias
      </h1>
      <ProjectsGrid projects={projects} loading={loading} />
    </main>
  );
}

export default News;
