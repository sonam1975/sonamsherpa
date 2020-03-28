import React from "react";
import ReactDOM from "react-dom";
import Img from "../style/Img.jsx";
import Wrapper from "../style/Wrapper.jsx";
import Title from "../style/Title.jsx";
import TopBar from "./TopBar.jsx";
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Img />
        <TopBar />
      </Wrapper>
    );
  }
}

export default App;
