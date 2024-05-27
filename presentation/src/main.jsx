import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import course from "./course.json";
import pages from "./pages.json";

function getElement(page) {
  switch (page.template) {
    case "text":
      return <p>{course[page.name]}</p>;
    case "list":
      return (
        <ul>
          {course[page.name].map((li, ndx) => (
            <li key={ndx}>{li}</li>
          ))}
        </ul>
      );
    case "lessons":
      return <p>TODO</p>;
    default:
      throw new Error(`Unknown template "${page.template}"`);
  }
}

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: pages.map((page) => ({
      path: page.path,
      element: getElement(page),
    })),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider {...{ router }} />
  </React.StrictMode>
);
