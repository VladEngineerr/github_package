# @Ignite-Reading/ui-kit

## Introduction

This repository contains a library of reusable React components, hooks, and utilities. It is designed to promote code reuse, consistency, and best practices across projects.

## Package Installation and Usage

### Installation

To install the package, use npm or yarn:

```bash
npm install @Ignite-Readidng/ui-kit
# or
yarn add @Ignite-Readidng/ui-kit
```

If the above command does not work, you can try:

```bash
npm install github:Ignite-Reading/ui-kit
#or
yarn add github:Ignite-Reading/ui-kit
```
### Usage

To use a component from the package, simply import it and include it in your JSX:

```bash
import { Button } from '@Ignite-Reading/ui-kit';

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

1. Use explicit props (not prop spreads)
2. Typecheck with `prop-types` for implementation feedback
3. Documenatation requirements for Storybook 
4. Using tests as a form of documenation (implementation examples)
5. Make implmentation for other devs as simple as possible
6. (more?)

#### Component Patterns

1. **Simple**

Simple components are often 1 file, containing 1 component output, with 1 component declaration.

```javascript
<MyComponent title="An Amazing Title" message="An amazing message." />
```

```javascript
<MyComponent>
  <h1>An Amazing title</h1>
  <p>An amazing message.</p>
</MyComponent>
```

1. **Compound**

Compound Components are often 1 directory, containing multiple components that are designed to work together with a shared context provider, containing 1 component output with references to all child component.

https://www.patterns.dev/react/compound-pattern/

```javascript
<MyComponent show={true}>
  <MyComponent.Title>An Amazing Title</MyComponent.Title>
  <MyComponent.Message>An amazing message.</MyComponent.Message>
</MyComponent>
```

1. **Slots**

Slots are component props that take components, with predefined rendering areas. (Great for layouts).

```javascript
<MyComponent
  title={<h1>An Amazing Title</h1>}
  message={<p>An amazing message.</p>}
/>
```

#### Dynamic Styling/Themes

- Ensure components support dynamic styling and themes to allow easy customization.
- Use Tailwind utility classes effectively 
- Use `classnames` library for prop logic with css 

#### Accessibility

- Use semantic HTML elements.
- Add `aria-label` props for icon buttons and other non-text elements
- Use `role` when necessary
- Implement accessible ways to indicate a disabled state
- Implement accessible ways to indicate new elements added to the DOM tree
- Consider `tabindex` usage when necessary

### Things to Consider When Writing Other Pieces (Hooks, Utilities)

- Establish good testing patterns (testing as another form of documenation) with screenshot, unit and integration tests.
- Use light type checking with `prop-types`.
- Maintain consistency in naming conventions and coding standards.
- Write clear and concise documentation for each utility or hook.
- Ensure proper testing and type-checking to avoid runtime errors.
- Make sure to set up your editor to use ESLint, Prettier and LSPs/COCs for automatic formatting on save and inline linting feedback, etc...
