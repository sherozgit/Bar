// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// // Find the root div in public/index.html
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Render your main App component inside that root div
// root.render(<App />);

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css'; // Import your global styles

createRoot(document.getElementById("root")).render(
    
            <App />
    
)
