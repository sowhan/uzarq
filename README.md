# UZARQ Solutions - AI Consulting Landing Page

A high-conversion landing page for AI consulting services, designed to turn AI into a practical operating advantage for businesses.

**🌐 Repository:** https://github.com/sowhan/uzarq

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4 + ShadCN UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Netlify-ready
- **Language**: TypeScript

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── sections/        # Page sections
│   │   ├── navbar.tsx
│   │   ├── hero-section.tsx
│   │   ├── problem-section.tsx
│   │   ├── reframe-section.tsx
│   │   ├── framework-section.tsx
│   │   ├── outcomes-section.tsx
│   │   ├── process-section.tsx
│   │   ├── qualification-section.tsx
│   │   ├── tech-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── cta-section.tsx
│   │   └── footer.tsx
│   └── ui/              # Reusable UI components
│       ├── accordion.tsx
│       ├── animated-section.tsx
│       ├── booking-modal.tsx
│       └── button.tsx
└── lib/
    ├── config.ts        # Site configuration
    └── utils.ts         # Utility functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration

### Booking Integration (Cal.com / Calendly)

Edit `src/lib/config.ts` to set your booking URL:

```typescript
export const siteConfig = {
  // Replace with your actual Cal.com or Calendly link
  bookingUrl: "https://cal.com/your-username/ai-audit",
};
```

### Site Metadata

Update the site metadata in `src/lib/config.ts`:

```typescript
export const siteConfig = {
  name: "uzarq",
  description: "Your description here",
  url: "https://your-domain.com",
  contact: {
    email: "hello@your-domain.com",
  },
};
```

## 🎨 Customization

### Colors

The site uses a dark theme with blue/purple accents. Customize in:
- `src/app/globals.css` - CSS variables
- Individual component files for specific colors

### Content

Update the content in:
- `src/lib/config.ts` - FAQ items, navigation links
- Individual section components for copy changes

### Fonts

The site uses Inter font. Change in `src/app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";
// Or import your preferred font
```

## 🚀 Deployment

### Build for production:

```bash
npm run build
```

### Deploy to Vercel:

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📧 Future Integrations

The project is structured to easily add:

- **CMS**: Sanity or Contentful for content management
- **Email**: Resend or Postmark for contact forms
- **Database**: Supabase for lead storage
- **Analytics**: Vercel Analytics or Plausible

### Adding a Contact Form

1. Create a form component using React Hook Form + Zod
2. Set up an API route in `src/app/api/contact/route.ts`
3. Integrate with Resend/Postmark for email delivery
4. Store leads in Supabase

## 📝 License

MIT License - feel free to use for your own projects.
