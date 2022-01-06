import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [esPresupuestoValido, setEsPresupuestoValido] = useState(false);
  return (
    <div className="App">
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        esPresupuestoValido={esPresupuestoValido}
        setEsPresupuestoValido={setEsPresupuestoValido}
      />
    </div>
  );
}

export default App;
