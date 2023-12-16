import { Container } from "@material-ui/core";
import "./App.css";
import MenuBar from "./view/menubar/menubar";

function App() {
  return (
    <Container className="container">
      <div className="App">
        <MenuBar />
      </div>
    </Container>
  );
}

export default App;
