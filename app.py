from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Project data
projects = [
    {
        'id': 'medassist',
        'title': 'MedAssist',
        'category': 'UX Design',
        'year': '2024',
        'description': 'Healthcare app prototype designed to improve patient care and communication',
        'long_description': 'A holistic healthcare solution addressing language barriers and system inefficiencies through user centered design.',
        'image': 'static/images/medassist.jpg',
        'link': 'https://www.figma.com/proto/14sVrTySY5gvUj1RQH27oX/MedAssist?node-id=1-2&starting-point-node-id=1%3A2&t=CnYINFcT69tKKuqh-1',
        'highlights': [
            'Conducted primary research with healthcare patients and workers',
            'Patient focused design based on multiple rounds of user testing',
            'Features medical records, multilingual support, and QR code check in',
            'Evolved from language barrier solution to holistic care platform'
        ],
        'tags': ['Figma', 'User Research', 'Prototyping', 'Healthcare UX'],
    },
    {
        'id': 'adventure',
        'title': 'Adventure Outfitters',
        'category': 'Full Stack Development',
        'year': '2024',
        'description': 'Complete web application for managing outdoor equipment rentals',
        'long_description': 'A comprehensive rental management system with live database integration and intuitive user interface.',
        'image': 'static/images/adventureoutfitterslogo.jpg.jpeg',
        'link': 'https://cgi.luddy.indiana.edu/~jsamels/i211_project/',
        'highlights': [
            'Built with HTML, Python, MySQL, Flask, and Bootstrap',
            'Interactive responsive UI with live database updates',
            'Equipment checkout system with datetime tracking',
            'Complete CRUD functionality for all resources'
        ],
        'tags': ['Python', 'MySQL', 'Flask', 'Bootstrap', 'Web Development'],
    },
    {
        'id': 'landscape',
        'title': 'Landscape Design',
        'category': 'Design & Business',
        'year': '2023',
        'description': 'Professional landscape design applying UX principles to physical spaces',
        'long_description': 'Bridging digital UX and physical design through CAD software and client centered methodology.',
        'image': 'static/images/landscapedesign.jpg.jpeg',
        'highlights': [
            'Applied UX design principles to landscape architecture',
            'Used CAD software for precise measurements and planning',
            'Created rendered visualizations for client presentations',
            'Developed strong communication and feedback iteration skills'
        ],
        'tags': ['CAD', 'Adobe Creative Suite', 'Client Communication', 'Design'],
    },
    {
        'id': 'ea',
        'title': 'Effective Altruism IUB',
        'category': 'Web Development',
        'year': '2024',
        'description': 'Website development for university organization',
        'long_description': 'Tech team member developing digital presence for campus effective altruism chapter.',
        'image': 'static/images/EA.jpg',
        'link': 'https://www.facebook.com/IndianaUniversityEA/',
        'highlights': [
            'Working with tech team to develop club website',
            'Focus on using technology for social impact',
            'Building platform to connect students with meaningful causes',
            'Applying web development skills for community benefit'
        ],
        'tags': ['Web Development', 'Community', 'Social Impact'],
    },
    {
        'id': 'graphic',
        'title': 'Graphic Design Work',
        'category': 'Visual Design',
        'year': '2023-2024',
        'description': 'Event graphics and social media design',
        'long_description': 'Creating engaging visual content for school events and fraternity activities.',
        'image': 'static/images/graphicdesignlogo.jpg.jpeg',
        'highlights': [
            'Managed high school social media with custom graphics',
            'Created designs for fraternity philanthropy events',
            'Developed brand identity for various campaigns',
            'Inspired pursuit of HCI/D minor'
        ],
        'tags': ['Adobe Creative Suite', 'Social Media', 'Branding', 'Visual Design'],
    },
]

@app.route('/')
def index():
    return render_template('index.html', projects=projects)

@app.route('/api/projects')
def get_projects():
    return jsonify(projects)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
