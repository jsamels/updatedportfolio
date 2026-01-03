import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  details?: string[];
  link?: string;
  additionalImages?: { url: string; caption: string }[];
}

const projects: Project[] = [
  {
    id: 'landscape',
    title: 'Landscape Design',
    image: 'https://images.unsplash.com/photo-1595387426256-cc153122a6f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBnYXJkZW4lMjBkZXNpZ258ZW58MXx8fHwxNzY2NDAxNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Professional landscape design and installation experience applying UX principles to physical spaces.',
    details: [
      'My experience in landscape design has provided me with a solid foundation in Business and UX design.',
      'Used CAD software to provide clients with exact measurements and detailed plans.',
      'Created physical rendered designs to help clients visualize the final product.',
      'Developed strong communication skills through client interactions and feedback incorporation.',
    ],
  },
  {
    id: 'medassist',
    title: 'MedAssist Project',
    image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMGFwcHxlbnwxfHx8fDE3NjY0MjMyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A holistic healthcare app prototype designed to improve patient care and communication.',
    link: 'https://www.figma.com/proto/14sVrTySY5gvUj1RQH27oX/MedAssist?node-id=1-2&starting-point-node-id=1%3A2&t=CnYINFcT69tKKuqh-1',
    details: [
      'Created a prototype app focusing on holistic patient care in the healthcare system.',
      'Conducted primary research with healthcare patients and workers.',
      'Patient-focused design based on user testing and feedback.',
      'Features include medical records, multilingual support, and QR code check-in.',
    ],
  },
  {
    id: 'adventure',
    title: 'Adventure Outfitters',
    image: 'https://images.unsplash.com/photo-1663648681648-df9b0465ce4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWR2ZW50dXJlJTIwY2FtcGluZ3xlbnwxfHx8fDE3NjY0MzQ2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Full-stack web application for managing outdoor equipment rentals.',
    link: 'https://cgi.luddy.indiana.edu/~jsamels/i211_project/',
    details: [
      'Developed using HTML, Python, MySQL, Flask, and Bootstrap.',
      'Interactive and responsive user interface with live database updates.',
      'Equipment checkout system with datetime tracking.',
      'Complete CRUD functionality for people and equipment management.',
    ],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1740174459718-fdcc63ee3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY2NDIzMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Creative designs for events, social media, and community engagement.',
    details: [
      'Ran high school social media creating graphics for school events.',
      'Designed graphics for fraternity philanthropy and recruitment events.',
      'Experience inspired HCI/D minor to deepen understanding of design impact.',
      'Focus on creating engaging visuals that connect with the community.',
    ],
  },
  {
    id: 'ea',
    title: 'Effective Altruism IUB',
    image: 'https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwY29tbXVuaXR5JTIwdm9sdW50ZWVyfGVufDF8fHx8MTc2NjQzNDY4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Working with the tech team to create a website for the Effective Altruism club.',
    link: 'https://www.facebook.com/IndianaUniversityEA/',
    details: [
      'Working with tech team to develop club website.',
      'EA aims to help others by using reason and evidence to identify best causes.',
      'Mission: bring Hoosiers together to maximize impact on the world.',
      'Focuses on using financial and technical skills for meaningful change.',
    ],
  },
  {
    id: 'future',
    title: 'Future Projects',
    image: 'https://images.unsplash.com/photo-1595623654300-b27329804025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwY29kZXxlbnwxfHx8fDE3NjY0MzQ2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Exciting new projects currently in development.',
    details: ['Stay tuned for upcoming projects and innovations!'],
  },
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600">
            A showcase of my work across design, development, and community engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedProject.title}
              </h3>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
                >
                  View Project <ExternalLink size={18} />
                </a>
              )}

              <div className="space-y-4 text-gray-700">
                {selectedProject.details?.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
