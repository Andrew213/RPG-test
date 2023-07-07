import Info from "./components/Info/Info";
import "./styles/styles.scss";
import Parameters from "./components/Parameters/Parameters";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <header>
        <Info />
      </header>

      <main
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Parameters />

        <Skills />
      </main>
    </>
  );
}

export default App;
