// Función para encontrar el número máximo utilizando Divide and Conquer
function findMax(arr) {
    // Caso base: Si el arreglo tiene un solo elemento
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax);
}

// Función para manejar la interacción desde la interfaz
function findMaxInArray() {
    const numbers = [3, 8, 2, 10, 5, 7];
    const maxNumber = findMax(numbers);
    document.getElementById("result").textContent = `El número máximo es: ${maxNumber}`;
}
