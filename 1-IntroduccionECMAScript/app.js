// Array donde se almacenan los viajes registrados
const viajes = [];

/**
 * Registra un destino de viaje.
 * @param {string} destino - El destino turístico.
 * @param {string} fecha - La fecha de viaje.
 * @param {string} transporte - Opción de transporte seleccionada.
 * @param {string} alojamiento - Opción de alojamiento seleccionada.
 * @returns {object} El objeto viaje registrado.
 */
    const registrarDestino = (destino, fecha, transporte, alojamiento) => {
    const viaje = { destino, fecha, transporte, alojamiento };
    viajes.push(viaje);
    return viaje;
    };

/**
 * Calcula el costo total estimado del viaje basándose en el transporte y alojamiento.
 * @param {object} viaje - El objeto que contiene los datos del viaje.
 * @returns {number} Costo total del viaje.
 */
    const calcularCosto = (viaje) => {
    let costoTransporte = 0;
    switch (viaje.transporte) {
        case 'avion':
        costoTransporte = 300;
        break;
        case 'tren':
        costoTransporte = 150;
        break;
        case 'auto':
        costoTransporte = 100;
        break;
        default:
        costoTransporte = 0;
    }

    let costoAlojamiento = 0;
    switch (viaje.alojamiento) {
        case 'hotel':
        costoAlojamiento = 200;
        break;
        case 'hostal':
        costoAlojamiento = 80;
        break;
        case 'ninguno':
        costoAlojamiento = 0;
        break;
        default:
        costoAlojamiento = 0;
    }

    return costoTransporte + costoAlojamiento;
    };

/**
 * Retorna el arreglo con todos los viajes registrados.
 * @returns {Array} Lista de viajes.
 */
const mostrarItinerario = () => viajes;

export { registrarDestino, calcularCosto, mostrarItinerario };
