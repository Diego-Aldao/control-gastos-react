import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
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
        <ControlPresupuesto presupuesto={presupuesto} />
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
