import { useState, createContext } from "react";
import {obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero} from "../helpers/index.js"

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca:"",
        year:"",
        plan:""
    })

    const [error, setError] = useState("")
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
             [e.target.name]:e.target.value
        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000

        const diferencia = obtenerDiferenciaYear(datos.year)

        resultado -= ((diferencia * 3) * resultado) / 100
        resultado *= calcularMarca(datos.marca)
        resultado *= calcularPlan(datos.plan)
        resultado = resultado.toFixed(2)
        resultado = formatearDinero(resultado)
        
        setCargando(true)
        
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 2000)
    }

    return (
        <CotizadorContext.Provider
        value={{
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro,
            resultado,
            cargando,
            setCargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext