import Career from "./components/Career"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar"
import "./css/index.css"

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "space-between"
    }}>
      <div style={{
        flex: 1
      }}>
        <NavBar />
        <Career />
      </div>
      <div style={{
        flex: "none"
      }}>
        <Footer />
      </div>
    </div>
  )
}

export default App;
