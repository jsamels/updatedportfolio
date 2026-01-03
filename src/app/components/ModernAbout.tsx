export function ModernAbout() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left side - Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#2563EB]/5 rounded-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="static/images/headshot.jpg"
                  alt="John Samels"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-mono font-medium text-[#2563EB]">ABOUT ME</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1220] mb-6 leading-tight">
                Building the Future, One Project at a Time
              </h2>
            </div>

            <div className="space-y-6 text-lg text-[#5B677A] leading-relaxed">
              <p>
                I'm a <span className="font-semibold text-[#0B1220]">senior at Indiana University</span>, studying Informatics with a cognate in Business and a minor in Human Computer Interaction and Design (HCI/D). My passion lies at the intersection of technology, design, and human behavior.
              </p>
              <p>
                Throughout my academic journey, I've developed a robust skill set in <span className="font-semibold text-[#0B1220]">Python, HTML, MySQL, and SQL</span>. But beyond the code, I've learned to analyze real world problems, model user interactions, and create experiences that truly matter to people.
              </p>
              <p>
                My business background has given me a strategic perspective on technology, while my HCI/D training ensures I never lose sight of the human element. Whether I'm designing databases, conducting user research, or leading my fraternity's recruitment efforts, I bring the same commitment to excellence and collaboration.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="p-6 bg-[#F7F9FC] rounded-xl border border-[#E6EAF2]">
                <div className="text-3xl font-bold text-[#2563EB] mb-2">Senior</div>
                <div className="text-sm text-[#5B677A]">Indiana University</div>
              </div>
              <div className="p-6 bg-[#F7F9FC] rounded-xl border border-[#E6EAF2]">
                <div className="text-3xl font-bold text-[#2563EB] mb-2">3 Areas</div>
                <div className="text-sm text-[#5B677A]">Informatics, Business, HCI/D</div>
              </div>
              <div className="p-6 bg-[#F7F9FC] rounded-xl border border-[#E6EAF2]">
                <div className="text-3xl font-bold text-[#2563EB] mb-2">Dean's List</div>
                <div className="text-sm text-[#5B677A]">4 Consecutive Semesters</div>
              </div>
              <div className="p-6 bg-[#F7F9FC] rounded-xl border border-[#E6EAF2]">
                <div className="text-3xl font-bold text-[#2563EB] mb-2">Leadership</div>
                <div className="text-sm text-[#5B677A]">Recruitment Chair</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
