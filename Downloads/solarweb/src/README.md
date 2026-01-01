# Bharat Renewable Energy - Website with CMS

A modern, responsive website for Bharat Renewable Energy with a comprehensive Content Management System (CMS) for easy content updates.

## 🌟 Features

- **Modern React + TypeScript Application**
- **Full Content Management System (CMS)**
  - Page content editing (Hero sections, highlights, subsidy details, etc.)
  - Services management
  - Projects portfolio management
  - Testimonials management
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Supabase Backend** - Secure data storage and authentication
- **Admin Dashboard** - Easy-to-use interface for content updates

## 🚀 Live Demo

- **Website**: [Your Domain Here]
- **Admin Panel**: [Your Domain]/admin/login

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn
- Supabase account (free tier available)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/bharat-renewable-energy.git
   cd bharat-renewable-energy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Deploy to Netlify

1. Push code to GitHub
2. Import project in Netlify
3. Add environment variables
4. Deploy

## 📖 CMS Usage

### Admin Login
1. Navigate to `/admin/login`
2. Use your admin credentials
3. Access the CMS dashboard

### Initialize CMS
- First time: Click "Initialize CMS" to populate with default content
- This creates initial page content, services, projects, and testimonials

### Manage Content
- **Pages**: Edit hero sections, highlights, subsidy details, financing info
- **Services**: Add/edit/delete services
- **Projects**: Manage project portfolio
- **Testimonials**: Add/edit/delete customer testimonials

## 🔐 Admin Account Setup

Contact the site administrator or use Supabase dashboard to create admin accounts.

## 🛡️ Security

- Admin routes protected with Supabase authentication
- Environment variables for sensitive data
- Secure API endpoints with authorization checks

## 📁 Project Structure

```
bharat-renewable-energy/
├── src/
│   └── main.tsx          # Application entry point
├── components/           # React components
│   ├── admin/           # Admin CMS components
│   └── ui/              # UI components
├── pages/               # Page components
├── styles/              # CSS styles
├── utils/               # Utility functions
├── supabase/            # Supabase edge functions
└── public/              # Static assets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is proprietary and confidential.

## 📞 Contact

For questions or support, contact: [Your Contact Information]

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Supabase
