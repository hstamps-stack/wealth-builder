import AppRouter from "./Routes/AppRouter";
import './Homepage.css'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Router>
          <AppRouter/>
      </Router>
      
    </div>
  );
}

export default App;
