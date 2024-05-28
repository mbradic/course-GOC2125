import React from "react";

export function Lesson({ lesson }) {
  return <div style={{ paddingLeft: "15px" }}>
    <h2>{lesson.title}</h2>
    <ul>{lesson.topics.map(t => <li key={t.path}>{t.title}</li>)}</ul>
  </div>;
}
