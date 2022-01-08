import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

function Header({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  esPresupuestoValido,
  setEsPresupuestoValido,
}) {
  return (
    <header>
      <h1>planificador de gastos</h1>
      {esPresupuestoValido ? (
        <ControlPresupuesto
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setEsPresupuestoValido={setEsPresupuestoValido}
        />
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
