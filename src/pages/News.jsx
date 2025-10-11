import { useState, useEffect } from "react";
import ProjectsGrid from "../components/molecules/ProjectsGrid";

function News() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("src/assets/data/News.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando proyectos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex flex-col py-20 items-center justify-center">
      <h1 className="text-3xl mb-8 text-gray-800">Proyectos Musicales</h1>
      <ProjectsGrid projects={projects} loading={loading} />
    </main>
  );
}

export default News;
