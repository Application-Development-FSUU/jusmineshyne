interface SkillCategory {
  category: string
  skills: string[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    { category: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools', skills: ['Git', 'Docker', 'Webpack', 'Vite', 'VS Code'] },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
