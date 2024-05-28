import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import course from "./course.json";
import pages from "./pages.json";
import { Page } from "./Page.jsx";
import { Lesson } from "./Lesson.jsx";
import { Topic } from "./Topic.jsx";


const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: pages.map((page) => ({
      path: page.path,
      element: <Page page={page} />,
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
