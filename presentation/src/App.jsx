import course from "./course.json";
import pages from "./pages.json";
import { Link, Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <h1>{course.title}</h1>
          <nav style={{ display: "flex", paddingLeft: "25px" }}>
            {pages.map((page) => (
              <div key={page.path} style={{ paddingLeft: "4px" }}>
                <Link
                  style={{
                    color: location.pathname === "/" + page.path ? "white" : "",
                    fontSize: "1.3em",
                  }}
                  to={page.path}
                >
                  {page.label}
                </Link>
                {pages.indexOf(page) !== pages.length - 1 && " | "}
              </div>
            ))}
          </nav>
        </div>
        <hr />
        <Outlet />
      </div>
    </>
  );
}

export default App;
