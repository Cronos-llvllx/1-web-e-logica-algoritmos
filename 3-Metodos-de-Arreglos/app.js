    // Creamos un arreglo de objetos, donde cada objeto es un producto con propiedades: nombre, precio y categoría.
    const productos = [
        { nombre: 'Camiseta', precio: 50, categoria: 'Ropa' },
        { nombre: 'Pantalón', precio: 80, categoria: 'Ropa' },
        { nombre: 'Zapatos', precio: 150, categoria: 'Calzado' },
        { nombre: 'Sombrero', precio: 30, categoria: 'Accesorios' },
        { nombre: 'Gafas', precio: 70, categoria: 'Accesorios' },
        { nombre: 'Bolso', precio: 120, categoria: 'Accesorios' }
    ];
    
    // 1. Usar filter() para obtener los productos que cuesten menos de $100.
    const productosEconomicos = productos.filter((producto) => producto.precio < 100);
    console.log('Productos con precio menor a $100:', productosEconomicos);
    
    // 2. Usar sort() para ordenar alfabéticamente (por nombre) los productos filtrados.
    const productosOrdenados = productosEconomicos.sort((a, b) => {
        // Convertimos los nombres a mayúsculas para evitar diferencias por mayúsculas/minúsculas.
        const nombreA = a.nombre.toUpperCase();
        const nombreB = b.nombre.toUpperCase();
    
        if (nombreA < nombreB) return -1;
        if (nombreA > nombreB) return 1;
        return 0;
    });
    console.log('Productos económicos ordenados alfabéticamente:', productosOrdenados);
    
    // 3. Usar map() para generar un nuevo arreglo que contenga solo los nombres de los productos ordenados.
    const nombresProductos = productosOrdenados.map((producto) => producto.nombre);
    console.log('Lista de nombres de productos ordenados:', nombresProductos);
    
    /* Métodos opcionales adicionales */
    
    // Usando reduce() para calcular el precio total de los productos económicos.
    const precioTotal = productosEconomicos.reduce((total, producto) => total + producto.precio, 0);
    console.log('Precio total de los productos con precio menor a $100:', precioTotal);
    
    // Usando some() para verificar si al menos un producto pertenece a la categoría "Ropa".
    const existeProductoRopa = productos.some((producto) => producto.categoria === 'Ropa');
    console.log('¿Existe al menos un producto de la categoría "Ropa"?', existeProductoRopa);
    
    // Usando every() para comprobar si todos los productos económicos tienen precio menor a $100.
    const todosEconómicos = productosEconomicos.every((producto) => producto.precio < 100);
    console.log('¿Todos los productos filtrados son menores a $100?', todosEconómicos);
    
    // Usando includes() para saber si la lista de nombres incluye "Camiseta".
    const incluyeCamiseta = nombresProductos.includes('Camiseta');
    console.log('¿La lista de nombres incluye "Camiseta"?', incluyeCamiseta);
    