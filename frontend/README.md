# Portfolio Frontend - React + TypeScript + Tailwind CSS

Professional Single Page Application (SPA) built with React 18, TypeScript, and Tailwind CSS that consumes a FastAPI backend.

## 🚀 Features

- ✅ **Theme Switching**: Light/Dark mode with localStorage persistence
- ✅ **Internationalization (i18n)**: Support for 3 languages (PT-BR, ES, EN)
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **API Integration**: Seamless connection with FastAPI backend
- ✅ **Form Validation**: Client-side validation with real-time error feedback
- ✅ **Accessibility**: WCAG 2.1 AA compliant
- ✅ **Type Safety**: Full TypeScript coverage with strict mode
- ✅ **Modern UI**: Clean, minimalist, and professional design

## 📦 Tech Stack

- **React**: 18.3.1
- **TypeScript**: 5.9.3
- **Vite**: 7.2.4 (Build tool)
- **Tailwind CSS**: 3.4.19
- **Native Fetch API**: For HTTP requests

## 🏗️ Project Structure

```
frontend/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── manifest.json
├── src/
│   ├── main.tsx           # Application entry point
│   ├── App.tsx            # Main App component
│   ├── index.css          # Global styles
│   ├── contextos/         # React contexts
│   │   ├── TemaContexto.tsx
│   │   └── IdiomaContexto.tsx
│   ├── hooks/             # Custom hooks
│   │   ├── useTema.ts
│   │   ├── useIdioma.ts
│   │   └── useAPI.ts
│   ├── componentes/       # React components
│   │   ├── comum/         # Common components
│   │   │   ├── NavBar.tsx
│   │   │   ├── Rodape.tsx
│   │   │   ├── BotaoTema.tsx
│   │   │   └── SeletorIdioma.tsx
│   │   └── secoes/        # Section components
│   │       ├── Sobre.tsx
│   │       ├── Stack.tsx
│   │       ├── Projetos.tsx
│   │       ├── Experiencia.tsx
│   │       └── Contato.tsx
│   ├── tipos/             # TypeScript types
│   │   └── index.ts
│   ├── dados/             # Static data
│   │   └── traducoes.ts
│   ├── servicos/          # API services
│   │   ├── portafolioAPI.ts
│   │   └── formspreeAPI.ts
│   └── utils/             # Utility functions
│       ├── formatacao.ts
│       └── validacao.ts
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Installation

```bash
# Install dependencies
npm install
```

## 💻 Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🏗️ Build

```bash
# Build for production
npm run build
```

Built files will be in the `dist/` directory.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Backend Integration

This frontend connects to a FastAPI backend running on `http://localhost:8000`

### API Endpoints Used

- `GET /api/sobre` - Personal information
- `GET /api/projetos` - Projects list
- `GET /api/stack` - Technical stack
- `GET /api/experiencias` - Professional experience
- `POST /api/contato` - Contact form (via Formspree)

## 🎨 Theme System

The application supports two themes:
- **Light Mode**: Clean white background (#FFFFFF) with dark text (#111827)
- **Dark Mode**: Dark slate background (#0F172A) with light text (#F1F5F9)

Theme preference is persisted in localStorage.

## 🌍 Internationalization

Three languages are fully supported:
- 🇧🇷 **Portuguese (PT-BR)** - Default
- 🇪🇸 **Spanish (ES)**
- 🇺🇸 **English (EN)**

Language preference is persisted in localStorage.

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Proper contrast ratios (WCAG AA)
- Screen reader friendly

## 📱 Responsive Design

Mobile-first design with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Form Validation

Contact form includes:
- Name: 3-100 characters
- Email: Valid email format
- Subject: 5-200 characters
- Message: 10-5000 characters

Real-time validation with error messages in current language.

## 📄 License

This project is part of the Argenis Lopez portfolio.

## 👤 Author

**Argenis Lopez**
- GitHub: [@argenis972](https://github.com/argenis972)
- LinkedIn: [argenis972](https://linkedin.com/in/argenis972)
- Email: argenislopez28708256@gmail.com
