export function Leadership() {
  const experiences = [
    {
      role: 'Recruitment Chair',
      organization: 'Fraternity',
      period: '2023 – Present',
      description: 'Leading recruitment strategy and managing team of coordinators to grow chapter membership.',
      achievements: [
        'Developed comprehensive recruitment marketing campaign',
        'Coordinated events for 100+ potential new members',
        'Improved retention rates through enhanced onboarding process',
      ],
    },
    {
      role: 'Tech Team Member',
      organization: 'Effective Altruism IUB',
      period: '2024 – Present',
      description: 'Contributing to web development efforts for campus organization focused on maximizing social impact.',
      achievements: [
        'Building digital platform for student engagement',
        'Collaborating with cross functional team',
        'Applying technical skills for social good',
      ],
    },
    {
      role: 'Social Media Manager',
      organization: 'High School',
      period: '2021 – 2022',
      description: 'Managed school social media presence and created engaging content for school events.',
      achievements: [
        'Designed graphics for major school events',
        'Increased social media engagement by creating consistent content',
        'Developed brand identity for school communications',
      ],
    },
  ];

  return (
    <section id="leadership" className="py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono font-medium text-[#2563EB]">EXPERIENCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1220] mb-6">
            Leadership & Involvement
          </h2>
          <p className="text-xl text-[#5B677A]">
            Building communities, leading teams, and making an impact beyond the classroom.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-[#E6EAF2] hover:border-[#2563EB] hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <div className="inline-block px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-lg font-mono text-sm font-medium">
                    {exp.period}
                  </div>
                </div>

                <div className="md:col-span-9">
                  <h3 className="text-2xl font-bold text-[#0B1220] mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-[#5B677A] mb-4">{exp.organization}</div>

                  <p className="text-[#5B677A] mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achievementIdx) => (
                      <div key={achievementIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2"></div>
                        <span className="text-[#5B677A]">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
