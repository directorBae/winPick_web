import { Container } from "@material-ui/core";
import "./App.css";
import MenuBar from "./view/menubar/menubar";
import ContentArea from "./view/contentarea/contentarea";

function App() {
  return (
    <div className="backGroundImage">
      <div>
        <MenuBar />
        <Container className="container">
          <div className="App">
            <ContentArea />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
