# Open CRM 🚀

An open-source, modular Customer Relationship Management (CRM) platform built with React, Node.js, and Nx.

## ✨ Project Overview

Open CRM is designed to be a flexible, enterprise-grade solution for managing customer relationships, sales pipelines, and e-commerce integrations. 

### Core Features
- **Monorepo Architecture**: Scalable development with Nx.
- **Micro-frontends Ready**: Clean separation between crm and core services.
- **TDD Driven**: High reliability with a test-first approach.
- **Developer Friendly**: Built with modern tools (React 19, Vite, Vitest, Playwright).

## 📚 Documentation

- [Contributing Guide](./CONTRIBUTING.md) - Learn how to set up your environment and contribute.
- [Architecture Overview](./ARCHITECTURE.md) - Deep dive into the project structure and design decisions.
- [Coding Standards](./CODING_STANDARDS.md) - Our conventions for high-quality code.

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Development
Serve the crm application and API backend simultaneously:
```bash
npx nx serve crm
```

### 3. Testing (TDD)
Run all unit tests:
```bash
npx nx run-many -t test
```
Run e2e tests:
```bash
npx nx e2e crm-e2e
```

## 🏗️ Project Structure

```text
├── apps/
│   ├── crm/            - React CRM app
│   ├── api/            - Backend API
│   └── crm-e2e/       - E2E tests for crm
├── libs/
│   ├── crm/            - CRM-specific features, data, and UI
│   ├── api/            - API specific services
│   └── shared/         - Shared models and testing utilities
```

## 🤝 Community

Join our journey to build the best open-source CRM! See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## ⚖️ License

MIT License.
