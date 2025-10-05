# OptiWebrix Frontend

A modern React application built with Vite, featuring a responsive design and smooth animations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components
│   │   └── ...        # Feature components
│   ├── pages/         # Page components
│   ├── assets/        # Images and static files
│   ├── lib/          # Utility functions
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── public/           # Static assets
├── package.json      # Dependencies and scripts
└── vite.config.js    # Vite configuration
```

## 🎨 Features

- **Responsive Design** - Works on all device sizes
- **Dark/Light Theme** - Toggle between themes
- **Smooth Animations** - Powered by Framer Motion
- **Contact Form** - Integrated with backend SMTP
- **Modern UI** - Built with Tailwind CSS
- **Type Safety** - Form validation with Zod

## 🛠️ Technologies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📱 Components

### Main Components
- `Hero` - Landing section with animations
- `AboutUs` - About section
- `PortfolioGrid` - Project showcase
- `ContactForm` - Contact form with validation
- `Footer` - Site footer

### UI Components
- `Button` - Custom button component
- `Input` - Form input component
- `Textarea` - Form textarea component
- `Card` - Card layout component

## 🎯 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3001
```

For production, update to your backend URL:
```env
VITE_API_URL=https://your-backend-domain.com
```

## 🎨 Styling

The project uses Tailwind CSS for styling with custom configurations:

- **Colors** - Custom color palette
- **Animations** - Custom keyframes and transitions
- **Components** - Reusable component classes
- **Dark Mode** - Theme switching support

## 📦 Dependencies

### Core Dependencies
- `react` - React framework
- `react-dom` - React DOM rendering
- `framer-motion` - Animation library
- `react-hook-form` - Form handling
- `zod` - Schema validation
- `@hookform/resolvers` - Form validation resolvers

### Dev Dependencies
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS autoprefixer
- `postcss` - CSS processor
- `eslint` - Code linting

## 🔧 Configuration

### Vite Config
- React plugin enabled
- Path aliases configured
- Development server settings

### Tailwind Config
- Custom color palette
- Extended theme configuration
- Component utilities

### ESLint Config
- React recommended rules
- Custom configuration for project needs

## 📝 Notes

- The frontend communicates with the backend API for contact form submissions
- All form validation is handled client-side with Zod schemas
- Animations are optimized for performance
- The design is fully responsive across all devices

## 🤝 Contributing

1. Follow the existing code style
2. Use meaningful component and variable names
3. Add comments for complex logic
4. Test on multiple screen sizes
5. Ensure accessibility standards are met
