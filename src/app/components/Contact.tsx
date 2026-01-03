import { Mail, Linkedin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Feel free to reach out to me via email or LinkedIn. I look forward to connecting with you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="mailto:johnsamels12@gmail.com"
            className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                <Mail size={24} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Email</h3>
                <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                  johnsamels12@gmail.com
                </p>
              </div>
            </div>
          </a>

          <a
            href="mailto:jsamels@iu.edu"
            className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg group-hover:bg-purple-600 transition-colors">
                <Mail size={24} className="text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">School Email</h3>
                <p className="text-gray-600 group-hover:text-purple-600 transition-colors">
                  jsamels@iu.edu
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/john-samels-9a5694291/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Linkedin size={24} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn Profile</h3>
                <p className="text-gray-600 group-hover:text-blue-700 transition-colors">
                  Connect with me on LinkedIn
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <Send size={20} />
            <p>I typically respond within 24-48 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
