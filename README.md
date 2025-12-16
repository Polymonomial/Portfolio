# React Vite Webapp

A modern React application built with Vite, TypeScript, and modern development tools.

## Features

- ⚡️ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with concurrent features
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **CSS3** - Modern styling with CSS custom properties
- 🔧 **ESLint** - Code linting and quality assurance
- 💅 **Prettier** - Code formatting
- 🔥 **Hot Module Replacement** - Fast development with instant updates

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-vite-webapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript compiler check

## Project Structure

```
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable React components
├── hooks/          # Custom React hooks
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── App.tsx         # Main App component
├── App.css         # App-specific styles
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## Building for Production

```bash
npm run build
```

The built files will be generated in the `dist` directory, ready for deployment.

## Deployment

The application can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI tools

## Technologies Used

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code formatting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.