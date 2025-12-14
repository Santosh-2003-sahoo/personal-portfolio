from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.secret_key = 'personal-folio-sahoo'  # Change this to a random string in production

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USERNAME')

mail = Mail(app)

# Sample data - replace with your own information
portfolio_data = {
    'current_year': 2025,
    'name': 'Santosh Sahoo',
    'title': 'Software Developer',
    'location': 'Maharashtra, India',
    'email': 'santosh.202.sho@gmail.com',
    'social_links': {
        'linkedin': 'https://linkedin.com/in/santosh-sahoo-abc',
        'github': 'https://github.com/Santosh-2003-sahoo'
    },
    'about': {
        'intro': 'As a Junior Developer 👨🏻‍💻, I possess an impressive arsenal of skills in Fullstack Technologies. Python & Java Framworks for Backend, Angular for building seemless UI, along with git, postman and Programming Languages like Python, C++ and Java. My expertise lies in crafting dynamic, engaging services through writing clean and optimized code and utilizing cutting-edge development tools and techniques.',
        'skills': ['HTML', 'CSS', 'JavaScript', 'React', 'C++', 'Java', 'Git', 'Bootstrap', 'Flask', 'Python'],
        'additional': 'I have a good hand in C++ Programming, giving my fair share of time in learning Data structures and algorithms. Also trying to exploring the world of AI ML.'
    },
    'education': [
        {
            'degree': 'Bachelor of Technology in Computer Science',
            'institution': 'Chitkara University, Punjab',
            'year': '2021 - 2025',
            'description': 'Graduated with honors. Maintaining CGPA of stright 9.67. Specialized in Algorithms and Development.'
        },
        {
            'degree': 'Higher Secondary Education',
            'institution': 'Kendriya Vidyalaya, Bhandara',
            'year': '2019 - 2021',
            'description': 'Completed with 85% marks in science stream.'
        }
    ],
    'experience': [
        {
            'position': 'Tech Analyst',
            'company': 'Wissen Technology',
            'year': 'Jun, 2025 - Present',
            'description': 'Working on Financial Domain Project, developing and maintaining web applications using Angular and Python. Collaborating with cross-functional teams to deliver high-quality software solutions.'
        },
        {
            'position': 'Tech Intern',
            'company': 'Wissen Technology',
            'year': 'Aug, 2024 -  Jun, 2025',
            'description': 'Onsite Working at Client Location Morgan Stanley, Working as Full Stack Developer with Angular and Python Technologies.'
        }
    ],
    'projects': [
        
        {
            'name': 'Rule Engine Service',
            'category': 'web',
            'description': 'A Logic oriented application. Takes Rules, convert it into Tree Structure (AST) and provides uitility to evaluate and combining multiple rules.',
            'technologies': ['Node.js', 'HTML5', 'Express', 'MongoDB'],
            'link': 'https://github.com/Santosh-2003-sahoo/App1-Rule-Engine-with-AST',
            'demo_link': 'https://app1-rule-engine-with-ast.onrender.com/'
        },
        {
            'name': 'Weather App',
            'category': 'web',
            'description': 'A responsive web app, provides real-time weather updates based on location. Along with weather forecast for next 5 days and some additional details.',
            'technologies': ['JavaScript', 'OpenWeather API', 'HTML', 'CSS'],
            'link': 'https://github.com/Santosh-2003-sahoo/App2-Weather-app',
            'demo_link': 'https://santosh-2003-sahoo.github.io/App2-Weather-app/'
        },
        {
            'name': "What'sApp Chat Analyzer",
            'category': 'web',
            'description': 'A web app that analyzes your WhatsApp chat data and provides insights like most used words, most active users, and more.',
            'technologies': ['Streamlit', 'Python', 'Pandas', 'Matplotlib'],
            'link': 'https://github.com/Santosh-2003-sahoo/Whatsapp_chat_analyzer',
            'demo_link': 'https://whatsapp-chat-analyzer-2hg8.onrender.com/'
        },
        {
            'name': 'Finance Tracker',
            'category': 'app',
            'description': 'A mobile app to track your expenses and income, tracking each spending from multiple sources and manage bills.',
            'technologies': ['Python', 'MongoDB', 'Flask', 'React Native'],
            'link': 'https://github.com/Santosh-2003-sahoo/budget-app-ui',
            'demo_link': ''
        }
        
    ]
}

@app.route('/')
def index():
    return render_template('index.html', data=portfolio_data)

@app.route('/about')
def about():
    return render_template('about.html', data=portfolio_data)

@app.route('/projects')
def projects():
    return render_template('projects.html', data=portfolio_data)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        try:
            # Get form data
            name = request.form.get('name')
            contact_number = request.form.get('contact_number', 'Not provided')
            email = request.form.get('email')
            project_details = request.form.get('project_details')
            
            # Create email message
            msg = Message(
                subject=f"New Contact Form Submission from {name}",
                recipients=[os.getenv('RECIPIENT_EMAIL')],
                body=f"""
                New message from your website contact form:
                
                Name: {name}
                Email: {email}
                Contact Number: {contact_number}
                
                Project Details:
                {project_details}
                """,
                html=f"""
                <h2>New message from your website contact form</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Contact Number:</strong> {contact_number}</p>
                <h3>Project Details:</h3>
                <p>{project_details}</p>
                """
            )
            
            # Send email
            mail.send(msg)
            
            # Send confirmation email to the person who submitted the form
            confirmation = Message(
                subject="Thank you for contacting Santosh Sahoo",
                recipients=[email],
                body=f"""
                Hi {name},
                
                Thank you for reaching out! I've received your message and will get back to you as soon as possible.
                
                Best regards,
                Santosh Sahoo
                """,
                html=f"""
                <h2>Thank you for reaching out!</h2>
                <p>Hi {name},</p>
                <p>I've received your message about your project and will review it shortly. 
                I'll get back to you as soon as possible.</p>
                <p>Best regards,<br>Santosh Sahoo</p>
                """
            )
            mail.send(confirmation)
            
            # Flash success message
            flash('Your message has been sent successfully!', 'success')
            return redirect(url_for('index'))
            
        except Exception as e:
            # Log the error (in a production environment)
            print(f"Error sending email: {e}")
            
            # Flash error message
            flash('There was an error sending your message. Please try again later.', 'error')
            return redirect(url_for('contact'))
        
    return render_template('contact.html', data=portfolio_data)

@app.route('/personal-project')
def personal_project():
    return render_template('personal_project.html', data=portfolio_data)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)