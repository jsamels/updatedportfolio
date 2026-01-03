import { GraduationCap, Award, BookOpen } from 'lucide-react';

const courses = [
  {
    code: 'I308',
    title: 'Information Representation',
    description:
      'Learned to analyze real-world situations, model interactions, and design functional databases. Gained proficiency in SQL for creating and managing relational databases and developed web-based portals for data interaction.',
  },
  {
    code: 'I300',
    title: 'Human-Computer Interaction (HCI)',
    description:
      'Developed skills in user-centered design by conducting interviews, creating personas, and building prototypes. Learned to analyze qualitative data, conduct ethical user studies, and respond to feedback to refine designs.',
  },
  {
    code: 'I210',
    title: 'Problem Solving and Programming',
    description:
      'Learned problem decomposition, Python programming, object-oriented design, and how to write functional and efficient code. Strengthened troubleshooting and code safety skills.',
  },
  {
    title: 'Data Fluency',
    description:
      'Learned to interpret quantitative information, identify problems solvable with data-driven analysis, and effectively communicate findings. Developed skills in processing and visualizing data for informed decision-making.',
  },
  {
    title: 'Multimedia Arts and Technology',
    description:
      'Combined creative and technical skills, teaching design of multimedia projects and creation of engaging artifacts. Gained experience in teamwork and independent project execution.',
  },
];

export function Academics() {
  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My Academic Journey
          </h2>
          <p className="text-xl text-gray-600">
            Building a strong foundation in technology and design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <GraduationCap size={32} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Education</h3>
            <p className="text-gray-700 mb-2">
              <strong>Indiana University</strong>
            </p>
            <p className="text-gray-600">Bachelor's in Informatics</p>
            <p className="text-gray-600">
              Minors: Business, HCI/D
            </p>
            <p className="text-blue-600 font-bold mt-2">GPA: 3.5</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Award size={32} className="text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Achievements
            </h3>
            <p className="text-gray-700">
              Luddy School Dean's List
            </p>
            <p className="text-gray-600">
              4 consecutive semesters
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <BookOpen size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Skills
            </h3>
            <div className="text-gray-600 space-y-1">
              <p>Python, HTML, MySQL, SQL</p>
              <p>User-Centered Design</p>
              <p>Database Management</p>
              <p>Web Development</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Relevant Courses
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {course.code && `${course.code}: `}
                  {course.title}
                </h4>
                <p className="text-gray-700">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
