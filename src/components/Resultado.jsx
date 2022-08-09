import {useCallback, useMemo, useRef} from "react";
import useCotizador from "../hooks/useCotizador";
import { marcas, planes } from "../constants";

const Resultado = () => {
  const { resultado, datos } = undefined || useCotizador();
  const { marca, plan, year } = datos;

  const yearRef = useRef(year);

  //useCallback
  const [nombreMarca] = useCallback(marcas.filter( m => m.id == Number(marca) ), [resultado])
  const [nombrePlan] = useCallback(planes.filter( p => p.id == Number(plan)), [resultado])

  //useMemo -> Guarda el estado de los elementos
  /* 
    const [nombreMarca] = useMemo( () => marcas.filter( m => m.id == Number(marca) ), [resultado])
    const [nombrePlan] = useMemo( () => planes.filter( p => p.id == Number(plan)), [resultado])
  */

  if (resultado === 0) return null;

  return (
    <div className="bg-gray-100 p-5 mt-5 text-center shadow">
      <h1 className="text-3xl font-black text-gray-700">Resumen</h1>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Año del auto: </span>
        {yearRef.current}
      </p>
      <p className="my-2">
        <span className="font-bold">Total Cotización: </span>
        {resultado} €
      </p>
    </div>
  );
};

export default Resultado;
