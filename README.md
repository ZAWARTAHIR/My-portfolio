# Professional Portfolio Website

A beautiful, modern portfolio website built with React, featuring smooth animations, responsive design, and showcase sections for both Frontend and Backend development skills.

## 🌟 Features

- **Modern Hero Section**: Eye-catching landing section with gradient animations
- **Smooth Animations**: Built with Framer Motion for fluid, professional animations
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop devices
- **Skills Showcase**: Dedicated sections for Frontend & Backend development skills
- **Projects Gallery**: Filterable project showcase with technology tags
- **Contact Form**: Interactive contact section with multiple connection methods
- **Custom Cursor Glow**: Interactive mouse effect throughout the site
- **Professional Footer**: Complete with social links and copyright information

## 📋 Sections

1. **Navigation Bar** - Fixed header with smooth scrolling
2. **Hero Section** - Welcome message with floating animations
3. **About** - Personal introduction with stats
4. **Skills** - Frontend & Backend skills with progress bars
5. **Projects** - Filterable project showcase (Frontend, Backend, Full-Stack)
6. **Contact** - Contact form and social media links
7. **Footer** - Navigation links and social profiles

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling
- **CSS3** - Styling with gradients and animations
- **HTML5** - Semantic markup

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. Navigate to the project directory:

```bash
cd "my portfolio"
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and visit:

```
http://localhost:3000
```

## 🚀 Build for Production

To create an optimized production build:

```bash
npm run build
```

The build folder will contain the optimized files ready for deployment.

## 📱 Customization

### Update Personal Information

1. **Navbar Logo** - Edit in `src/components/Navbar.js`
2. **About Section** - Update content in `src/components/About.js`
3. **Skills** - Modify skills list in `src/components/Skills.js`
4. **Projects** - Add your projects in `src/components/Projects.js`
5. **Contact Information** - Update in `src/components/Contact.js`
6. **Social Links** - Modify in `src/components/Footer.js`

### Color Scheme

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --primary-color: #00d4ff; /* Cyan */
  --secondary-color: #7c3aed; /* Purple */
  --accent-color: #ff6b6b; /* Red */
  --dark-bg: #0a0e27; /* Dark Blue */
  --darker-bg: #050810; /* Darker Blue */
  --light-text: #e0e0e0; /* Light Gray */
  --lighter-text: #a0a0a0; /* Medium Gray */
  --border-color: rgba(0, 212, 255, 0.1);
}
```

## 📁 Project Structure

```
my portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── app.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   ├── contact.css
│   │   └── footer.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Animation Effects

- **Hero Section**: Floating gradient orbs and fade-in text
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Cards and buttons respond to user interaction
- **Custom Cursor**: Glowing cursor effect follows mouse movement

## 📞 Contact Section

The contact form includes:

- Name, Email, Subject, and Message fields
- Multiple ways to connect (Email, LinkedIn, GitHub, Twitter)
- Success notification after form submission

## 🔄 Responsive Breakpoints

- **Desktop**: Full layout with all features
- **Tablet** (768px and below): Adjusted grid layouts
- **Mobile** (480px and below): Single column layouts, optimized touch targets

## 🌐 Deployment

You can deploy this portfolio to various platforms:

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### GitHub Pages

Update `package.json` with your repository:

```json
"homepage": "https://yourusername.github.io/portfolio"
```

Then run:

```bash
npm run build
npm install gh-pages --save-dev
```

## 📝 Notes

- Customize all text content with your own information
- Replace project examples with your actual projects
- Update social media links to your profiles
- Consider adding real images for projects
- Test on multiple devices before deploying

## 🎯 Future Enhancements

- Add image upload for projects
- Implement backend for contact form
- Add dark/light theme toggle
- Add blog section
- Add case studies for major projects
- Implement email notifications

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

1. Keep the portfolio updated with latest projects
2. Use high-quality descriptions for better SEO
3. Optimize images for faster loading
4. Test the contact form before deployment
5. Keep animations smooth and professional

---

**Built with ❤️ for creative developers**

Enjoy your new professional portfolio! 🚀
