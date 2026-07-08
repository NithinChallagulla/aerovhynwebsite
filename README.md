# AEROVHYN Technologies Website

A sophisticated, professional, and fully responsive multi-page website for AEROVHYN Technologies Pvt Ltd - a leading UAV and aerospace solutions company.

## 🚀 Features

- **Multi-page React Application** - Complete website with 7 pages
- **Professional Design** - Matches company branding with navy blue and steel gray color scheme
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX** - Clean design with smooth animations and micro-interactions
- **Form Handling** - Contact and career application forms with validation
- **SEO Optimized** - Proper meta tags, structured data, and accessibility features
- **Production Ready** - Optimized build for GoDaddy hosting deployment

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Build Tool**: Vite

## 📱 Pages

1. **Home** - Hero section with company tagline and core services
2. **About** - Company mission, vision, founder bios, and timeline
3. **Solutions** - Product showcase with filterable categories
4. **Technology** - Tech stack and innovations overview
5. **Gallery** - Project photos and media with lightbox
6. **Careers** - Open positions and application form
7. **Contact** - Contact form and business information

## 🎨 Design System

### Colors
- Primary: Navy Blue `#0A1F35`
- Accent: Steel Gray `#4B4F56`
- Text: Charcoal `#1E1E1E`
- Light: Light Gray `#F5F7FA`
- Highlight: Electric Blue `#00A8CC`

### Typography
- Headings: Montserrat
- Body: Inter

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd aerovhyn-website
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📦 Deployment to GoDaddy

### Method 1: cPanel File Manager

1. Build the project:
```bash
npm run build
```

2. Compress the `dist` folder contents into a ZIP file

3. Login to your GoDaddy cPanel account

4. Navigate to **File Manager**

5. Go to the `public_html` directory (or your domain's root directory)

6. Upload and extract the ZIP file contents

7. Ensure `index.html` is in the root directory

### Method 2: FTP Upload

1. Build the project:
```bash
npm run build
```

2. Use an FTP client (like FileZilla) with your GoDaddy FTP credentials

3. Upload all contents from the `dist` folder to your domain's root directory

4. Configure your web server for SPA routing (see below)

### SPA Routing Configuration

For React Router to work properly on GoDaddy shared hosting, create a `.htaccess` file in your root directory:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

## 📧 Form Configuration

The contact and career forms are currently set up for demo purposes. To make them functional:

1. **Backend Integration**: Connect forms to your preferred backend service
2. **Email Service**: Integrate with EmailJS, Formspree, or your email service
3. **File Upload**: Configure resume upload for career applications

### Example EmailJS Integration

```typescript
import emailjs from '@emailjs/browser';

const sendEmail = (formData) => {
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );
};
```

## 🔧 Customization

### Adding Content
- Update company information in page components
- Replace placeholder images with actual company photos
- Modify product/service information in respective pages

### Styling Changes
- Update colors in `tailwind.config.js`
- Modify animations and transitions in component files
- Adjust responsive breakpoints as needed

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 📊 Performance Optimization

The website is optimized for performance with:
- Lazy loading for images
- Optimized asset compression
- Minimal bundle size
- Efficient CSS with Tailwind
- Smooth animations with CSS transforms

## 🔍 SEO Features

- Meta tags for all pages
- Structured data markup
- Semantic HTML elements
- Alt text for images
- Proper heading hierarchy
- Mobile-friendly design

## 📞 Support

For technical support or customization requests:
- Email: support@aerovhyn.in
- Phone: +91 99080 41738

## 📄 License

© 2025 AEROVHYN Technologies Pvt Ltd. All rights reserved.

---

**Built with ❤️ for AEROVHYN Technologies**