import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  Code,
  Database,
  Server,
  Cloud,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import placeholder images
import heroBackground from './assets/sPn35UzWj4HF.jpg'
import profilePlaceholder from './assets/m7xa0OEVDYdA.jpg'
import techBackground from './assets/kUIpklI9WUhn.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle smooth scrolling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML5/CSS3'],
    frameworks: ['Spring Framework', 'Hibernate', 'React.js', 'JUnit', 'Maven/Gradle'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    tools: ['Git', 'Docker', 'AWS', 'Jenkins', 'IntelliJ IDEA'],
    methodologies: ['Agile/Scrum', 'TDD', 'Clean Code', 'RESTful APIs']
  }

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application featuring user authentication, product catalog management, shopping cart functionality, and payment processing integration.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React.js', 'Docker'],
      features: [
        'User registration and authentication with JWT tokens',
        'Product search and filtering capabilities',
        'Shopping cart and checkout process',
        'Admin dashboard for inventory management',
        'Payment integration with Stripe API'
      ],
      challenges: 'Implemented caching with Redis to improve product search performance and designed scalable database schema to handle high transaction volumes.',
      image: techBackground
    },
    {
      title: 'Task Management API',
      description: 'A RESTful API for task management with team collaboration features. The application supports user authentication, project creation, task assignment, and real-time notifications.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS'],
      features: [
        'Multi-tenant architecture supporting multiple organizations',
        'Role-based access control (RBAC)',
        'Real-time notifications using WebSocket connections',
        'File attachment support with AWS S3 integration',
        'Comprehensive API documentation with Swagger'
      ],
      challenges: 'Implemented efficient database queries to handle complex filtering and sorting, and designed scalable architecture to support concurrent users.',
      image: techBackground
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'A web application that processes and visualizes large datasets for business intelligence. The system imports data from various sources and presents insights through interactive charts.',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'Chart.js', 'Bootstrap'],
      features: [
        'Data import from CSV, JSON, and database sources',
        'Real-time data processing with scheduled batch jobs',
        'Interactive charts and graphs for data visualization',
        'Export functionality for reports in PDF and Excel formats',
        'User-friendly dashboard with customizable widgets'
      ],
      challenges: 'Optimized data processing algorithms to handle millions of records and implemented efficient data aggregation using MongoDB aggregation pipeline.',
      image: techBackground
    },
    {
      title: 'Microservices Architecture Demo',
      description: 'A demonstration of microservices architecture implementing a simple banking system. The project showcases service discovery, load balancing, and circuit breakers.',
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Kubernetes'],
      features: [
        'Account management service with CRUD operations',
        'Transaction processing service with event sourcing',
        'Notification service for email and SMS alerts',
        'API Gateway for request routing and authentication',
        'Service discovery with Eureka Server'
      ],
      challenges: 'Implemented distributed transaction management across services and created comprehensive monitoring and logging solution.',
      image: techBackground
    }
  ]

  const experience = [
    {
      title: 'Software Developer Intern',
      company: 'TechCorp Solutions',
      period: 'June 2023 - August 2023',
      description: 'Contributed to the development of a customer relationship management (CRM) system using Java and Spring Framework.',
      achievements: [
        'Developed REST APIs for customer data management',
        'Improved application performance by 25% through database query optimization',
        'Participated in code reviews and agile development processes',
        'Created comprehensive unit tests achieving 85% code coverage'
      ]
    },
    {
      title: 'Freelance Java Developer',
      company: 'Self-Employed',
      period: 'September 2023 - Present',
      description: 'Providing custom software development services for small businesses and startups.',
      achievements: [
        'Built inventory management system for local retail business',
        'Developed automated reporting tools for accounting firm',
        'Created custom CRM solution for consulting company'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary">Alex Johnson</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-background/70"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <img
              src={profilePlaceholder}
              alt="Alex Johnson"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Alex Johnson
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary mb-6">
            Java Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building robust, scalable applications with clean code and innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-3"
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating efficient, maintainable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate Java developer with a strong foundation in object-oriented programming and software engineering principles. My journey in software development began during my computer science studies, where I discovered my love for creating efficient, maintainable code that solves real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in the Java ecosystem, I specialize in building enterprise-level applications using Spring Framework, developing RESTful APIs, and implementing microservices architectures. I have hands-on experience with both relational and NoSQL databases, and I'm comfortable working with cloud platforms to deploy scalable solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What drives me as a developer is the opportunity to transform complex business requirements into elegant, user-friendly applications. I believe in writing clean, well-documented code and following best practices such as Test-Driven Development (TDD) and continuous integration.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    Core Values
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quality First</h4>
                    <p className="text-sm text-muted-foreground">I prioritize writing maintainable, efficient code that stands the test of time</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">Technology evolves rapidly, and I'm committed to staying current with best practices</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">Great software is built by great teams working together toward common goals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Problem Solving</h4>
                    <p className="text-sm text-muted-foreground">I enjoy tackling complex challenges and finding innovative solutions</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5 text-primary" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5 text-primary" />
                  Frameworks & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5 text-primary" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cloud className="mr-2 h-5 w-5 text-primary" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5 text-primary" />
                  Development Methodologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.methodologies.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing practical experience and problem-solving capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges Solved:</h4>
                    <p className="text-sm text-muted-foreground">{project.challenges}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-lg">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Accomplishments:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                    <p className="text-muted-foreground">State University</p>
                  </div>
                  <Badge variant="outline">2020 - 2024</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>GPA:</strong> 3.7/4.0
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Certifications:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Oracle Certified Associate, Java SE 8 Programmer (2023)</li>
                    <li>• AWS Certified Cloud Practitioner (2023)</li>
                    <li>• Spring Professional Certification (In Progress)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities and exciting projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span>alex.johnson.dev@email.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Profiles</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of the channels above. I typically respond to emails within 24 hours and am always happy to discuss potential opportunities or answer any questions about my work.
                </p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Alex Johnson</h3>
              <p className="text-muted-foreground">
                Java Developer passionate about building robust, scalable applications with clean code and innovative solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Alex Johnson. All rights reserved. Built with React, Tailwind CSS, and deployed on AWS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

