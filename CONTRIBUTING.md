# Contributing to Open CRM

Thank you for your interest in contributing to Open CRM! We are an open-source community dedicated to building a powerful and flexible CRM platform.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Nx CLI](https://nx.dev/getting-started/install) (optional, but recommended: `npm install -g nx`)

### Setup
1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/open-crm.git
   cd open-crm
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🌿 Branching Strategy

We use **GitHub Flow**, which is a simple, trunk-based branching strategy:
1. **main**: The production-ready branch. All changes are merged here via Pull Requests.
2. **Feature Branches**: Create a branch for every new feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix-name
   ```

## 📝 Commit Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

**Example:**
```text
feat(shop): add product filtering by category
```

## 🧪 Test-Driven Development (TDD)

TDD is a core practice in Open CRM. We follow the **Red-Green-Refactor** cycle:

1.  🔴 **Red**: Write a failing test for the new functionality.
2.  🟢 **Green**: Write the minimum amount of code to make the test pass.
3.  🔵 **Refactor**: Clean up the code while ensuring the test remains green.

### Running Tests
- **Unit Tests**: `npx nx run-many -t test`
- **E2E Tests**: `npx nx e2e shop-e2e`

## 📬 Pull Request Process

1. Ensure your code follows the [Coding Standards](./CODING_STANDARDS.md).
2. Ensure all tests pass: `npx nx run-many -t test`.
3. Push your branch to your fork.
4. Open a Pull Request against the `main` branch of the original repository.
5. Provide a clear description of the changes and link any relevant issues.
6. Once reviewed and approved, your PR will be merged!
