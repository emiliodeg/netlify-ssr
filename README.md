# ngXpress: The Full-Stack Angular Starter Kit (SSR, Zoneless, Express 5, Prisma, better-auth, Tailwind CSS 4)

> **🚧 Development Notice**  
> This template/starter kit is currently **under active development** with major changes and improvements coming. We will launch **officially on July 16th, 2025** with enhanced features, better documentation, and production-ready examples.  
>   
> **⭐ Star this repository** to get notified when we launch and receive updates about new features and improvements!

[![Version](https://img.shields.io/github/package-json/v/angularcafe/ngxpress)](./package.json)
[![Angular](https://img.shields.io/badge/Angular-20-red.svg)](https://angular.dev/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1+-green.svg)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)


![GitHub stars](https://img.shields.io/github/stars/angularcafe/ngxpress)
![GitHub forks](https://img.shields.io/github/forks/angularcafe/ngxpress)
![GitHub issues](https://img.shields.io/github/issues/angularcafe/ngxpress)
![GitHub pull requests](https://img.shields.io/github/issues-pr/angularcafe/ngxpress)

Created and maintained by [@immohammadjaved](https://x.com/immohammadjaved)

Think of ngXpress as the Next.js equivalent for Angular — but without the bloat, plugins, or learning curve. Just Angular + Express, the way it should be. ngXpress is a modern Angular 20 + Express 5 starter with SSR, zoneless execution, Prisma ORM, better-auth for authentication, and Tailwind CSS for styling. Build scalable, maintainable full-stack apps with zero boilerplate.

<p align="center">
  <img src="./social-preview.png" alt="ngXpress" width="900"/>
</p>
<p align="center"><i>ngXpress: Modern Angular + Express full-stack starter in action</i></p>

---

## 🚀 What is ngXpress?

ngXpress is a full-stack Angular starter kit designed to give you a seamless, modern development experience. It brings together the best of Angular 20, Express 5, zoneless execution, Prisma ORM, better-auth for authentication, and Tailwind CSS for styling—all in one place. 

With ngXpress, you get:
- A feature-first, modular backend structure for rapid API development
- Out-of-the-box SSR for SEO and performance
- A zoneless Angular setup for maximum speed and simplicity
- Built-in authentication and beautiful, responsive UI with Tailwind CSS
- A codebase that’s easy to extend, maintain, and deploy

Whether you’re building a prototype or a production app, ngXpress gives you the tools and patterns you need—without the overhead or complexity of other frameworks.

---

## ✨ Features

- **Angular 20** with SSR, signals, and standalone components
- **Express 5** REST API, modular by feature
- **Prisma ORM** (SQLite by default, easy to switch)
- **Zoneless**: No zone.js required — enjoy modern, high-performance Angular
- **Authentication-ready** with **better-auth**
- **Tailwind CSS** for modern, responsive UI
- **TypeScript everywhere**
- **Global error handling**
- **Feature-first folder structure**
- **Ready for deployment**

---

## 🛠️ Tech Stack

**Frontend:** Angular 20 (zoneless), TypeScript, **Tailwind CSS**  
**Backend:** Express 5, Prisma ORM, Node.js, **better-auth**  
**Dev Tools:** Angular CLI, ESLint, Prettier

---

## 🚀 Quick Start

1. **Create your project from this template**
   - Click the green “Use this template” button on GitHub
   - Choose your repo name and create your new project

2. **Clone your new repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev --name init
   ```