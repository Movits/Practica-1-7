// Cuanto tiempo tardara un automovil en alcanzar una velocidad de 60 km/h, si parte del reposo con una aceleracion de 20 km/h^2 
// Datos: Vf = V0 + a * t

var VelocidadFinal = 60 * (1000 / 3600); // Converter para (m/s)
var Aceleracion = 20 * (1000 / 3600) * (1000 / 3600); // Converter para (m/s^2)
var Tiempo = CalcTiempo(VelocidadFinal, Aceleracion);

function CalcTiempo(VelocidadFinal, Aceleracion) {
    return VelocidadFinal / Aceleracion;
}

console.log("El coche tardará " + Tiempo.toFixed(2) + " segundos para alcanzar 60 km/h con una aceleración de 20 km/h^2");


