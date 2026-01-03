import { Download, FileText } from 'lucide-react';

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Resume</h2>
          <p className="text-xl text-gray-600">
            Download my full resume to learn more about my experience and qualifications
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
              <FileText size={48} className="text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              John Samels - Resume
            </h3>

            <p className="text-gray-700 text-center mb-8 max-w-2xl">
              Informatics student with expertise in Python, SQL, web development, and user-centered design. Experienced in database management, UX research, and full-stack development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Resume download would be triggered here. Please add your actual resume PDF file.');
                }}
              >
                <Download size={20} />
                Download Resume (PDF)
              </a>
            </div>

            {/* Resume highlights */}
            <div className="mt-12 w-full grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">3.5</div>
                <div className="text-gray-600">GPA</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-600">Technical Skills</div>
              </div>
            </div>

            {/* Skills tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                'Python',
                'SQL',
                'MySQL',
                'HTML',
                'CSS',
                'Flask',
                'Bootstrap',
                'UX Design',
                'HCI',
                'Database Design',
                'Web Development',
                'Graphic Design',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
