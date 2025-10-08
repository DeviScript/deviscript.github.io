# Project Structure & Organization

## 📁 **Complete Project Architecture**

This document outlines the organized structure of Brian Lockhart's professional portfolio website, following Separation of Concerns (SoC) principles and modern development best practices.

### 🏗️ **Root Directory Structure**

```
personal-site/
├── 📱 app/                    # Next.js App Router
├── 🧩 components/             # React components
├── 🛠️ lib/                    # Core application logic
├── 📄 docs/                   # Documentation
├── ⚙️ config/                 # Configuration files
├── 📜 scripts/                # Development & deployment scripts
├── 🌐 public/                 # Static assets
├── 🔧 .github/                # GitHub workflows & templates
├── 📋 README.md               # Main project documentation
├── 🔒 LICENSE                 # Open source license
├── 🚀 quick.sh                # Quick development launcher
└── ⚙️ Configuration files     # Root-level configs (symlinked)
```

## 📱 **Application Layer (`app/`)**

```
app/
├── layout.tsx              # Root layout with navigation
├── page.tsx                # Homepage combining all sections
├── globals.css             # Global styles and Tailwind imports
├── sitemap.ts              # SEO sitemap generation
└── robots.ts               # SEO robots configuration
```

**Responsibility**: Next.js App Router structure, pages, layouts, and global configurations.

## 🧩 **Components Layer (`components/`)**

```
components/
├── layout/
│   ├── Navigation.tsx      # Responsive navbar with dark mode
│   └── Footer.tsx          # Site footer with links
├── providers/
│   └── theme-provider.tsx  # Dark/light theme provider
└── sections/
    ├── Hero.tsx            # Landing section with animations
    ├── About.tsx           # Personal story and highlights
    ├── Skills.tsx          # Interactive skills showcase
    ├── Experience.tsx      # Professional timeline
    ├── Projects.tsx        # Portfolio with featured projects
    ├── Education.tsx       # Education and certifications
    └── Contact.tsx         # Contact form and information
```

**Responsibility**: Pure UI components focused on presentation and user interaction.

## 🛠️ **Library Layer (`lib/`)**

### **Core Structure**

```
lib/
├── index.ts                # Centralized exports
├── config.ts               # Environment configuration
├── 📁 types/               # TypeScript definitions
├── 🎣 hooks/               # Custom React hooks (business logic)
├── 🔧 utils/               # Utility functions
└── 📊 constants/           # Static data and configuration
```

### **Types (`lib/types/`)**

```
types/
└── index.ts                # Comprehensive type definitions
```

- Form data types
- Component prop interfaces
- Configuration types
- Business logic types
- Animation variant types

### **Custom Hooks (`lib/hooks/`)**

```
hooks/
├── useContactForm.ts       # Form state management & validation
└── useScrollNavigation.ts  # Smooth scrolling navigation logic
```

**Responsibility**: Business logic separation from UI components.

### **Utilities (`lib/utils/`)**

```
utils/
├── animations.ts           # Framer Motion variants & helpers
└── dom.ts                  # DOM manipulation utilities
```

**Responsibility**: Reusable helper functions and common operations.

### **Constants (`lib/constants/`)**

```
constants/
├── navigation.ts           # Navigation configuration
└── data.ts                 # Application data (skills, projects, etc.)
```

**Responsibility**: Static data management and application constants.

## 📄 **Documentation Layer (`docs/`)**

```
docs/
├── setup/
│   └── personal-website-requirements.md  # Original requirements
├── development/
│   ├── CONTRIBUTING.md                    # Contribution guidelines
│   ├── GIT_COMMANDS.md                    # Git workflow documentation
│   ├── SOC_IMPLEMENTATION.md              # Architecture explanation
│   └── project-structure.md               # Legacy structure docs
└── deployment/
    └── VERCEL_SETUP.md                    # Vercel deployment guide
```

**Responsibility**: Project documentation, setup guides, and development workflows.

## ⚙️ **Configuration Layer (`config/`)**

```
config/
├── postcss.config.js       # PostCSS configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

**Responsibility**: Framework and tool configurations.
**Note**: Symlinked to root for tool compatibility.

## 📜 **Scripts Layer (`scripts/`)**

```
scripts/
├── setup.sh                # Environment setup script
├── development/
│   └── git-quick.sh         # Quick git workflow automation
└── deployment/
    └── (future deployment scripts)
```

**Responsibility**: Development automation and deployment scripts.

## 🌐 **Public Assets (`public/`)**

```
public/
├── .nojekyll               # GitHub Pages configuration
├── manifest.json           # PWA manifest
├── 🖼️ images/
│   ├── projects/           # Project screenshots
│   └── profile/            # Profile and personal images
├── 🎯 icons/               # Favicons and app icons
└── 📋 documents/           # Downloadable files (resume, etc.)
```

**Responsibility**: Static assets served directly by the web server.

## 🔧 **GitHub Integration (`.github/`)**

```
.github/
├── workflows/
│   └── deploy.yml          # Deployment automation (disabled for Vercel)
└── (GitHub templates and configurations)
```

**Responsibility**: GitHub-specific configurations and automation.

## 🎯 **Key Architectural Principles**

### **1. Separation of Concerns (SoC)**

- **Presentation**: Components focus only on UI
- **Business Logic**: Custom hooks handle state and logic
- **Data**: Constants manage static data
- **Utilities**: Helper functions for common operations
- **Configuration**: Centralized environment and tool configs

### **2. Single Responsibility Principle**

- Each module has one clear purpose
- Easy to locate and modify specific functionality
- Improved testability and maintainability

### **3. DRY (Don't Repeat Yourself)**

- Reusable components and utilities
- Centralized configuration and data
- Shared animation variants and styles

### **4. Scalability**

- Clear structure for adding new features
- Easy to onboard new developers
- Consistent patterns throughout the codebase

## 🚀 **Development Workflow**

### **Quick Commands**

```bash
# Development
npm run dev                 # Start development server
npm run build              # Create production build
npm run lint               # Run linting

# Git workflow (using organized scripts)
./quick.sh "commit message" # Quick git add, commit, push
./scripts/setup.sh          # Initial environment setup
```

### **File Organization Guidelines**

1. **Components**: Keep UI-focused, import logic from hooks
2. **Hooks**: Handle all business logic and state management
3. **Utils**: Pure functions for common operations
4. **Constants**: Static data that doesn't change
5. **Types**: Comprehensive TypeScript definitions
6. **Docs**: Keep documentation updated and organized

## 📋 **Benefits of This Structure**

### **Developer Experience**

- ✅ **Intuitive Navigation**: Easy to find files
- ✅ **Clear Responsibilities**: Each layer has specific purpose
- ✅ **Consistent Patterns**: Standardized approaches
- ✅ **Better IntelliSense**: Comprehensive TypeScript support

### **Code Quality**

- ✅ **Maintainable**: Easy to modify and extend
- ✅ **Testable**: Logic separated from UI
- ✅ **Reusable**: DRY principles throughout
- ✅ **Type Safe**: Full TypeScript implementation

### **Team Collaboration**

- ✅ **Onboarding**: Clear structure for new developers
- ✅ **Handoffs**: Well-documented and organized
- ✅ **Standards**: Consistent coding patterns
- ✅ **Scalability**: Easy to add features and team members

## 🎉 **Project Status**

This project now follows **enterprise-level** architectural principles:

- ✅ **Production Ready**: Professional code organization
- ✅ **Scalable**: Easy to extend and maintain
- ✅ **Type Safe**: Comprehensive TypeScript implementation
- ✅ **Well Documented**: Complete documentation structure
- ✅ **Industry Standard**: Follows modern best practices

The architecture demonstrates both technical skills and understanding of professional software development practices! 🚀
