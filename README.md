# 🔗 Project name:

A-5 Dev Stack Builder Website

## 🔗 Project Description

DevStack is a simple React-based web application where users can explore different technologies and build their own technology stack. Users can add technologies, remove them, or clear the whole stack in one click. I built this project to practice React components, props, state, hooks, conditional rendering and working with JSON data.

## Technologies Used

1. React.js
2. JavaScript
3. Tailwind CSS
4. React Toastify
5. Vite
6. JSON

# React Questions & Answers

### 1. What is JSX, and why is it used in React?
Ans : JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code directly inside your React files.

---

### 2. What is the difference between props and state?
Ans : Props are used to pass data from a parent to a child component. State is used to store data inside a component that can change if we want.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
Ans : `useState` creates a variable that can change and tells React to update the screen whenever that variable updates. I used it in `MainCards.jsx` to manage the technologies, selected stack and loading state.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
Ans : `useEffect` is used to run code automatically right after the page loads on the screen. I used it to fetch the technology data from `Data.json` when the page loads.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
Ans : The `key` acts like an ID card for every item in the list. It helps React to see which item changed, was added, or got deleted.

---

### 6. What is conditional rendering? Show one place you used it.
Ans : Conditional rendering means showing different content based on a condition. I used it in the sidebar to show “Your stack is empty” when no technology is selected.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans : A parent component passes data to a child component using props. A child can send data back to the parent by calling a function passed through props.

