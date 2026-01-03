export function ModernFooter() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7F9FC] text-[#0B1220] py-20 border-t border-[#E6EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-4xl font-bold font-mono mb-4 text-[#2563EB]">John Samels</div>
            <p className="text-[#5B677A] text-lg mb-6 max-w-md">
              Informatics student passionate about creating meaningful digital experiences through technology and design.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/john-samels-9a5694291/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-[#2563EB] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-[#E6EAF2]"
              >
                <span className="text-xl font-bold">in</span>
              </a>
              <a
                href="mailto:johnsamels12@gmail.com"
                className="w-12 h-12 bg-white hover:bg-[#2563EB] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-[#E6EAF2]"
              >
                <span className="text-xl">@</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#0B1220]">Navigation</h3>
            <div className="space-y-3">
              {['About', 'Work', 'Skills', 'Leadership', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className="block text-[#5B677A] hover:text-[#2563EB] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#0B1220]">Contact</h3>
            <div className="space-y-3 text-[#5B677A]">
              <a href="mailto:johnsamels12@gmail.com" className="block hover:text-[#2563EB] transition-colors">
                johnsamels12@gmail.com
              </a>
              <a href="mailto:jsamels@iu.edu" className="block hover:text-[#2563EB] transition-colors">
                jsamels@iu.edu
              </a>
              <div className="pt-2">
                <div className="text-sm">Bloomington, IN</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E6EAF2]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#5B677A] text-sm">
              © {new Date().getFullYear()} John Samels. All rights reserved.
            </div>
            <div className="text-[#5B677A] text-sm font-mono">
              Built with React + Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
