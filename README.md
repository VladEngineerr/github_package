# Publishing npm package

## Introduction

This repository contains a library of reusable React components, hooks, and utilities. It is designed to promote code reuse, consistency, and best practices across projects.

## Package Installation and Usage

### Installation

To install the package, use npm or yarn:

```bash
npm install @alchemist0803/github_package
# or
yarn add @alchemist0803/github_package
```

### Usage

To use a component from the package, simply import it and include it in your JSX:

```bash
import { Button } from '@alchemist0803/github_package';

const App = () => (
  <div>
    <Button>Click Me</Button>
  </div>
);

export default App;
```

## Storybook Usage

## Development and contribution guidelines

### Things to Consider When Writing Components

#### Dynamic Styling/Themes

- Ensure components support dynamic styling and themes to allow easy customization.
- Use CSS-in-JS libraries or theme providers to manage styles effectively.

#### Accessibility

- Use semantic HTML elements.
- Add `aria-label` props for icon buttons and other non-text elements.
- Avoid native button disabling; instead, implement accessible ways to indicate a disabled state.

### Things to Consider When Writing Other Pieces (Hooks, Utilities)

- Maintain consistency in naming conventions and coding standards.
- Write clear and concise documentation for each utility or hook.
- Ensure proper testing and type-checking to avoid runtime errors.
