# HealthTech - Smart School Healthcare Platform

A modern, comprehensive school healthcare management platform built with Next.js, designed to streamline health services in educational institutions.

## 🌟 Features

- **Health Screenings**: Vision, hearing, dental, and physical examinations
- **Digital Health Records**: Secure electronic health record management
- **Mental Health Support**: Counseling services and mental wellness tracking
- **Emergency Services**: Quick response system and emergency contact management
- **Multi-language Support**: Bilingual health documentation
- **Parent Portal**: Easy access to health records and appointment scheduling
- **School Dashboard**: Comprehensive health monitoring and reporting tools

## 🚀 Tech Stack

- **Frontend**: Next.js 14+
- **Styling**: Tailwind CSS
- **PWA Support**: Built-in Progressive Web App capabilities
- **Type Safety**: TypeScript
- **Code Quality**: ESLint and modern JavaScript configuration

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📱 Progressive Web App

This application is configured as a PWA, allowing users to install it on their devices for offline access and enhanced performance.

## 🔒 Environment Variables

Create a `.env.local` file in the root directory and add necessary environment variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other required environment variables
```

## 📦 Project Structure

```
├── public/          # Static assets and PWA files
├── src/
│   ├── app/        # Next.js 14 app directory and routes
│   ├── components/ # Reusable UI components
│   ├── lib/        # Utility functions and libraries
│   └── types/      # TypeScript type definitions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- School administrators and healthcare providers for their valuable input
- The open-source community for their incredible tools and libraries
- All contributors who have helped shape this project

---

For support, please create an issue in our GitHub repository.
