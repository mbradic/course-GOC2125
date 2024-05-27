import course from "./course.json";

function App() {
  return (
    <>
      <h1>{course.title}</h1>
      <nav></nav>
      <p>{course.description}</p>
    </>
  );
}

export default App;
