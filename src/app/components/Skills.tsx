const skills = [
  {
    category: 'Development',
    items: ['Python', 'SQL & MySQL', 'HTML & CSS', 'Flask', 'JavaScript'],
  },
  {
    category: 'Design',
    items: ['User Research', 'Prototyping', 'Figma', 'Adobe Creative Suite', 'UI/UX Design'],
  },
  {
    category: 'Business',
    items: ['Data Analysis', 'Excel & Access', 'Project Management', 'Communication', 'Leadership'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono font-medium text-[#2563EB]">EXPERTISE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1220] mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-[#5B677A]">
            A comprehensive skill set combining technical development, user centered design, and business acumen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <div key={idx} className="bg-[#F7F9FC] rounded-2xl p-8 border border-[#E6EAF2]">
              <h3 className="text-2xl font-bold text-[#0B1220] mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-3">
                {category.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-3 py-2 text-[#5B677A] hover:text-[#2563EB] transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></div>
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-16 pt-16 border-t border-[#E6EAF2]">
          <h3 className="text-3xl font-bold text-[#0B1220] mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Python', 'SQL', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Flask', 
              'Bootstrap', 'Tailwind CSS', 'Figma', 'Adobe XD', 'Photoshop', 
              'Illustrator', 'Excel', 'Access', 'Git', 'VS Code', 'CAD Software'
            ].map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-white rounded-lg border border-[#E6EAF2] hover:border-[#2563EB] hover:shadow-md transition-all duration-200"
              >
                <span className="font-mono text-sm text-[#5B677A]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
