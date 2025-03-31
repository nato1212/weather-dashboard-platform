import Footer from "./components/Footer";
import Weather from "./components/Weather";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen grid bg-custom-blue">
      <Weather />
      <Footer />
    </div>
  );
}
