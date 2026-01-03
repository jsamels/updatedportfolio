export function ModernHero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-sm font-mono font-medium">
                  Available for Internships
                </span>
              </div>
              <div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#0B1220] leading-[0.95] tracking-tight">
                  John Samels
                </h1>
                <div className="h-1.5 w-20 bg-[#2563EB] mt-6 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-xl sm:text-2xl text-[#0B1220] leading-relaxed">
              Informatics Student & UX Designer
            </p>
            <p className="text-lg text-[#5B677A] leading-relaxed">
              Crafting digital experiences at Indiana University
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('work')}
                className="px-8 py-4 bg-[#2563EB] text-white font-medium rounded-lg hover:bg-[#1D4ED8] transition-all duration-200 hover:shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-[#2563EB] font-medium rounded-lg border-2 border-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#E6EAF2]">
              <div>
                <div className="text-4xl font-bold text-[#2563EB]">3.5</div>
                <div className="text-sm text-[#5B677A] font-medium mt-1">GPA</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2563EB]">5+</div>
                <div className="text-sm text-[#5B677A] font-medium mt-1">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2563EB]">3+</div>
                <div className="text-sm text-[#5B677A] font-medium mt-1">Years</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#2563EB]/5 rounded-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="static/images/headshot.jpg"
                  alt="John Samels"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-[#5B677A] animate-bounce">
          <span className="text-xs font-medium font-mono">SCROLL</span>
          <div className="w-px h-8 bg-[#E6EAF2]"></div>
        </div>
      </div>
    </section>
  );
}
