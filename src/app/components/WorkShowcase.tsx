import { useState } from 'react';

const projects = [
  {
    id: 'medassist',
    title: 'MedAssist',
    category: 'UX Design',
    year: '2024',
    description: 'Healthcare app prototype designed to improve patient care and communication',
    longDescription: 'A holistic healthcare solution addressing language barriers and system inefficiencies through user centered design.',
    image: 'static/images/medassist.jpg',
    link: 'https://www.figma.com/proto/14sVrTySY5gvUj1RQH27oX/MedAssist?node-id=1-2&starting-point-node-id=1%3A2&t=CnYINFcT69tKKuqh-1',
    highlights: [
      'Conducted primary research with healthcare patients and workers',
      'Patient focused design based on multiple rounds of user testing',
      'Features medical records, multilingual support, and QR code check in',
      'Evolved from language barrier solution to holistic care platform'
    ],
    tags: ['Figma', 'User Research', 'Prototyping', 'Healthcare UX'],
  },
  {
    id: 'adventure',
    title: 'Adventure Outfitters',
    category: 'Full Stack Development',
    year: '2024',
    description: 'Complete web application for managing outdoor equipment rentals',
    longDescription: 'A comprehensive rental management system with live database integration and intuitive user interface.',
    image: 'static/images/adventureoutfitterslogo.jpg.jpeg',
    link: 'https://cgi.luddy.indiana.edu/~jsamels/i211_project/',
    highlights: [
      'Built with HTML, Python, MySQL, Flask, and Bootstrap',
      'Interactive responsive UI with live database updates',
      'Equipment checkout system with datetime tracking',
      'Complete CRUD functionality for all resources'
    ],
    tags: ['Python', 'MySQL', 'Flask', 'Bootstrap', 'Web Development'],
  },
  {
    id: 'landscape',
    title: 'Landscape Design',
    category: 'Design & Business',
    year: '2023',
    description: 'Professional landscape design applying UX principles to physical spaces',
    longDescription: 'Bridging digital UX and physical design through CAD software and client centered methodology.',
    image: 'static/images/landscapedesign.jpg.jpeg',
    highlights: [
      'Applied UX design principles to landscape architecture',
      'Used CAD software for precise measurements and planning',
      'Created rendered visualizations for client presentations',
      'Developed strong communication and feedback iteration skills'
    ],
    tags: ['CAD', 'Adobe Creative Suite', 'Client Communication', 'Design'],
  },
  {
    id: 'ea',
    title: 'Effective Altruism IUB',
    category: 'Web Development',
    year: '2024',
    description: 'Website development for university organization',
    longDescription: 'Tech team member developing digital presence for campus effective altruism chapter.',
    image: 'static/images/EA.jpg',
    link: 'https://www.facebook.com/IndianaUniversityEA/',
    highlights: [
      'Working with tech team to develop club website',
      'Focus on using technology for social impact',
      'Building platform to connect students with meaningful causes',
      'Applying web development skills for community benefit'
    ],
    tags: ['Web Development', 'Community', 'Social Impact'],
  },
  {
    id: 'graphic',
    title: 'Graphic Design Work',
    category: 'Visual Design',
    year: '2023-2024',
    description: 'Event graphics and social media design',
    longDescription: 'Creating engaging visual content for school events and fraternity activities.',
    image: 'static/images/graphicdesignlogo.jpg.jpeg',
    highlights: [
      'Managed high school social media with custom graphics',
      'Created designs for fraternity philanthropy events',
      'Developed brand identity for various campaigns',
      'Inspired pursuit of HCI/D minor'
    ],
    tags: ['Adobe Creative Suite', 'Social Media', 'Branding', 'Visual Design'],
  },
];

export function WorkShowcase() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="work" className="py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono font-medium text-[#2563EB]">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1220] mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-[#5B677A]">
            A collection of projects spanning UX design, full stack development, and creative design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#E6EAF2] overflow-hidden hover:shadow-xl hover:border-[#2563EB] transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-[#F7F9FC]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-[#2563EB]">{project.category}</span>
                  <span className="text-xs text-[#5B677A]">·</span>
                  <span className="text-xs text-[#5B677A]">{project.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#5B677A] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#F7F9FC] rounded-full text-xs font-mono text-[#5B677A] border border-[#E6EAF2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1220]/50 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white hover:bg-[#F7F9FC] rounded-full shadow-lg transition-colors"
            >
              <span className="text-[#0B1220] text-2xl">×</span>
            </button>

            <div className="relative h-96 overflow-hidden bg-[#F7F9FC]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-12">
              <div className="mb-6">
                <span className="text-sm font-mono text-[#2563EB]">
                  {selectedProject.category} · {selectedProject.year}
                </span>
              </div>
              
              <h3 className="text-4xl font-bold text-[#0B1220] mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-xl text-[#5B677A] mb-8">
                {selectedProject.longDescription}
              </p>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg transition-colors mb-12 font-medium"
                >
                  View Project →
                </a>
              )}

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#0B1220]">Key Highlights</h4>
                <ul className="space-y-3">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#5B677A]">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-[#E6EAF2]">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#F7F9FC] rounded-lg text-sm font-mono text-[#5B677A] border border-[#E6EAF2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
