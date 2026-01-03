const achievements = [
  {
    title: 'Dean\'s List',
    detail: '4 Consecutive Semesters',
    description: 'Luddy School of Informatics, Computing, and Engineering',
  },
  {
    title: '3.5 GPA',
    detail: 'Academic Excellence',
    description: 'Maintaining strong performance across technical and business coursework',
  },
  {
    title: 'Triple Focus',
    detail: 'Informatics + Business + HCI/D',
    description: 'Interdisciplinary approach combining technology, design, and business',
  },
];

const courses = [
  {
    code: 'I308',
    title: 'Information Representation',
    focus: 'Database Design & SQL',
    skills: ['Relational Databases', 'SQL Queries', 'Data Modeling', 'Web Portals'],
  },
  {
    code: 'I300',
    title: 'Human Computer Interaction',
    focus: 'User Centered Design',
    skills: ['User Research', 'Prototyping', 'Personas', 'Usability Testing'],
  },
  {
    code: 'I210',
    title: 'Problem Solving & Programming',
    focus: 'Python Development',
    skills: ['Python', 'Object Oriented Design', 'Problem Decomposition', 'Code Efficiency'],
  },
  {
    title: 'Data Fluency',
    focus: 'Data Analysis & Visualization',
    skills: ['Quantitative Analysis', 'Data Visualization', 'Statistical Reasoning', 'Communication'],
  },
  {
    title: 'Multimedia Arts & Technology',
    focus: 'Creative Technology',
    skills: ['Multimedia Design', 'Technical Creativity', 'Project Management', 'Collaboration'],
  },
  {
    title: 'Business Information Systems',
    focus: 'Business Technology',
    skills: ['Excel', 'Access', 'Systems Analysis', 'Business Processes'],
  },
];

export function ModernAcademics() {
  return (
    <section id="academics" className="py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono font-medium text-[#2563EB]">EDUCATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1220] mb-6">
            Academic Excellence
          </h2>
          <p className="text-xl text-[#5B677A]">
            Building expertise at the intersection of technology, design, and business at Indiana University.
          </p>
        </div>

        {/* Institution */}
        <div className="mb-16 p-8 bg-white rounded-2xl border border-[#E6EAF2]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-[#0B1220] mb-4">Indiana University</h3>
              <div className="text-xl text-[#0B1220] mb-2">Bachelor of Science in Informatics</div>
              <div className="text-[#5B677A]">Expected Graduation: 2026</div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-mono text-[#5B677A] mb-1">COGNATE</div>
                <div className="text-lg font-semibold text-[#0B1220]">Business</div>
              </div>
              <div>
                <div className="text-sm font-mono text-[#5B677A] mb-1">MINOR</div>
                <div className="text-lg font-semibold text-[#0B1220]">Human Computer Interaction & Design (HCI/D)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#0B1220] mb-8">Achievements & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-[#E6EAF2] hover:border-[#2563EB] hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-2xl font-bold text-[#0B1220] mb-2">{achievement.title}</h4>
                <div className="text-lg text-[#2563EB] mb-3">{achievement.detail}</div>
                <p className="text-[#5B677A] text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div>
          <h3 className="text-3xl font-bold text-[#0B1220] mb-8">Relevant Coursework</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-[#E6EAF2] hover:border-[#2563EB] hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  {course.code && (
                    <div className="text-sm font-mono text-[#2563EB] mb-2">{course.code}</div>
                  )}
                  <h4 className="text-xl font-bold text-[#0B1220] mb-1">{course.title}</h4>
                  <div className="text-[#5B677A]">{course.focus}</div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-[#F7F9FC] rounded-lg text-xs font-mono text-[#5B677A] border border-[#E6EAF2]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
