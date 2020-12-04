import "./App.css";
import Nav from "./components/navigation/mainNav";
import CheckoutForm from "./components/forms/checkout";
import { SquareCard } from "./components/forms/squarePayment";

function App() {
  return (
    <div className="App">
      <Nav />
      <CheckoutForm />
    </div>
  );
}

export default App;
