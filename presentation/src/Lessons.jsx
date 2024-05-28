import { Outlet, Link } from "react-router-dom";
import course from "./course.json";

export default function Lessons() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <nav style={{ width: "250px", borderRight: "1px solid white" }}>
          {course.lessons.map((lesson) => (
            <div key={lesson.path}>
              <Link to={lesson.path}>{lesson.shortTitle}</Link>
            </div>
          ))}
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
