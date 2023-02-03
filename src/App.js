import { useEffect, useState } from "react";
import Header from "./components/Header";
import LandingScreen from "./components/LandingScreen";
import Nav from "./components/Nav";
import ALaUne from "./components/ALaUne";
import { LaunchArrow } from "./features/icons/Icons";
import styled from "styled-components";

function App(props) {
  const [shouldShowBtn, setShouldShowBtn] = useState(false);
  const handleGoTopBtn = () => {
    console.log("window.scrollY : ", window.scrollY);
    if (window.scrollY > 600) {
      setShouldShowBtn(true);
    } else {
      setShouldShowBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleGoTopBtn);
    return () => {
      window.removeEventListener("scroll", handleGoTopBtn);
    };
  }, []);

  const handleGoTopAction = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <div className="App">
      <GoTop
        style={shouldShowBtn ? { opacity: 1 } : { opacity: 0 }}
        onClick={() => handleGoTopAction()}
      >
        <LaunchArrow color="#000" width="1em" height="1em" />
      </GoTop>
      <Header />
      <Nav />
      <main>
        <LandingScreen />
        <ALaUne />
      </main>
    </div>
  );
}

const GoTop = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
  z-index: 100;
  opacity: 1;
  transition: opacity 0.5s;

  svg {
    font-size: 38px;
    border-radius: 50%;
    padding: 12px;
    background-color: #fff;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    box-shadow: 0px 0px 6px 2px rgb(0 0 0 / 7%);
  }
`;

export default App;
