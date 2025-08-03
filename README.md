# Real3D - Interactive 3D House Visualization

A modern, interactive web application showcasing 3D house models with smooth animations and responsive design. Built with React, Three.js, and modern web technologies to provide an immersive architectural visualization experience.

## ✨ Features

- **Interactive 3D Models**: Fully interactive 3D house models with mouse-controlled rotation
- **Smooth Animations**: Framer Motion powered animations throughout the user interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices using Tailwind CSS
- **Modern UI Components**: Clean, professional interface with Material-UI components
- **Image Gallery**: Showcase multiple house designs and architectural views
- **Smooth Scrolling**: React Scroll integration for seamless navigation
- **Loading Animation**: Engaging preloader with interactive elements
- **Firebase Hosting**: Ready for deployment with Firebase hosting configuration

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Vite for fast development
- **3D Graphics**: Three.js with React Three Fiber and Drei
- **Animations**: Framer Motion for smooth UI animations
- **Styling**: Tailwind CSS with DaisyUI components
- **UI Components**: Material-UI (MUI) for enhanced user interface
- **Build Tool**: Vite for optimized bundling and development experience
- **Deployment**: Firebase hosting configuration included
- **Code Quality**: ESLint for code linting and consistency

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd real3d
```

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm run dev
```

1. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── 3d_view/          # 3D model components and scene setup
│   ├── 2d_view/          # 2D image gallery and layouts
│   ├── NavBar/           # Navigation components with drawer
│   ├── Footer/           # Footer component
│   └── Preloader.jsx     # Loading animation component
├── HeroSection/          # Hero section with animated text
├── AboutSection/         # Image slider and about content
├── assets/
│   └── images/           # Project images and house renders
├── config/
│   └── firebase.js       # Firebase configuration
├── App.jsx               # Main application component
└── main.jsx              # Application entry point

public/
├── house.gltf            # 3D house model file
├── earth.gltf            # Additional 3D model
├── House.jsx             # Generated 3D house component
└── textures/             # 3D model textures and materials
```

## 🎯 Key Components

### 3D Visualization

- Interactive 3D house models with mouse control
- Real-time lighting and material rendering
- Orbit controls for 360-degree viewing

### UI/UX Features

- Animated text components with staggered reveal effects
- Intersection Observer for scroll-triggered animations
- Responsive grid layouts for optimal viewing on all devices
- Smooth page transitions and hover effects

### Image Gallery

- Multiple house design showcases
- Responsive image layouts
- Professional architectural photography integration

## 🔧 Customization

### Adding New 3D Models

1. Place your GLTF model files in the `public/` directory

1. Generate React components using `gltfjsx`:

```bash
npx gltfjsx@6.5.2 your-model.gltf
```

1. Import and use the generated component in your 3D scenes

### Styling

- Modify Tailwind classes in components for layout changes
- Update `tailwind.config.js` for theme customization
- DaisyUI components can be customized through CSS variables

### Content Updates

- Update house images in `src/assets/images/`
- Modify text content in respective component files
- Add new sections by creating components and importing in `App.jsx`

## 📱 Responsive Design

The application is fully responsive with breakpoints optimized for:

- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop screens (1024px and up)
- Large displays (1280px and up)

## 🚀 Deployment

### Firebase Hosting

The project includes Firebase hosting configuration:

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

1. Build the project:

```bash
npm run build
```

1. Deploy to Firebase:

```bash
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- House 3D model by [ddmclaughlinn](https://sketchfab.com/ddmclaughlinn) under CC-BY-4.0 license
- React Three Fiber community for excellent 3D integration tools
- Framer Motion for smooth animation capabilities
