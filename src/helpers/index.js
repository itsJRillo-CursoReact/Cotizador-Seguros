export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento = 0;

  switch (marca) {
    case "1":
      incremento = 1.3;
      break;

    case "2":
      incremento = 1.15;
      break;

    case "3":
      incremento = 1.05;
      break;
  }

  return incremento;
}

export function calcularPlan(plan) {
    let incremento = 0;
  
    switch (plan) {
      case "1":
        incremento = 1.2;
        break;
  
      case "2":
        incremento = 1.5;
        break;
    }
  
    return incremento;
  }


export function formatearDinero(cantidad){
    return cantidad.toLocaleString("es-ES",{
        style:"currency",
        currency:"EUR"
    })
}