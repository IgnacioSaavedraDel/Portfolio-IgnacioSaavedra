import ProjectCard from "../atoms/ProjectCard";

export default function ProjectsGrid({ projects, loading }) {
  /*if (loading) {
    return (
      <div className="text-center text-gray-600 py-8">
        Cargando proyectos...
      </div>
    );
  }*/

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
