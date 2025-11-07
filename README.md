# Yihune Belay - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer and Software Engineering student.

## 🚀 Features

- **Modern UI/UX**: Built with React, Tailwind CSS, and Framer Motion for smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Toggle between light and dark themes
- **Single Page Navigation**: Smooth section transitions
- **Contact Form**: Integrated with Appwrite for form submissions
- **Project Showcase**: Display of featured projects with live demos and GitHub links
- **Skills Section**: Visual representation of technical skills
- **Performance Optimized**: Built with Vite for fast loading times

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Appwrite (for contact form)
- **Deployment**: Netlify

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Appwrite account (for contact form functionality)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yihune1234/Portfolio.git
   cd YihuneBelayPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your Appwrite credentials:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` with your actual Appwrite credentials:
   ```env
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_PROJECT_NAME=your_project_name
   VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build files will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

### Deploy to Netlify

This project is configured for Netlify deployment with the included `netlify.toml` file.

#### Option 1: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

#### Option 2: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Add environment variables in Netlify dashboard:
   - Go to Site settings > Environment variables
   - Add your `VITE_APPWRITE_*` variables
7. Click "Deploy site"

#### Option 3: One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yihune1234/Portfolio)

### Deploy to Other Platforms

The project can also be deployed to:
- **Vercel**: Import from GitHub and deploy
- **GitHub Pages**: Use `gh-pages` package (included in dependencies)
- **Firebase Hosting**: Follow Firebase deployment guide

## 📝 Configuration

### Appwrite Setup

1. Create a project on [Appwrite Cloud](https://cloud.appwrite.io)
2. Create a database and collection for contact form submissions
3. Set up appropriate permissions for the collection
4. Copy your project credentials to the `.env` file

### Customization

- **Personal Info**: Update content in component files under `src/components/`
- **Styling**: Modify Tailwind configuration in `tailwind.config.js`
- **Projects**: Update project data in `src/components/Projects.jsx`
- **Skills**: Modify skills in `src/components/Skills.jsx`

## 📂 Project Structure

```
YihuneBelayPortfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollTop.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   ├── index.css       # Global styles
│   └── global.css      # Tailwind utilities
├── .env.example        # Environment variables template
├── netlify.toml        # Netlify configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

## 🔒 Security

- Never commit `.env` file to version control
- Keep your Appwrite credentials secure
- Regularly update dependencies for security patches

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Yihune Belay**
- GitHub: [@yihune1234](https://github.com/yihune1234)
- Email: [Your Email]
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Backend services by [Appwrite](https://appwrite.io/)

---

Made with ❤️ by Yihune Belay
