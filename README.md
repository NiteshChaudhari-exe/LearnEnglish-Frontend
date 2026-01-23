# English Learn - Frontend

A modern, mobile-first English learning application for A1 beginner learners. Built with React, Vite, and Tailwind CSS.

## Features

- 📱 **Mobile-First Design** - Optimized for mobile devices with responsive layouts
- 🎓 **Interactive Lessons** - Comprehensive lessons with multilingual support (English/Nepali)
- 🧠 **Smart Quizzes** - Interactive quizzes to test knowledge
- 📊 **Progress Tracking** - Monitor learning progress with detailed statistics
- 📚 **Vocabulary Builder** - Build and review vocabulary with search functionality
- 🌐 **Multi-Language Support** - Support for English and Nepali
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds

## Tech Stack

- **Framework:** React 18.2
- **Build Tool:** Vite 5.0
- **Styling:** Tailwind CSS 3.3
- **State Management:** Zustand 4.4
- **Routing:** React Router DOM 6.20
- **HTTP Client:** Axios 1.6
- **Notifications:** Sonner 1.3
- **CSS Processing:** PostCSS with Autoprefixer

## Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/english-learn-frontend.git
cd english-learn-frontend
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Configure environment variables:**
Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

Edit `.env.local` and set your API URL:
```env
VITE_API_URL=http://localhost:5000/api
```

## Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000`

## Building for Production

Build the application:
```bash
npm run build
# or
yarn build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── EnhancedUI.jsx
│   │   ├── Lessons.jsx
│   │   ├── Progress.jsx
│   │   ├── Quiz.jsx
│   │   └── UI.jsx
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── LessonsPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── ProgressPage.jsx
│   │   └── VocabularyPage.jsx
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   │   ├── api.js         # API client configuration
│   │   ├── helpers.js     # Helper functions
│   │   └── notifications.js # Notification utilities
│   ├── i18n/              # Internationalization
│   │   └── translations.js
│   ├── assets/            # Static assets
│   ├── App.jsx            # Main App component
│   ├── store.js           # Zustand state management
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.cjs     # PostCSS configuration
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── .editorconfig          # Editor configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

## API Integration

The application communicates with a backend API. The API URL is configured via environment variables:

- **Development:** `http://localhost:5000/api` (default)
- **Production:** Configure via `.env.production.local`

## Features Breakdown

### Authentication
- User registration and login
- Session management via Zustand store

### Lessons
- Level-based lesson system (A1-B1)
- Daily lessons for consistent learning
- Interactive lesson content

### Quiz System
- Multiple choice questions
- Immediate feedback
- Progress tracking per quiz

### Vocabulary
- Searchable vocabulary database
- Word definitions and examples
- Language-specific vocabulary lists

### Progress Tracking
- Daily statistics
- Lessons completed
- Quiz performance
- Overall learning progress

## Environment Variables

See `.env.example` for all available environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000/api` |
| `VITE_APP_TITLE` | Application title | `English Learn - A1 Beginner Course` |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Guidelines

- Use ES6+ features
- Follow React best practices
- Use functional components with hooks
- Maintain responsive design across all breakpoints
- Keep components small and focused
- Document complex logic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Vite provides fast HMR (Hot Module Replacement)
- Tailwind CSS is optimized for production builds
- Code splitting for better load times
- Lazy loading for route components (can be configured)

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can change it in `vite.config.js`:
```javascript
server: {
  port: 3001,
  // ...
}
```

### API Connection Issues
- Ensure backend server is running on `http://localhost:5000`
- Check that `VITE_API_URL` is correctly set
- Verify CORS is enabled on the backend

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf dist .vite
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Happy Learning! 🎓**
