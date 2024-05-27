import course from "./course.json";
import pages from "./pages.json";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div style={{padding: '10px'}}>
        <h1>{course.title}</h1>
        <nav style={{ display: "flex" }}>
          {pages.map((page) => (
            <div key={page.path} style={{ paddingLeft: "4px" }}>
              <Link to={page.path}>{page.label}</Link>
              {pages.indexOf(page) !== pages.length - 1 && " | "}
            </div>
          ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default App;
