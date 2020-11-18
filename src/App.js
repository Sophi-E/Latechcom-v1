import "./App.css";
import Navigation from "./component/navbar";
import Header from "./component/header";
import Programs from "./component/programs";
import About from "./component/about";
import Register from "./component/register";
import Copyright from "./component/copyright";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Programs />
      <About />
      <Register />
      <Copyright />
    </div>
  );
}

export default App;
