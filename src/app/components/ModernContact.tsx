export function ModernContact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-mono font-medium text-[#2563EB]">LET'S CONNECT</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1220] mb-6">
              Ready to collaborate?
            </h2>
            <p className="text-xl text-[#5B677A] leading-relaxed mb-8">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and design.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✉</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0B1220] mb-1">Email Response Time</div>
                  <div className="text-[#5B677A]">Typically within 24 to 48 hours</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#22D3EE]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">◆</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0B1220] mb-1">Available For</div>
                  <div className="text-[#5B677A]">Internships, projects, collaborations</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">◈</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0B1220] mb-1">Location</div>
                  <div className="text-[#5B677A]">Bloomington, IN (Open to remote)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact options */}
          <div className="space-y-6">
            <a
              href="mailto:johnsamels12@gmail.com"
              className="group block p-8 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-2xl text-white transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-mono font-medium opacity-90">PERSONAL EMAIL</div>
                <div className="text-2xl group-hover:translate-x-2 transition-transform">→</div>
              </div>
              <div className="text-2xl font-bold mb-2">johnsamels12@gmail.com</div>
              <div className="text-white/80">Best for general inquiries and opportunities</div>
            </a>

            <a
              href="mailto:jsamels@iu.edu"
              className="group block p-8 bg-white hover:bg-[#F7F9FC] rounded-2xl border-2 border-[#2563EB] text-[#0B1220] transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-mono font-medium text-[#2563EB]">SCHOOL EMAIL</div>
                <div className="text-2xl text-[#2563EB] group-hover:translate-x-2 transition-transform">→</div>
              </div>
              <div className="text-2xl font-bold mb-2">jsamels@iu.edu</div>
              <div className="text-[#5B677A]">Academic and university related matters</div>
            </a>

            <a
              href="https://www.linkedin.com/in/john-samels-9a5694291/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-[#F7F9FC] hover:bg-white rounded-2xl border border-[#E6EAF2] hover:border-[#2563EB] transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-mono font-medium text-[#2563EB]">LINKEDIN</div>
                <div className="text-2xl text-[#2563EB] group-hover:translate-x-2 transition-transform">→</div>
              </div>
              <div className="text-2xl font-bold text-[#0B1220] mb-2">Connect on LinkedIn</div>
              <div className="text-[#5B677A]">Professional networking and updates</div>
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 pt-20 border-t border-[#E6EAF2]">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-[#0B1220] mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-lg text-[#5B677A]">
              Whether you have a project in mind, want to discuss opportunities, or just want to chat about technology and design, I'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
