import "./App.css";
import Header from "./components/header/Header.component";
import Hero from "./components/hero/Hero.component";
import Footer from "./components/footer/Footer.component";

//1. Create the context in a seperate file
//2. Provide the context to the component
//3.Use the context

function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
