/**
 * portfolioData.js
 * ─────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all portfolio content.
 * Update this file to reflect changes across the entire site.
 * ─────────────────────────────────────────────────────────────────
 */

// ─── Personal Info ───────────────────────────────────────────────
export const personalInfo = {
  name: "Udhaya P",
  initials: "UP",
  title: "Java Full Stack Developer",
  email: "udhaya4369@gmail.com",
  phone: "9629901733",
  location: "Chennai, India",
  college: "Sri Sairam Institute of Technology",
  degree: "B.E Computer Science Engineering",
  cgpa: "8.46",
  graduationYear: "2027",
  bio: "Passionate Computer Science Engineering student with hands-on experience in Java Full Stack Development, Spring Boot, MySQL, REST APIs, React, and AI-based applications. Dedicated to building scalable enterprise applications and continuously learning modern technologies.",
  shortBio:
    "CSE student specialising in Java Full Stack Development — building clean, scalable, enterprise-grade applications.",
  resumeUrl: "/resume/Udhaya_P_Resume.pdf", // Place your PDF at public/resume/
  profileImage: "/assets/profile/profile.jpeg", // Place your photo at public/assets/profile/
  linkedin: "https://www.linkedin.com/in/udhaya-periyasamy",
  github: "https://github.com/udhaya-Periyasamy",
  leetcode: "https://leetcode.com/u/udhaya__16/",
  quote: "Building scalable applications with clean architecture.",
};

// ─── Typing Animation Roles ───────────────────────────────────────
export const typingRoles = [
  "Java Full Stack Developer",
  "Java Frontend Developer",
  "Spring Boot Developer",
];

// ─── Hero Info Cards ──────────────────────────────────────────────
export const heroCards = [
  { icon: "📍", label: "Location", value: "Chennai" },
  { icon: "🎓", label: "College", value: "Sri Sairam Institute of Technology" },
  { icon: "📚", label: "Degree", value: "B.E CSE" },
  { icon: "⭐", label: "CGPA", value: "8.46" },
];

// ─── About / Education ────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "B.E. Computer Science Engineering",
    institution: "Sri Sairam Institute of Technology",
    location: "Chennai, Tamil Nadu",
    duration: "2023 – 2027",
    scoreLabel: "CGPA",
    score: "8.46",
    status: "Pursuing",
    logo: "/assets/education/sairam-it-emblem.png",
    alt: "Sri Sairam Institute of Technology logo",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "De Britto Hr. Sec. School",
    location: "Devakottai, Tamil Nadu",
    duration: "Completed",
    scoreLabel: "Percentage",
    score: "87%",
    status: "Completed",
    logo: "/assets/education/de-britto-logo.jpg",
    alt: "De Britto Higher Secondary School logo",
  },
];

export const careerObjective =
  "To secure a challenging position as a Java Full Stack Developer where I can leverage my expertise in Spring Boot, React, and database design to build scalable enterprise applications that deliver real business value.";

export const strengths = [
  "Strong problem-solving & algorithmic thinking",
  "Quick learner with attention to detail",
  "Experience building full-stack applications end-to-end",
  "Good understanding of REST API design & database normalisation",
  "Passionate about clean code and software architecture",
];

export const passions = [
  "Building backend systems with Spring Boot",
  "Exploring AI & ML integrations in web apps",
  "Open-source contributions & continuous learning",
  "System design and scalable architecture",
];

// ─── Skills ───────────────────────────────────────────────────────
export const skills = [
  {
    name: "Java",
    category: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "Python",
    category: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "MySQL",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "HTML5",
    category: "Markup Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    category: "Styling Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Spring Boot",
    category: "Backend Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
  },
  {
    name: "React",
    category: "Frontend Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Figma",
    category: "UI/UX Design Tool",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  }
];

// ─── Tech Stack (animated icons strip) ───────────────────────────
export const techStack = [
  { name: "Java", icon: "java", color: "#007396" },
  { name: "Spring Boot", icon: "spring", color: "#6DB33F" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "MySQL", icon: "mysql", color: "#4479A1" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitHub", icon: "github", color: "#181717" },
  { name: "REST API", icon: "api", color: "#2563EB" },
  { name: "JWT", icon: "jwt", color: "#000000" },
  { name: "Hibernate", icon: "hibernate", color: "#59666C" },
];

// ─── Currently Learning ───────────────────────────────────────────
export const currentlyLearning = [
  {
    id: 1,
    title: "Docker",
    icon: "Container",
    description:
      "Containerising Spring Boot applications for consistent deployment across environments.",
    color: "#2496ED",
    progress: 40,
  },
  {
    id: 2,
    title: "AWS",
    icon: "Cloud",
    description:
      "Deploying Java microservices on EC2, S3, RDS, and API Gateway.",
    color: "#FF9900",
    progress: 30,
  },
  {
    id: 3,
    title: "Microservices",
    icon: "Network",
    description:
      "Breaking monoliths into independently deployable Spring Boot services.",
    color: "#6DB33F",
    progress: 50,
  },
  {
    id: 4,
    title: "System Design",
    icon: "GitBranch",
    description:
      "Studying scalable architectures, CAP theorem, caching and load balancing.",
    color: "#7C3AED",
    progress: 45,
  },
];

// ─── Internships ──────────────────────────────────────────────────
export const internships = [
  {
    id: "infosys-springboard",
    company: "Infosys Springboard Virtual Internship",
    shortName: "Infosys Springboard",
    role: "Java Full Stack Intern",
    duration: "August 2026 – October 2026",
    location: "Virtual / Remote, India",
    logo: "/assets/companies/infosys-logo.png",
    alt: "Infosys Springboard logo",
    tags: ["Java", "Spring Boot", "React.js", "MySQL", "Docker", "REST API", "JWT"],
    color: "#007CC3",
    overview:
      "Completed a virtual internship with Infosys Springboard, building an enterprise-grade full-stack coding assessment platform with automated evaluation and containerised code execution.",
    project: {
      title: "Coding Practice & Assessment Platform",
      description:
        "A full-stack coding practice and skill assessment platform featuring sandboxed multi-language code evaluation, interactive code editing, contest management, and live leaderboards.",
    },
    responsibilities: [
      "Developed a full-stack coding practice platform using Spring Boot, React.js, MySQL, REST APIs, JWT, and role-based access control.",
      "Built a Docker-based code execution and automated evaluation engine supporting Java, Python, C++, and JavaScript with public and hidden test cases.",
      "Integrated Monaco Editor and implemented assessments, contests, hints, editorials, leaderboards, certifications, and performance tracking.",
    ],
    keyContributions: [
      "Designed secure stateless JWT authentication and role-based access control (Admin, Evaluator, Candidate)",
      "Engineered a Docker sandbox environment for safe multi-language code execution and real-time evaluation",
      "Integrated Monaco Editor with syntax highlighting, custom themes, and automatic test case validation",
      "Implemented contest leaderboards, hint systems, editorial solutions, and certification generation",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "Docker",
      "REST API",
      "JWT",
      "Monaco Editor",
      "Hibernate",
    ],
    challenges: [
      {
        challenge: "Secure execution of untrusted user code",
        solution:
          "Implemented isolated Docker containers with restricted network access, CPU/memory quotas, and execution timeouts.",
      },
      {
        challenge: "Real-time performance evaluation and leaderboard tracking",
        solution:
          "Optimised database query indexing in MySQL and built asynchronous evaluation pipelines to handle high submission concurrency.",
      },
    ],
    learningOutcomes: [
      "Industry experience designing scalable full-stack applications with Spring Boot and React.js",
      "Mastery of Docker containerisation for secure execution environments",
      "Deep understanding of secure authentication, RESTful API design, and automated testing pipelines",
    ],
    gallery: [],
  },
  {
    id: "aai",
    company: "Airports Authority of India",
    shortName: "AAI",
    role: "Full Stack Intern",
    duration: "Dec 2025 – Jan 2026",
    location: "Chennai, India",
    logo: "/assets/companies/aai-logo.png",
    alt: "Airports Authority of India logo",
    tags: ["Java", "Spring Boot", "MySQL"],
    color: "#1e3a5f",
    overview:
      "Interned at Airports Authority of India (AAI), one of India's premier aviation authority organisations. Contributed to the development of an enterprise-grade internal asset management system.",
    project: {
      title: "Requisition & Asset Inventory System",
      description:
        "A full-stack enterprise web application designed to digitise the manual requisition and asset tracking workflow within AAI. The system streamlines the approval pipeline, reduces paperwork, and provides real-time inventory visibility.",
    },
    responsibilities: [
      "Developed RESTful APIs using Spring Boot and Hibernate for requisition and inventory workflows.",
      "Designed and normalised MySQL database schemas for asset tracking and approval pipelines.",
      "Implemented Spring Security role-based access control (Admin/Staff) and automated status alerts.",
    ],
    keyContributions: [
      "Reduced manual paperwork through digital requisition forms",
      "Implemented automated email notifications for approval status updates",
      "Designed a responsive dashboard for real-time inventory monitoring",
      "Delivered the project within the 6-week internship timeframe",
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "Hibernate", "MySQL", "REST API", "Maven"],
    challenges: [
      {
        challenge: "Legacy data migration",
        solution:
          "Wrote custom ETL scripts in Java to migrate CSV data from the legacy spreadsheet system into the new MySQL database.",
      },
      {
        challenge: "Role-based access control complexity",
        solution:
          "Designed a flexible Spring Security configuration supporting multiple roles without duplicating business logic.",
      },
    ],
    learningOutcomes: [
      "Practical experience with enterprise Java development practices",
      "Understanding of government IT project workflows and documentation",
      "Deepened knowledge of Spring Boot and Hibernate in a production environment",
      "Improved communication and team collaboration skills",
    ],
    gallery: [], // Add image paths after deployment
  },
  {
    id: "approtech",
    company: "Approtech R&D Solutions",
    shortName: "Approtech",
    role: "Python Full Stack Intern",
    duration: "June 2025",
    location: "Chennai, India",
    logo: "/assets/companies/approtech-logo.png",
    alt: "Approtech R&D Solutions logo",
    tags: ["Python", "Flask", "XGBoost"],
    color: "#1a3c5e",
    overview:
      "Interned at Approtech R&D Solutions, a research-driven technology company. Developed a predictive AI tool for real-world environmental impact assessment.",
    project: {
      title: "Wildfire Impact Prediction Tool",
      description:
        "An AI-powered web application that predicts the socioeconomic impact of wildfires on local communities using machine learning. The tool assists policymakers and disaster management teams in resource allocation.",
    },
    problem:
      "Wildfires cause massive socioeconomic disruption, but impact assessment relies heavily on post-event manual surveys. There was no proactive tool to predict impact scale before disaster response planning.",
    solution:
      "Built a Flask web application integrating an XGBoost classification model trained on historical wildfire, weather, and demographic data to predict impact severity and affected populations.",
    responsibilities: [
      "Built a Flask web app integrating an XGBoost model predicting wildfire socioeconomic impact (~87% accuracy).",
      "Handled class imbalances with SMOTE and trained models on meteorological and demographic datasets.",
      "Implemented location risk forms, visual impact reports, CSV batch processing, and automated SMTP alerts.",
    ],
    features: [
      "Location-based wildfire risk prediction via input form",
      "XGBoost ML model with ~87% prediction accuracy",
      "Visual risk charts and summary report generation",
      "SMTP-based automated alert email system",
      "CSV data import and batch prediction capability",
      "Responsive UI with Flask Jinja2 templates",
    ],
    techStack: ["Python", "Flask", "XGBoost", "Pandas", "NumPy", "SMTP", "CSV", "HTML/CSS", "JavaScript"],
    challenges: [
      {
        challenge: "Imbalanced training dataset",
        solution:
          "Applied SMOTE oversampling and stratified cross-validation to handle class imbalance in wildfire severity labels.",
      },
      {
        challenge: "Real-time prediction latency",
        solution:
          "Optimised model inference by caching the trained XGBoost model in memory and using async Flask routes.",
      },
    ],
    outcome:
      "Delivered a functional AI prediction tool within one month. Demonstrated ~87% accuracy on the test dataset and received positive feedback from the R&D team for potential integration into their disaster management product suite.",
    gallery: [],
  },
];

// ─── Projects ─────────────────────────────────────────────────────
export const projects = [
  {
    id: "shophub",
    title: "ShopHub",
    subtitle: "Full Stack E-Commerce Platform",
    description:
      "A production-grade e-commerce web application with role-based access control, complete product lifecycle management, a shopping cart system, and a React-powered frontend.",
    banner: "/assets/projects/shophub-banner.png",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "MySQL", "REST API", "Hibernate"],
    github: "https://github.com/udhaya-p/shophub",
    liveDemo: "",
    featured: true,
    overview:
      "ShopHub is a scalable, full-stack e-commerce platform built using Java Spring Boot for the backend and React for the frontend. It implements JWT-based authentication, role-based access (Admin / Customer), and comprehensive product and cart management.",
    features: [
      {
        title: "JWT Authentication",
        description: "Secure stateless authentication using JSON Web Tokens with refresh token support.",
      },
      {
        title: "Role-Based Access Control",
        description: "Separate Admin and Customer roles with protected API endpoints and UI views.",
      },
      {
        title: "Admin Dashboard",
        description: "Full CRUD management for products, categories, users, and order processing.",
      },
      {
        title: "User Dashboard",
        description: "Personalised shopping experience with order history and account management.",
      },
      {
        title: "Category & Product Management",
        description: "Hierarchical category system with rich product attributes and image support.",
      },
      {
        title: "Shopping Cart",
        description: "Persistent cart with quantity management, item removal, and checkout flow.",
      },
      {
        title: "REST APIs",
        description: "Well-documented RESTful APIs following best practices with proper HTTP status codes.",
      },
      {
        title: "Database Design",
        description: "Normalised MySQL schema with Hibernate ORM and efficient query optimisation.",
      },
    ],
    techStack: {
      backend: ["Java 17", "Spring Boot 3", "Spring Security", "Spring Data JPA", "Hibernate", "JWT", "Maven"],
      frontend: ["React 18", "React Router DOM", "Axios", "CSS Modules"],
      database: ["MySQL 8"],
      tools: ["Postman", "Git", "VS Code", "Eclipse"],
    },
    folderStructure: `shophub/
├── backend/
│   ├── src/main/java/com/shophub/
│   │   ├── config/          # Security & CORS config
│   │   ├── controller/      # REST controllers
│   │   ├── dto/             # Request & response DTOs
│   │   ├── entity/          # JPA entities
│   │   ├── exception/       # Global exception handler
│   │   ├── repository/      # Spring Data JPA repos
│   │   ├── security/        # JWT filter & user details
│   │   └── service/         # Business logic layer
│   └── src/main/resources/
│       └── application.properties
└── frontend/
    ├── src/
    │   ├── components/      # Reusable UI components
    │   ├── pages/           # Route-level page components
    │   ├── services/        # Axios API services
    │   └── context/         # Auth context (React Context API)
    └── public/`,
    apiEndpoints: [
      { method: "POST", path: "/api/auth/register", description: "User registration" },
      { method: "POST", path: "/api/auth/login", description: "User login → returns JWT" },
      { method: "GET", path: "/api/products", description: "List all products (public)" },
      { method: "POST", path: "/api/admin/products", description: "Create product (Admin)" },
      { method: "PUT", path: "/api/admin/products/{id}", description: "Update product (Admin)" },
      { method: "DELETE", path: "/api/admin/products/{id}", description: "Delete product (Admin)" },
      { method: "POST", path: "/api/cart/add", description: "Add item to cart (Customer)" },
      { method: "GET", path: "/api/cart", description: "Get cart items (Customer)" },
      { method: "POST", path: "/api/orders/checkout", description: "Place order (Customer)" },
    ],
    futureEnhancements: [
      "Payment gateway integration (Stripe / Razorpay)",
      "Product search with Elasticsearch",
      "Email notifications for order updates",
      "Wishlist and product reviews",
      "Docker containerisation and CI/CD pipeline",
    ],
    screenshots: [],
  },
  {
    id: "carparking",
    title: "Car Parking Management System",
    subtitle: "Smart Parking Slot Management Platform",
    description:
      "A comprehensive parking management system with real-time slot tracking, vehicle management, user roles, and a dashboard for monitoring parking facility operations.",
    banner: "/assets/projects/carparking-banner.png",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/udhaya-p/car-parking-management",
    liveDemo: "",
    featured: false,
    overview:
      "A Spring Boot-powered parking management platform that handles real-time slot availability, vehicle entry/exit tracking, user registration, and billing — suitable for deployment in commercial parking facilities.",
    features: [
      {
        title: "Vehicle Management",
        description: "Register, track, and manage vehicle entry and exit with timestamped logs.",
      },
      {
        title: "Parking Slot Management",
        description: "Real-time slot availability, slot reservation, and visual floor map.",
      },
      {
        title: "User Management",
        description: "Role-based access for Admin (full control) and Users (slot booking).",
      },
      {
        title: "REST APIs",
        description: "Complete CRUD REST API for all parking operations.",
      },
      {
        title: "Database Design",
        description: "Efficient MySQL schema supporting concurrent slot bookings.",
      },
      {
        title: "Billing System",
        description: "Automated fare calculation based on vehicle type and parking duration.",
      },
    ],
    techStack: {
      backend: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Hibernate", "Maven"],
      frontend: ["HTML5", "CSS3", "JavaScript", "Thymeleaf"],
      database: ["MySQL 8"],
      tools: ["Postman", "Git", "Eclipse"],
    },
    apiEndpoints: [
      { method: "POST", path: "/api/vehicles/entry", description: "Register vehicle entry" },
      { method: "POST", path: "/api/vehicles/exit", description: "Register vehicle exit & billing" },
      { method: "GET", path: "/api/slots", description: "Get all slot availability" },
      { method: "POST", path: "/api/slots/reserve", description: "Reserve a parking slot" },
      { method: "GET", path: "/api/admin/dashboard", description: "Admin analytics dashboard" },
    ],
    futureEnhancements: [
      "Mobile app for slot booking via QR code",
      "ANPR (Automatic Number Plate Recognition) integration",
      "Online payment gateway for cashless billing",
      "IoT sensor integration for real-time slot detection",
    ],
    screenshots: [],
  },
];

// ─── Certifications ───────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title: "Java Full Stack",
    issuer: "Infosys Springboard",
    date: "2025",
    images: [
      "/certificates/java-full-stack/java-foundation.jpeg",
      "/certificates/java-full-stack/programming-java.jpeg",
    ],
    color: "#003366",
    category: "Development",
  },

  {
    id: 2,
    title: "MySQL",
    issuer: "Udemy",
    date: "2024",
    images: [
      "/certificates/mysql/mysql-certificate-1.jpeg",
      "/certificates/mysql/mysql-certificate-2.jpeg",
    ],
    color: "#4479A1",
    category: "Database",
  },

  {
    id: 3,
    title: "Paper Presentation — 2nd Prize",
    issuer: "Astranova - St. Joseph's College of Engineering",
    date: "2025",
    images: [
      "/certificates/paper-presentation/agile-scrum.jpeg",
    ],
    color: "#2563EB",
    category: "Achievement",
  },
];
// ─── Achievements ─────────────────────────────────────────────────
export const achievements = [
  {
    id: 1,
    title: "2nd Prize — Paper Presentation",
    event: "Astronova 2025, St. Joseph's College of Engineering",
    date: "2025",
    description:
      "Presented a research paper on AI-based disaster impact prediction and won 2nd prize among 50+ teams.",
    icon: "Trophy",
    color: "#F59E0B",
  },
  {
    id: 2,
    title: "Sports Captain",
    event: "Sri Sairam Institute of Technology",
    date: "2024 – 2025",
    description:
      "Led the department Kabaddi  team, coordinating inter-college tournaments and mentoring junior students.",
    icon: "Award",
    color: "#10B981",
  },
  {
    id: 3,
    title: "Volunteer — Technical Events",
    event: "Department Tech Fest",
    date: "2024",
    description:
      "Volunteered in organising technical events including coding challenges, project expos, and workshops.",
    icon: "Users",
    color: "#2563EB",
  },
];

// ─── GitHub Config ────────────────────────────────────────────────
export const githubConfig = {
  username: "udhaya-p",
  statsUrl: "https://github-readme-stats.vercel.app/api?username=udhaya-p&show_icons=true&theme=default&hide_border=true&bg_color=F8FAFC&title_color=0A192F&icon_color=2563EB&text_color=1E293B",
  streakUrl: "https://github-readme-streak-stats.herokuapp.com/?user=udhaya-p&theme=default&hide_border=true&background=F8FAFC&ring=2563EB&fire=2563EB&currStreakLabel=0A192F",
  topLangsUrl: "https://github-readme-stats.vercel.app/api/top-langs/?username=udhaya-p&layout=compact&theme=default&hide_border=true&bg_color=F8FAFC&title_color=0A192F&text_color=1E293B",
};

// ─── EmailJS Config ───────────────────────────────────────────────
// Replace with your actual EmailJS credentials
export const emailjsConfig = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  toEmail: "udhaya4369@gmail.com",
};
