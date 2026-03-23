// ============================================
// PORTFOLIO DATA - VISHESH PAL
// ============================================

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'other'
  icon?: string
}

export interface Social {
  name: string
  url: string
  icon: string
}

export interface Certification {
  id: string
  title: string
  description: string
  certificateUrl: string
  date: string
}

export interface Service {
  title: string
  description: string
  icon: string
  color: string
}

// Personal Information
export const personalInfo = {
  name: 'Vishesh Pal',
  initials: 'VP',
  title: 'Software Engineer & Tech Innovator',
  subtitle: 'Building the Future Through Code',
  email: 'visheshpal4629@gmail.com',
  location: 'Delhi, India',
  resumeUrl: '/resume.pdf',
  bio: `I'm an ambitious Electronics Engineering student at ANDC College, Delhi University,
        with a deep passion for crafting digital experiences that push boundaries.
        My expertise spans full-stack development, cloud architecture, and emerging technologies like AI and IoT.
        I believe in the transformative power of technology and am dedicated to building solutions
        that make a meaningful impact.`,
  shortBio: 'Full-stack developer passionate about AI, IoT, and building innovative digital experiences.',
}

// Social Links
export const socials: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/thevishesh21',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vishesh-pal-93a03a350/',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Vishesh_Pal_21',
    icon: 'twitter',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/the_vishesh_21/',
    icon: 'instagram',
  },
]

// Skills Data
export const skills: Skill[] = [
  { name: 'React', level: 85, category: 'frontend', icon: 'react' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: 'nextjs' },
  { name: 'TypeScript', level: 78, category: 'frontend', icon: 'typescript' },
  { name: 'JavaScript', level: 90, category: 'frontend', icon: 'javascript' },
  { name: 'HTML5', level: 95, category: 'frontend', icon: 'html5' },
  { name: 'CSS3', level: 90, category: 'frontend', icon: 'css3' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend', icon: 'tailwind' },
  { name: 'Node.js', level: 75, category: 'backend', icon: 'nodejs' },
  { name: 'Python', level: 80, category: 'backend', icon: 'python' },
  { name: 'MySQL', level: 70, category: 'backend', icon: 'mysql' },
  { name: 'AWS', level: 65, category: 'tools', icon: 'aws' },
  { name: 'Git', level: 85, category: 'tools', icon: 'git' },
  { name: 'Linux', level: 70, category: 'tools', icon: 'linux' },
  { name: 'Docker', level: 60, category: 'tools', icon: 'docker' },
  { name: 'Raspberry Pi', level: 75, category: 'other', icon: 'raspberrypi' },
  { name: 'IoT', level: 70, category: 'other', icon: 'iot' },
]

// Projects Data
export const projects: Project[] = [
  {
    id: 'spie-blog',
    title: 'SPIE Blog Platform',
    subtitle: 'SPIE Student Chapter',
    description: 'A responsive, accessible blog platform designed for the SPIE Student Chapter. Features modern UI/UX, optimized performance, and seamless content management for technical articles and events.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    image: '/projects/blog.png',
    featured: true,
  },
  {
    id: 'portfolio-v1',
    title: 'Personal Portfolio v1',
    subtitle: 'React Portfolio',
    description: 'A fully responsive portfolio website showcasing projects, skills, and achievements with smooth animations and mobile-first design principles.',
    tags: ['React', 'Framer Motion', 'CSS3'],
    image: '/projects/portfolio.png',
    githubUrl: 'https://github.com/thevishesh21',
    featured: true,
  },
  {
    id: 'iot-automation',
    title: 'IoT Home Automation',
    subtitle: 'Smart Home System',
    description: 'An intelligent IoT-based home automation prototype using Raspberry Pi with sensors and actuators for real-time monitoring and automated environmental control.',
    tags: ['Raspberry Pi', 'Python', 'IoT', 'Electronics'],
    image: '/projects/iot.png',
    featured: true,
  },
  {
    id: 'sports-analyzer',
    title: 'Sports Score Analyzer',
    subtitle: 'Data Analysis Platform',
    description: 'A comprehensive sports analysis system for tracking match data and performance trends with advanced data processing, visualization, and statistical insights.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
    image: '/projects/sports.png',
    githubUrl: 'https://github.com/thevishesh21',
    featured: false,
  },
]

// Certifications
export const certifications: Certification[] = [
  {
    id: 'hela-crossroads',
    title: 'HeLa Crossroads ANDC',
    description: 'Certificate of Participation for active involvement in tech initiatives and innovation programs.',
    certificateUrl: 'https://credsverse.com/credentials/a864b86d-9212-45ea-aae5-11d0071f08c6',
    date: '2024',
  },
  {
    id: 'raspberry-pi',
    title: 'Raspberry Pi Training',
    description: 'Completed comprehensive hands-on training in Raspberry Pi programming, circuit design, and IoT applications.',
    certificateUrl: '#',
    date: '2024',
  },
  {
    id: 'ai-iot-workshop',
    title: 'AI & IoT Workshop',
    description: 'Participated in an intensive workshop covering AI and IoT technologies, their integration, and practical applications.',
    certificateUrl: '#',
    date: '2024',
  },
]

// Services
export const services: Service[] = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web applications using modern frameworks like React, Next.js, and Node.js with focus on performance and scalability.',
    icon: 'code',
    color: '#3b82f6',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure on AWS including EC2, S3, Lambda, and serverless architectures for enterprise applications.',
    icon: 'cloud',
    color: '#FF9900',
  },
  {
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights using Python, Pandas, and visualization tools for data-driven decision making.',
    icon: 'chart',
    color: '#8b5cf6',
  },
  {
    title: 'IoT Solutions',
    description: 'Innovative IoT implementations connecting devices for smart automation, monitoring, and control systems.',
    icon: 'cpu',
    color: '#10b981',
  },
]

// Navigation Links
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]
