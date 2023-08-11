import Navbar from "./Screens/Navbar";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Footer from "./Screens/Footer";

function App() {
  return (
      <div className="App">
        <Navbar />
        <div style={{minHeight:'90vh'}}>

        <AnimatedRoutes />
        </div>
        {/* <Footer /> */}
      </div>
  );
}

export default App;
