// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component

  import React from "react";
  import ReactDOM from "react-dom";
  
  function MyInfo() {
    return (
      <div>
        <h1>Juan Cruz</h1>
        <p>This is practice to learn react</p>
  
        <ul>
          <li>Dominican Republic</li>
          <li>France</li>
          <li>Spain</li>
        </ul>
      </div>
    );
  }
  ReactDom.render(<MyInfo />, document.getElementById("root"));