# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Password Generator App

This is a simple React-based password generator app that allows you to generate random passwords with various options.

## How to Use

1. Adjust the password options using the provided controls:
   - **Length:** Use the slider to set the password length.
   - **Number:** Check the "Number" checkbox to include numbers in the password.
   - **Special_Char:** Check the "Special_Char" checkbox to include special characters in the password.

2. The generated password will be displayed in the input field.

3. Click the "Copy" button to copy the generated password to your clipboard.

## Code Description

This React app consists of the following key components:

- `App.js`: The main component that handles password generation and user interface.
- `useState` and `useEffect` hooks are used for managing state and side effects.
- The app uses Tailwind CSS for styling.
