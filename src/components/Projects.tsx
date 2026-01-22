interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce platform with cart management and payment integration.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Modern weather dashboard with location-based forecasts and responsive design.',
      technologies: ['React', 'API Integration', 'CSS Grid'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <article key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-500">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`View source code of ${project.title} on GitHub`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
