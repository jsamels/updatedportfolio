export function Interests() {
  const interests = [
    {
      title: 'Graphic Design',
      description: 'Creating visual content that tells stories and engages audiences',
      image: 'static/images/graphicdesignlogo.jpg.jpeg',
    },
    {
      title: 'DJing',
      description: 'Curating musical experiences and connecting with people through sound',
      image: 'static/images/rushgraphic.jpg',
    },
    {
      title: 'Golf',
      description: 'Finding balance and focus on the course',
      image: 'static/images/katescrew.jpg',
    },
  ];

  return (
    <section id="interests" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono font-medium text-[#2563EB]">BEYOND CODE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1220] mb-6">
            Personal Interests
          </h2>
          <p className="text-xl text-[#5B677A]">
            Creativity and balance come from diverse passions. Here's what I do when I'm not coding or designing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-[#F7F9FC]"
            >
              <img
                src={interest.image}
                alt={interest.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/50 to-transparent opacity-80"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  {interest.title}
                </h3>
                <p className="text-white/90">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-[#E6EAF2]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#0B1220] mb-4">
                Why This Matters
              </h3>
              <p className="text-lg text-[#5B677A] leading-relaxed">
                These interests aren't just hobbies—they shape how I approach design and development. 
                Graphic design enhances my visual thinking, DJing teaches me about timing and user experience, 
                and golf reminds me that precision and patience lead to excellence.
              </p>
            </div>
            <div className="bg-[#F7F9FC] rounded-2xl p-8 border border-[#E6EAF2]">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    ✦
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B1220] mb-1">Creativity</div>
                    <div className="text-sm text-[#5B677A]">Expressed through multiple mediums</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#22D3EE] rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    ◆
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B1220] mb-1">Balance</div>
                    <div className="text-sm text-[#5B677A]">Technical skills meet creative outlets</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    ◈
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B1220] mb-1">Community</div>
                    <div className="text-sm text-[#5B677A]">Connecting with others through shared passions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
