import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./Components/hooks/useTelegram";
import Header from "./Components/Header/Header";

function App() {
  const { onToggleButton, tg } = useTelegram;

  console.log(App);

  useEffect(() => {
    tg?.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}
console.log(App);

export default App;
