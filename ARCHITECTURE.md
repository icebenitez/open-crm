# System Architecture

Open CRM is built as a highly modular monorepo using [Nx](https://nx.dev). This architecture promotes code reuse, consistency, and efficient scaling.

## 🏗️ Monorepo Structure

The project is organized into two primary directories: `apps` and `libs`.

### 📱 Applications (`apps/`)
Applications are the entry points of the system. They should be "thin" and primarily handle configuration, routing, and composition of libraries.
- `crm`: The frontend CRM application (React).
- `api`: The backend API service (Node.js/Express).
- `crm-e2e`: End-to-end test suite for the crm application.

### 📚 Libraries (`libs/`)
The core logic resides in libraries. We follow a domain-driven approach to organize them:

- **feature**: High-level functionality (e.g., `@org/crm-feature-products`).
- **ui**: Reusable presentational components (e.g., `@org/crm-shared-ui`).
- **data**: Data fetching and state management (e.g., `@org/crm-data`).
- **utils**: Shared helper functions (e.g., `@org/shared-test-utils`).
- **models**: Shared TypeScript interfaces and types (e.g., `@org/models`).

## 🧱 Module Boundaries

To maintain a clean architecture, we enforce dependency constraints using Nx tags:
- **scope**: Defines which application or domain the library belongs to (`scope:crm`, `scope:api`, `scope:shared`).
- **type**: Defines the purpose of the library (`type:feature`, `type:ui`, `type:data`).

Libraries should only depend on libraries that are "below" them or in the same scope. Shared libraries should never depend on application-specific libraries.

## 📡 API Design

- **Backend**: The `api` app provides a RESTful interface.
- **Frontend**: The `crm` app consumes the API via data-access libraries.

## 🧪 Testing Architecture

We believe in a robust testing strategy:
- **Unit Testing**: Powered by [Vitest](https://vitest.dev/). We aim for high coverage in business logic and UI components.
- **End-to-End (E2E) Testing**: Powered by [Playwright](https://playwright.dev/). We test critical user journeys to ensure system integrity.

## 🛠️ Tech Stack

- **Monorepo Management**: Nx
- **Frontend**: React, Vite, React Router
- **Backend**: Node.js, Express
- **Testing**: Vitest, Playwright, React Testing Library
- **Tooling**: ESLint, Prettier, TypeScript
