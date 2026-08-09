# Udhaya P — Java Full Stack Developer Portfolio

A production-ready, premium portfolio website built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Routing:** React Router DOM v7
- **Icons:** Lucide React + React Icons
- **Contact:** EmailJS
- **Typing Effect:** React Type Animation

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky navbar with blur-on-scroll
│   ├── Hero.jsx           # Hero section with typing animation
│   ├── About.jsx          # About + education timeline
│   ├── Skills.jsx         # Animated skill cards
│   ├── Internships.jsx    # Internship cards
│   ├── Projects.jsx       # Project cards
│   ├── Certifications.jsx # Certificate cards
│   ├── Achievements.jsx   # Achievement timeline
│   ├── GitHubStats.jsx    # GitHub stats widgets
│   ├── TechStack.jsx      # Tech icon grid
│   ├── CurrentlyLearning.jsx
│   ├── ResumeSection.jsx  # Resume preview + download
│   ├── Contact.jsx        # EmailJS contact form
│   ├── Footer.jsx
│   ├── LoadingScreen.jsx
│   ├── ScrollProgress.jsx
│   ├── ScrollToTop.jsx
│   ├── CustomCursor.jsx
│   └── AnimationUtils.jsx # Shared animation variants
├── pages/
│   ├── Home.jsx
│   ├── InternshipDetails.jsx
│   ├── ProjectDetails.jsx
│   ├── ResumePage.jsx
│   └── NotFound.jsx
├── data/
│   └── portfolioData.js   # ← EDIT THIS to update content
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Getting Started

```bash
npm install
npm run dev
```

## 📧 Setting Up EmailJS

1. Go to [emailjs.com](https://emailjs.com) and create a free account
2. Create an Email Service (Gmail/Outlook)
3. Create an Email Template with variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
4. Update `src/data/portfolioData.js`:

```js
export const emailjsConfig = {
  serviceId: "service_xxxxxxx",
  templateId: "template_xxxxxxx",
  publicKey: "xxxxxxxxxxxxxxxxxxxx",
  toEmail: "udhaya4369@gmail.com",
};
```

## 🖼️ Adding Assets

Place your files at:

| Asset | Path |
|-------|------|
| Profile Photo | `public/assets/profile/profile.jpg` |
| Resume PDF | `public/resume/Udhaya_P_Resume.pdf` |
| AAI Logo | `public/assets/companies/aai-logo.png` |
| Approtech Logo | `public/assets/companies/approtech-logo.png` |
| Certificates | `public/assets/certificates/` |

Then uncomment the `<img>` tag in `Hero.jsx`.

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload the `dist/` folder to Netlify
```

## ✏️ Customisation

All content is managed in **one file**: `src/data/portfolioData.js`

Update it to change personal info, skills, projects, internships, certifications, etc.

## 📄 License

MIT — Free to use for personal portfolio.
