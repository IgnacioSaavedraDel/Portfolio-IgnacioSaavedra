export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="w-full h-40 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
        <img src={project.image} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tag) => (
          <span
            key={tag}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.projectUrl}
        className="text-green-600 hover:text-green-800 font-medium text-sm inline-flex items-center gap-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Escuchar proyecto →
      </a>
    </div>
  );
}
