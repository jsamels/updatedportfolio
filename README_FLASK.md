# John Samels Portfolio - Flask Version

A modern, professional portfolio website built with HTML, CSS, Python (Flask).

## Features

- **Clean Modern Design** - Light color scheme with professional typography
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
- **Inter + JetBrains Mono Fonts** - Modern, readable typography
- **Blue Accent Color Scheme** - Professional tech aesthetic
- **Project Showcase** - Interactive project cards with modal details
- **Smooth Scrolling** - Professional navigation experience
- **Flask Backend** - Python-powered server

## Color Palette

### Light Mode
- Background: `#F7F9FC` (soft white)
- Surface: `#FFFFFF` (pure white)
- Text: `#0B1220` (near-black)
- Muted: `#5B677A` (professional gray)
- Primary: `#2563EB` (cool blue)
- Accent: `#22D3EE` (tech cyan)

## Installation & Setup

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Steps

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Application**
   ```bash
   python app.py
   ```

3. **Access the Portfolio**
   - Open your browser and navigate to: `http://localhost:5000`

## File Structure

```
portfolio/
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
├── templates/
│   └── index.html         # Main HTML template
├── static/
│   ├── css/
│   │   └── style.css      # All styles
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   └── images/            # Your portfolio images
│       ├── headshot.jpg
│       ├── medassist.jpg
│       ├── adventureoutfitterslogo.jpg.jpeg
│       ├── landscapedesign.jpg.jpeg
│       ├── EA.jpg
│       ├── graphicdesignlogo.jpg.jpeg
│       ├── rushgraphic.jpg
│       └── katescrew.jpg
```

## Customization

### Update Projects
Edit the `projects` list in `app.py`:

```python
projects = [
    {
        'id': 'unique-id',
        'title': 'Project Name',
        'category': 'Category',
        'year': '2024',
        'description': 'Short description',
        'long_description': 'Detailed description',
        'image': 'static/images/project.jpg',
        'link': 'https://project-url.com',
        'highlights': ['Point 1', 'Point 2'],
        'tags': ['Tag1', 'Tag2'],
    }
]
```

### Update Personal Information
Edit the HTML in `templates/index.html` to update:
- Contact information
- Education details
- Skills and experience
- Interests

### Modify Colors
Update color values in `static/css/style.css`:
- Search for hex colors like `#2563EB` and replace
- Update hover states and transitions

### Change Fonts
In `templates/index.html`, update the Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update font-family in `static/css/style.css`.

## Deployment

### Local Network
To access from other devices on your network:
```bash
python app.py
# Access via: http://YOUR_IP_ADDRESS:5000
```

### Production Deployment Options

1. **Heroku**
   - Add `Procfile`: `web: python app.py`
   - Deploy using Heroku CLI

2. **PythonAnywhere**
   - Upload files via web interface
   - Configure WSGI file

3. **DigitalOcean/AWS**
   - Use gunicorn: `pip install gunicorn`
   - Run: `gunicorn app:app`

4. **Vercel/Netlify**
   - Convert to static site or use serverless functions

## Features Breakdown

### Sections
- **Hero** - Introduction with stats
- **About** - Background and education focus
- **Work** - Project portfolio with modals
- **Skills** - Technical and soft skills (no progress bars)
- **Leadership** - Experience timeline
- **Interests** - Personal hobbies
- **Academics** - Education and coursework
- **Contact** - Multiple contact methods

### Interactive Elements
- Smooth scroll navigation
- Mobile-responsive menu
- Project detail modals
- Hover effects on cards
- Responsive grid layouts

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used
- **Backend**: Python 3, Flask
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Inter, JetBrains Mono (Google Fonts)
- **Design**: Custom CSS (no frameworks)

## License
© 2024 John Samels. All rights reserved.

## Contact
- Email: johnsamels12@gmail.com
- School: jsamels@iu.edu
- LinkedIn: [John Samels](https://www.linkedin.com/in/john-samels-9a5694291/)
