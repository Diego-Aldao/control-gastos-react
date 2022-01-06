import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";

function Header({
  presupuesto,
  setPresupuesto,
  esPresupuestoValido,
  setEsPresupuestoValido,
}) {
  return (
    <header>
      <h1>planificador de gastos</h1>
      {esPresupuestoValido ? (
        <p>Control presupuesto</p>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setEsPresupuestoValido={setEsPresupuestoValido}
        />
      )}
    </header>
  );
}

export default Header;
