export const heroContent = {
  name: 'King Cedrick',
  surname: 'Panaligan',
  title: 'Network Engineer • QA Specialist • IT Support Specialist',
  description: 'Passionate about building efficient, user-focused technology solutions with a curious, adaptable, and continuous learning mindset.',
  availability: 'Available for work',
};

export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const skillsData = {
  Frontend: [
    { name: 'React', years: 1, level: 82, icon: '⚛' },
    { name: 'TypeScript', years: 1, level: 78, icon: 'TS' },
    { name: 'Tailwind CSS', years: 1, level: 97, icon: '◈' },
    { name: 'Next.js', years: 1, level: 76, icon: '▲' },
  ],
  Backend: [
    { name: 'Node.js', years: 1, level: 88, icon: '⬡' },
    { name: 'Express.js', years: 1, level: 84, icon: 'E' },
    { name: 'MySQL', years: 1, level: 93, icon: 'SQL' },
    { name: 'PHP', years: 1, level: 93, icon: 'PHP' },
  ],
  'Testing & Documentation': [
    { name: 'Playwright', years: 1, level: 89, icon: 'PW' },
    { name: 'Postman', years: 2, level: 87, icon: 'P' },
    { name: 'Google Sheets', years: 2, level: 92, icon: 'SH' },
    { name: 'Microsoft Excel', years: 2, level: 94, icon: 'EX' },
  ],
  'Workflow & Productivity': [
    { name: 'Git', years: 3, level: 91, icon: '⎇' },
    { name: 'Figma', years: 2, level: 91, icon: 'Fig' },
    { name: 'VS Code', years: 4, level: 100, icon: 'VS' },
  ],
  Networking: [
    { name: 'Routing', years: 1, level: 87, icon: 'R' },
    { name: 'Switching', years: 1, level: 85, icon: 'SW' },
    { name: 'VLANs', years: 1, level: 84, icon: 'V' },
    { name: 'OSPFs', years: 1, level: 92, icon: 'OS' },
    { name: 'ACLs', years: 1, level: 82, icon: 'AC' },
    { name: 'DNS', years: 1, level: 89, icon: 'DN' },
    { name: 'DHCP', years: 1, level: 90, icon: 'DH' },
  ],
};

export const projectsData = [
  {
    title: 'Ledgerly',
    description:
      'A practical expense-tracking application built to make budgeting, categorization, and reporting feel simple and dependable.',
    tags: ['React', 'Node.js', 'Express.js', 'MySQL'],
    github: 'https://github.com/KngCd/Kubo-Ware',
    year: '2026',
    status: 'Internship Project',
    video: '/assets/videos/Ledgerly.mp4',
  },
  {
    title: 'ResponSys',
    description:
      'A web-based incident management and hazard mapping system designed for organized disaster preparedness and response workflows.',
    tags: ['HTML', 'TailwindCSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/KngCd/Capstone-MDRRMO',
    year: '2025',
    status: 'Capstone',
    video: '/assets/videos/ResponSys.mp4',
  },
  {
    title: 'ResponSys Mobile',
    description:
      'A mobile companion for incident reporting and hazard map access, built for fast submissions from the field.',
    tags: ['Flutter', 'Tailwind', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/KngCd/responsys',
    year: '2025',
    status: 'Prototype',
    video: '/assets/videos/ResponSys-Mobile.mp4',
  },
];

export const experienceData = [
  {
    company: 'Kubo-Ware Software Development Services',
    role: 'Tech Support Associate',
    period: 'May 2026 – Present',
    description:
      'Provide on-site technical support, troubleshoot issues, perform QA testing, and collaborate with the development team to improve reliability and the overall user experience.',
    technologies: ['Technical Support', 'QA', 'Troubleshooting', 'Systems'],
  },
  {
    company: 'Kubo-Ware Software Development Services',
    role: 'IT Trainee',
    period: 'February 2026 – May 2026',
    description:
      'Worked on kiosk deployments, system configuration, network troubleshooting, and software testing while contributing to an internal financial management system.',
    technologies: ['Networking', 'Support', 'Testing', 'Development'],
  },
];

export const certificationsData = [
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google',
    date: 'June 2026',
    credentialId: 'PHXPL5H8E6TP',
    icon: '☁',
    url: 'https://coursera.org/verify/professional-cert/PHXPL5H8E6TP',
  },
  {
    title: 'Cisco Networking Academy — Network Support and Security',
    issuer: 'Cisco Networking Academy',
    date: 'April 2026',
    credentialId: '731de1fc-9ac8-4d0e-9dc3-067471f28361',
    icon: 'C',
    url: 'https://www.credly.com/badges/731de1fc-9ac8-4d0e-9dc3-067471f28361/public_url',
  },
  {
    title: 'Cisco Networking Academy — Networking Devices and Basic Configuration',
    issuer: 'Cisco Networking Academy',
    date: 'April 2026',
    credentialId: 'ec0ecfdc-0a62-467e-8ed4-bbe9c1007486',
    icon: 'C',
    url: 'https://www.credly.com/badges/ec0ecfdc-0a62-467e-8ed4-bbe9c1007486/public_url',
  },
  {
    title: 'PhilNITS Information Technology Passport (IP) Certification',
    issuer: 'PhilNITS',
    date: 'October 2025',
    credentialId: 'IP4500306',
    icon: 'P',
    url: 'https://www.itpec.org/statsandresults/all-passers-information/Philippines/2025A_IP.pdf',
  },
  {
    title: 'Business Intelligence with Power BI',
    issuer: 'Data Analytics Philippines',
    date: 'August 2024',
    credentialId: 'DAPh-24-4730228',
    icon: 'BI',
    url: 'mailto:panaligankingcedrick@gmail.com?subject=Credential%20Verification',
  },
];

export const educationData = [
  {
    school: 'Batangas State University - TNEU',
    degree: 'Bachelor of Science in Information Technology',
    years: 'Expected 2026',
    description:
      'Strengthened my IT foundation through coursework, practical projects, and research while building confidence in systems design, network administration, and IT service support.',
    achievements: ["Dean's Lister", 'Service Management focus', 'Cum Laude'],
  },
  {
    school: 'Alitagtag Senior High School',
    degree: 'STEM',
    years: 'Graduated 2022',
    description:
      'Built a strong foundation in mathematics, science, and technical thinking through a STEM-focused education that shaped my curiosity and discipline.',
    achievements: ['Graduated with honors', 'STEM track completion', 'Academic excellence recognition'],
  },
];

export const galleryImages = [
  { id: 'workspace', src: '/assets/one.jpg', alt: 'Technical Support at St. Thomas Academy', h: 320 },
  { id: 'team', src: '/assets/two.jpg', alt: 'Doing Marketing at schools in Balayan, Batangas', h: 420 },
  { id: 'design', src: '/assets/three.JPG', alt: 'Collaborating with team members', h: 280 },
  { id: 'screen', src: '/assets/four.jpg', alt: 'Hands-on mentoring session', h: 360 },
  { id: 'study', src: '/assets/five.jpg', alt: 'Hands-on mentoring session', h: 300 },
  { id: 'build', src: '/assets/six.jpg', alt: 'Hands-on mentoring session', h: 440 },
  { id: 'seven', src: '/assets/seven.jpeg', alt: 'Provided infrastructure support at Ark Bess', h: 340 },
  { id: 'eight', src: '/assets/eight.png', alt: 'Installing operating system', h: 300 },
  { id: 'nine', src: '/assets/nine.jpg', alt: 'Collaborating with team members', h: 390 },
  { id: 'ten', src: '/assets/ten.jpg', alt: 'Friend moments', h: 280 },
  { id: 'eleven', src: '/assets/eleven.jpg', alt: 'Technical support at Kalayaan Christian School', h: 360 },
  { id: 'twelve', src: '/assets/twelve.jpg', alt: 'Technical support at Sunhill Montessori Casa Rosario', h: 310 },
  { id: 'thirteen', src: '/assets/thirteen.jpg', alt: 'Installing LAN connection', h: 420 },
  { id: 'fourteen', src: '/assets/fourteen.jpg', alt: 'Last day at internship', h: 330 },
];

export const contactLinks = [
  { label: 'Email', value: 'panaligankingcedrick@gmail.com', href: 'mailto:panaligankingcedrick@gmail.com' },
  { label: 'LinkedIn', value: '/in/king-cedrick-panaligan', href: 'https://www.linkedin.com/in/king-cedrick-panaligan-8a6a4534a' },
  { label: 'GitHub', value: '@KngCd', href: 'https://github.com/KngCd' },
  { label: 'Instagram', value: '@kng_cdrck', href: 'https://instagram.com/kng_cdrck' },
];

export const footerBrand = {
  name: 'King Cedrick C. Panaligan',
  tagline: 'Building reliable systems and thoughtful support experiences.',
};
