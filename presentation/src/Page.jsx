import React from "react";
import course from "./course.json";
import Lessons from "./Lessons.jsx";

export function Page({ page }) {
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
