// Projects data
const projects = [
    {
        id: 'medassist',
        title: 'MedAssist',
        category: 'UX Design',
        year: '2024',
        description: 'Healthcare app prototype designed to improve patient care and communication',
        longDescription: 'A holistic healthcare solution addressing language barriers and system inefficiencies through user centered design.',
        image: 'static/images/medassist.jpg',
        link: 'https://www.figma.com/proto/14sVrTySY5gvUj1RQH27oX/MedAssist?node-id=1-2&starting-point-node-id=1%3A2&t=CnYINFcT69tKKuqh-1',
        highlights: [
            'Conducted primary research with healthcare patients and workers',
            'Patient focused design based on multiple rounds of user testing',
            'Features medical records, multilingual support, and QR code check in',
            'Evolved from language barrier solution to holistic care platform'
        ],
        tags: ['Figma', 'User Research', 'Prototyping', 'Healthcare UX'],
    },
    {
        id: 'adventure',
        title: 'Adventure Outfitters',
        category: 'Full Stack Development',
        year: '2024',
        description: 'Complete web application for managing outdoor equipment rentals',
        longDescription: 'A comprehensive rental management system with live database integration and intuitive user interface.',
        image: 'static/images/adventureoutfitterslogo.jpg.jpeg',
        link: 'https://cgi.luddy.indiana.edu/~jsamels/i211_project/',
        highlights: [
            'Built with HTML, Python, MySQL, Flask, and Bootstrap',
            'Interactive responsive UI with live database updates',
            'Equipment checkout system with datetime tracking',
            'Complete CRUD functionality for all resources'
        ],
        tags: ['Python', 'MySQL', 'Flask', 'Bootstrap', 'Web Development'],
    },
    {
        id: 'landscape',
        title: 'Landscape Design',
        category: 'Design & Business',
        year: '2023',
        description: 'Professional landscape design applying UX principles to physical spaces',
        longDescription: 'Bridging digital UX and physical design through CAD software and client centered methodology.',
        image: 'static/images/landscapedesign.jpg.jpeg',
        highlights: [
            'Applied UX design principles to landscape architecture',
            'Used CAD software for precise measurements and planning',
            'Created rendered visualizations for client presentations',
            'Developed strong communication and feedback iteration skills'
        ],
        tags: ['CAD', 'Adobe Creative Suite', 'Client Communication', 'Design'],
    },
    {
        id: 'ea',
        title: 'Effective Altruism IUB',
        category: 'Web Development',
        year: '2024',
        description: 'Website development for university organization',
        longDescription: 'Tech team member developing digital presence for campus effective altruism chapter.',
        image: 'static/images/EA.jpg',
        link: 'https://www.facebook.com/IndianaUniversityEA/',
        highlights: [
            'Working with tech team to develop club website',
            'Focus on using technology for social impact',
            'Building platform to connect students with meaningful causes',
            'Applying web development skills for community benefit'
        ],
        tags: ['Web Development', 'Community', 'Social Impact'],
    },
    {
        id: 'graphic',
        title: 'Graphic Design Work',
        category: 'Visual Design',
        year: '2023-2024',
        description: 'Event graphics and social media design',
        longDescription: 'Creating engaging visual content for school events and fraternity activities.',
        image: 'static/images/graphicdesignlogo.jpg.jpeg',
        highlights: [
            'Managed high school social media with custom graphics',
            'Created designs for fraternity philanthropy events',
            'Developed brand identity for various campaigns',
            'Inspired pursuit of HCI/D minor'
        ],
        tags: ['Adobe Creative Suite', 'Social Media', 'Branding', 'Visual Design'],
    },
];

// Scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Open project modal
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    let highlightsList = project.highlights.map(h => `<li>${h}</li>`).join('');
    let tagsList = project.tags.map(t => `<span class="tag">${t}</span>`).join('');
    let linkHtml = project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="modal-link">View Project →</a>` : '';

    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="modal-body">
            <div class="modal-category">${project.category} · ${project.year}</div>
            <h3>${project.title}</h3>
            <p class="modal-description">${project.longDescription}</p>
            ${linkHtml}
            <div class="highlights-section">
                <h4>Key Highlights</h4>
                <ul class="highlights-list">
                    ${highlightsList}
                </ul>
            </div>
            <div class="modal-tags">
                ${tagsList}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('project-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'project-modal') {
        closeProjectModal();
    }
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
