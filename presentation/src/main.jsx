import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import course from "./course.json";
import pages from "./pages.json";
import Lessons from "./Lessons.jsx";


function getElement(page) {
  switch (page.template) {
    case "text":
      return <p>{course[page.name]}</p>;
    case "list":
      return (
        <ul key={page.path}>
          {course[page.name].map((li, ndx) => (
            <li key={ndx}>{li}</li>
          ))}
        </ul>
      );
    case "lessons":
      return <Lessons />;
    default:
      throw new Error(`Unknown template "${page.template}"`);
  }
}

function Lesson({ lesson }) {
  return <div style={{ paddingLeft: "15px" }}>
    <h2>{lesson.title}</h2>
    <ul>{lesson.topics.map(t => <li key={t.path}>{t.title}</li>)}</ul>
  </div>
}

function Topic({ topic }) {
  return <div style={{ paddingLeft: "15px" }}>
    <h3>{topic.title}</h3>
  </div>
}

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: pages.map((page) => ({
      path: page.path,
      element: getElement(page),
      children: page.name !== "lessons" ? undefined : [...course.lessons.map(l => ({
        path: l.path,
        element: <Lesson lesson={l} />
      })), ...course.lessons.map(l => l.topics).flat().map(t => ({ path: t.path, element: <Topic topic={t} /> }))]
    })),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider {...{ router }} />
  </React.StrictMode>
);
