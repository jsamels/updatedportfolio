export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a junior at Indiana University, studying Informatics with a cognate in Business and a minor in Human-Computer Interaction and Design (HCI/D). Over the course of my studies, I've developed technical skills in Python, HTML, MySQL, and SQL. My HCI/D courses have helped me learn how to analyze real-world problems, model user interactions, design and build functional databases, write advanced SQL queries, and create web-based portals to interact with data.
              </p>
              <p>
                My business minor has added to this foundation, giving me a strong understanding of information systems and hands-on experience with tools like Excel and Access. These skills, combined with leadership roles such as serving as recruitment chair for my fraternity and working on group projects, have also strengthened my teamwork and communication abilities.
              </p>
              <p>
                Outside of academics, I enjoy graphic design, DJing, and golf, which allow me to express creativity and stay balanced. I'm excited to continue growing my skills and applying them to real-world projects in the future.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <img
                src="https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NjQwOTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="John Samels Headshot"
                className="relative rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
