# Coding Standards

Consistent code Quality is paramount for the Open CRM project. We follow these standards to ensure readability, maintainability, and reliability.

## ⌨️ General TypeScript Conventions

- **Strict Mode**: We always use `strict` mode in `tsconfig`.
- **Type Definitions**: Prefer `interface` for object shapes and `type` for unions or aliases.
- **Explicit Types**: Avoid `any` at all costs. Use `unknown` if the type is truly unknown, then narrow it down.
- **Functional Programming**: Prefer immutable data structures and pure functions where possible.

## 🏷️ Naming Conventions

- **Components**: `PascalCase` (e.g., `ProductCard.tsx`).
- **Files/Folders**: `kebab-case` for non-component files and folders (e.g., `product-service.ts`).
- **Variables/Functions**: `camelCase` (e.g., `getProductById`).
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_ATTEMPTS`).
- **Interfaces**: Prefixed with `I` is **not** required (e.g., `User` instead of `IUser`).

## ⚛️ React Best Practices

- **Functional Components**: Use functional components with hooks.
- **Custom Hooks**: Extract complex logic into custom hooks.
- **Prop Typing**: Use TypeScript interfaces for prop definitions.
- **Performance**: Use `useMemo` and `useCallback` judiciously to avoid unnecessary re-renders.
- **Styles**: Use CSS Modules or the project's designated styling solution. Avoid inline styles.

## 🧪 Test-Driven Development (TDD) Guidelines

Every new feature or bug fix should start with a test.

1.  **Write the Unit Test**: Create a `.spec.ts(x)` file.
2.  **Mock Dependencies**: Use Vitest mocking capabilities for external services.
3.  **Assertion**: Use clear and descriptive assertions (`expect(result).toBe(true)`).
4.  **Coverage**: Ensure that all edge cases and error paths are covered by tests.

## 🚨 Error Handling

- **Try-Catch**: Use `try-catch` blocks for asynchronous operations and external calls.
- **Error Boundaries**: Use React Error Boundaries to catch UI-level crashes.
- **Logging**: Use a centralized logging service/library for reporting errors in production.

## ♿ Accessibility (A11y)

- **Semantic HTML**: Use proper HTML tags (`<main>`, `<nav>`, `<button>`, etc.).
- **ARIA Labels**: Provide `aria-label` or `aria-labelledby` for interactive elements without visible text.
- **Contrast**: Ensure text meets AA/AAA contrast standards.
- **Keyboard Navigation**: All interactive elements must be accessible via keyboard.

## 🧹 Tooling

- **Linting**: We use ESLint with Nx-recommended rules. Run `npx nx lint` to check.
- **Formatting**: We use Prettier. Ensure your editor is configured to format on save, or run `npx nx format:write`.
