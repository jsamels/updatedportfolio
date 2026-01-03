import { Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">John Samels</h3>
            <p className="text-gray-400">
              Informatics student passionate about UX design and web development
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() =>
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() =>
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() =>
                  document.getElementById('academics')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Academics
              </button>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/john-samels-9a5694291/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:johnsamels12@gmail.com"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © 2025 John Samels | Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
