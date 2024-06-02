# simple-hooks-util

A utility library for React hooks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Installation

Install the package using npm or yarn:

```bash
npm install 
```

```bash
yarn install
```

## Usage

```TypeScript
import { useTimer } from './hooks/useTimer';

// Example usage of the custom hook
const App = () => {
  const time = useTimer();
  
  return (
    <div>
      <h1>{time.toString()}</h1>
    </div>
  );
};
```

## Available Scripts

In the project directory, you can run:

```yarn dev```
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

```yarn build```
Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

```yarn preview```
Serves the production build locally.

```yarn prettier```
Formats the code using Prettier.

```yarn lint```
Lints the project using ESLint.

```yarn lint-fix```
Fixes linting issues in the project.

```yarn check:types```
Checks the project for type errors using TypeScript.

```yarn ctest```
Runs tests with coverage using Vitest.

```yarn test```
Runs tests in watch mode using Vitest.

```yarn lint-staged```
Runs lint-staged to lint files staged for commit.

```yarn mtest```
Runs mutation tests using Stryker.

## Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch with your feature or bug fix.
Commit your changes.
Push to the branch.
Open a pull request.
Please make sure your code adheres to the coding standards and passes all tests.
