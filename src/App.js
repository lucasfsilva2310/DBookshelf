import "./reset.css";
import { RootContainer } from "./styles/RootContainer.js";
import Routes from "./routes/index";

function App() {
  return (
    <RootContainer>
      <Routes />
    </RootContainer>
  );
}

export default App;
