# Agents Capital Website

A modern commission advance website for UK estate agents, featuring an interactive pricing calculator and comprehensive application system.

🔗 **Live Demo**: [https://same-nu78tj9tq1x-latest.netlify.app](https://same-nu78tj9tq1x-latest.netlify.app)

## 📋 Project Overview

Agents Capital provides commission advance services to UK estate agents, allowing them to access funds against future commission earnings. The website features:

- **Interactive Pricing Calculator** with Agent/Broker pricing tiers
- **Property Value Range** from £200k to £20M with £5k increments
- **Duration-based Fee Structure** (9-15% based on contract length)
- **Multi-step Application Form** with comprehensive data collection
- **Responsive Design** optimized for desktop and mobile
- **Professional UI** with modern animations and transitions

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Package Manager**: Bun
- **Deployment**: Netlify
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Brannancoady/agents-capital-website.git
cd agents-capital-website
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `bun dev` - Start development server with turbopack
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run TypeScript and Biome linting
- `bun format` - Format code with Biome

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── apply/             # Application form page
│   ├── commission-advance/ # Service details page
│   ├── contact/           # Contact information
│   ├── help/              # Help and support
│   ├── our-business/      # About the business
│   ├── pricing/           # Pricing calculator
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms and conditions
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── shared-navigation.tsx
│   └── shared-footer.tsx
└── lib/
    └── utils.ts           # Utility functions
```

## ✨ Key Features

### Pricing Calculator
- **Customer Type Selection**: Agent vs Broker pricing
- **Property Value Slider**: £200k - £20M range with £5k increments
- **Duration Options**: 6, 9, 12, 15 months with corresponding fees (9-15%)
- **Real-time Calculations**: Instant fee and advance amount updates
- **Mobile Optimized**: Touch-friendly controls and responsive design

### Application System
- **Multi-step Form**: Progressive data collection
- **Form Validation**: Comprehensive validation with error handling
- **Business Information**: Company details, contact information
- **Property Details**: Address, value, expected completion
- **Financial Information**: Commission amounts and timing

### Professional Design
- **Modern UI**: Clean, professional aesthetic
- **Brand Colors**: Blue and gold theme reflecting trust and premium service
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: ARIA labels and keyboard navigation support

## 🌐 Deployment

The website is currently deployed on Netlify with automatic deployments from the main branch.

### Netlify Configuration
- Build command: `bun run build`
- Output directory: `out` (static export)
- Node version: 18+

### Environment Variables
No environment variables are currently required for basic functionality.

## 🔧 Development

### Code Quality
- **TypeScript**: Strict type checking enabled
- **Biome**: Code formatting and linting
- **ESLint**: Additional linting rules
- **Prettier**: Code formatting (via Biome)

### Component Development
- All UI components are built with shadcn/ui
- Custom components follow the established patterns
- Responsive design is prioritized for all components

## 📈 Performance

- **Lighthouse Score**: Optimized for Core Web Vitals
- **Static Generation**: Pre-rendered pages for optimal performance
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For questions about the website or technical issues:

- **Email**: info@agentscapital.co.uk
- **Phone**: 0800 123 4567
- **Address**: 123 Business Street, London, SW1A 1AA

## 📄 License

This project is proprietary software. All rights reserved.

---

Built with ❤️ for UK estate agents by the Agents Capital team.
