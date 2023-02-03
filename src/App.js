import Header from "./components/Header";
import LandingScreen from "./components/LandingScreen";
import Nav from "./components/Nav";
import ALaUne from "./components/ALaUne";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <LandingScreen />
        <ALaUne />
      </main>
    </div>
  );
}

export default App;
