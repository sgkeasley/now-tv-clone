import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Welcome from "./Components/WelcomeBack";
import picture from "./Game_of_Thrones_image.png";
import Next from "./Components/NextWatch";
import Membership from "./Components/Membership";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Welcome picture={picture}></Welcome>
      <Next></Next>
      <Membership></Membership>
      <Footer></Footer>
    </div>
  );
}

export default App;
