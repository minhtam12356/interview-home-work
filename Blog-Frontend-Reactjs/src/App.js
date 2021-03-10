import "./styles.css";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Index from "./Components/index";

function App() {
  return (
    <Router>
      <Index />
    </Router>
  );
}

export default App;
