/*let nombreApellidoUsuario = prompt('Ingrese su nombre y apellido')
let fechaDeNacimiento = prompt('Ingrese su fecha de nacimiento')

//Objeto sobre datos del usuario
let persona = {
    nombre_apellido: nombreApellidoUsuario,
    fecha: fechaDeNacimiento,
};

console.log(persona.nombre_apellido)
console.log(persona.fecha)

if (nombreApellidoUsuario == '') {
    alert('El nombre y apellido para su cuenta, no puede ir vacio, porfavor ingrese los datos requeridos')
    console.log('El usuario no pudo ingresar sus datos personales correctamente')
} else {
    alert('Su nombre y apellido es ' + nombreApellidoUsuario + ' y su fecha de nacimiento es ' + fechaDeNacimiento)
    console.log('El usuario ingreso correctamente sus datos personales')
}

let edadUsuario = parseInt(prompt('Ingrese su edad'))

//Objeto de la edad del usuario
let edad = {
    edad: edadUsuario,
};

console.log(edad.edad)

while (edadUsuario < 18) {
    alert('Usted es menor de edad para poder ingresar y vender productos en este sitio web, porfavor vuelva cuando tenga la edad suficiente para poder vender los productos que usted desea')
    edadUsuario = parseInt(prompt('Ingrese su edad'))
    console.log('El usuario no pudo ingresar sus datos personales correctamente, porque no cumple con la edad necesaria')
}
    alert('Usted tiene la edad suficiente para poder vender sus productos en este sitio web')
    console.log('El usuario ingreso correctamente su edad y cumple con los riquisitos necesarios para poder ingresar y vender productos')*/

    /*let nombre = prompt('Ingrese su nombre de usuario');
    let ingresoExitoso = false;
    let usuario1 = nombreApellidoUsuario
    let usuario2 = 'Jose Fernandez'

    while (!ingresoExitoso) {
        switch (nombre) {
            case usuario1:
                alert('Bienvenido de nuevo ' + usuario1);
                ingresoExitoso = true;
                break;
            case usuario2:
                alert('Bienvenido de nuevo ' + usuario2);
                ingresoExitoso = true;
                break;
            default:
                nombre = prompt('Vuelva a intentar ingresar su usuario');
                break;
        }
    }

let productoDelUsuario = prompt('Ingrese su producto para gamers')
let precioDelProductoDelUsuario = parseInt(prompt('Ingrese el precio para su producto para gamers'))
let coutasDelProducto = 16
let inflacion = 1.21
let inflacionDelProducto = precioDelProductoDelUsuario*inflacion

if (precioDelProductoDelUsuario) {
        alert('El precio de su ' + productoDelUsuario + ' en 16 coutas sera de ' + precioDelProductoDelUsuario/coutasDelProducto + '$ por couta en nuestro sitio web, junto a una inflacino del 114,3%, por lo cual el precio seria de ' + inflacionDelProducto)
    console.log('El usuario ingreso correctamente los datos del producto y el precio del producto se calculo correctamente')
} else {
    alert('No ingreso el precio de su producto correctamente, porfavor ingrese de nuevo el precio de su prodcto')
    console.log('El usuario no ingreso los datos del producto')
}

function calculadoraDeInflacion(precioDelProductoDelUsuario, inflacion) {
    return precioDelProductoDelUsuario = precioDelProductoDelUsuario * inflacion
}
calculadoraDeInflacion() 
console.log('El precio del producto del usuario subira a ' + inflacionDelProducto + ' por la inflacion actual que es de un 114,3% ')

function listaDeProductosGamersConStock() {
    const stock = [
    { id: 1, producto: 'Mouse pad gamer XL', precio:  10000},
    { id: 2, producto: 'PC gamer de alta gama', precio: 250000},
    { id: 3, producto: 'Teclado mecanico dragon', precio: 17000},
    { id: 4, producto: 'Mouse logitech 3500dpi', precio: 30000},
    { id: 5, producto: 'Tarjeta Grafica RTX3090', precio: 500000},
    { id: 6, producto: 'Monitor 24 pulgadas de 144z', precio: 45000},
    ]
    stock.map (producto => console.log(`id: ${producto.id}, producto: ${producto.producto}, precio: ${producto.precio}`))
    let buscarProductoPorId = parseInt(
        prompt('Ingrese el id del producto para poder ver o comprar el producto')
    );
    console.log (stock.find ((producto) => producto.id === buscarProductoPorId))
}

function listaDeProductosGamersConStockOrdenadosDeMenorAMayor() {
    const stock = [
    { id: 1, producto: 'Mouse pad gamer XL', precio:  10000},
    { id: 2, producto: 'PC gamer de alta gama', precio: 250000},
    { id: 3, producto: 'Teclado mecanico dragon', precio: 17000},
    { id: 4, producto: 'Mouse logitech 3500dpi', precio: 30000},
    { id: 5, producto: 'Tarjeta Grafica RTX3090', precio: 500000},
    { id: 6, producto: 'Monitor 24 pulgadas de 144z', precio: 45000},
    ];

    // Filtrar los productos con precio mayor a 0
    const productosFiltrados = stock.filter(function(producto) {
    return producto.precio > 0;
    });

    // Ordenar los productos de mayor a menor precio utilizando sort()
    productosFiltrados.sort(function(a, b) {
    return b.precio - a.precio;
    });

    productosFiltrados.forEach(function(producto) {
    console.log(`id: ${producto.id}, producto: ${producto.producto}, precio: ${producto.precio}`);
    });

    let buscarProductoPorId = parseInt(prompt('Ingrese el id del producto para poder ver o comprar el producto'));
    console.log(stock.find((producto) => producto.id === buscarProductoPorId));
}

listaDeProductosGamersConStockOrdenadosDeMenorAMayor();

function listaDeProductosGamersSinStock() {
    const sinStock = [
    { idNoStock: 1, producto: '8G de memoria ram', precio:  1000},
    { idNoStock: 2, producto: 'Placa madre ASUS', precio: 25000},
    { idNoStock: 3, producto: 'teclado mecanico BKT', precio: 10000},
    { idNoStock: 4, producto: 'mouse RYZER 4000dpi', precio: 40000},
    { idNoStock: 5, producto: 'Tarjeta Grafica RTX4090', precio: 1000000},
    { idNoStock: 6, producto: 'Monitor 18 pulgadas de 60z', precio: 20000},
    ]
    for (const producto of sinStock) {
    console.log(`id: ${producto.idNoStock}, producto: ${producto.producto}, precio: ${producto.precio}`);
    }
}*/




/*function productosConStock() {
    let productosStock = [
        { id: 1, producto: 'Mouse pad gamer XL', precio:  10000},
        { id: 2, producto: 'PC gamer de alta gama', precio: 250000},
        { id: 3, producto: 'Teclado mecanico dragon', precio: 17000},
        { id: 4, producto: 'Mouse logitech 3500dpi', precio: 30000},
        { id: 5, producto: 'Tarjeta Grafica RTX3090', precio: 500000},
        { id: 6, producto: 'Monitor 24 pulgadas de 144z', precio: 45000},
    ];
    for (const productos of productosStock) {
        let contenedor = document.createElement('div');
        contenedor.innerHTML = `<h3> ID: ${productos.id}</h3>
                                <p> Producto: ${productos.producto}</p>
                                <b> Precio: $${productos.precio}</b>`;

        document.body.appendChild(contenedor);
    }
}*/

        /*class Cuenta {
        constructor (nombre, apellido, fechaDeNacimiento, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.fechaDeNacimiento = fechaDeNacimiento;
            this.edad = edad;
        }
    }

    const cuenta = []
    let entrada = ''
    while (entrada != 'ESC') {
    cuenta.push (new Cuenta (prompt('Ingrese su nombre'), prompt ('Ingrese su apellido'),  prompt('Ingrese su fecha de nacimiento'), prompt('Ingrese su edad')))
    entrada = prompt ('Escriba ESC para salir o cualquier tecla para poder continuar agregando usuarios')
    localStorage.setItem ('cuenta', JSON.stringify(cuenta))
    console.log (JSON.parse(localStorage.getItem('cuenta')))
    }*/

    const botonModoOscuro = document.getElementById("modoOscuro")
    const botonModoClaro = document.getElementById("modoClaro")

    botonModoOscuro.addEventListener('click', () => {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        document.body.style.transition = "2s"
        document.getElementById('listaDeProductos').style.backgroundColor = "black"
        document.getElementById('listaDeProductos').style.color = "white"
        localStorage.setItem('theme', 'dark')
    })

    botonModoClaro.addEventListener('click', () => {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        document.body.style.transition = "2s"
        document.getElementById('listaDeProductos').style.backgroundColor = "white"
        document.getElementById('listaDeProductos').style.color = "black"
    })

function ListaDeLosProductos() {
    const productos = [
        {
            id: 1,
            nombre: 'Mouse pad gamer XL',
            precio: 10000,
        },
        {
            id: 2,
            nombre: 'PC gamer de alta gama',
            precio: 250000,
        },
        {
            id: 3,
            nombre: 'Teclado mecanico dragon',
            precio: 17000,
        },
        {
            id: 4,
            nombre: 'Mouse logitech 3500dpi',
            precio: 30000,
        },
        {
            id: 5,
            nombre: 'Tarjeta Grafica RTX3090',
            precio: 500000,
        },
        {
            id: 6,
            nombre: 'Monitor 24 pulgadas de 144z',
            precio: 45000,
        }
    ]
    for (const producto of productos) {
    let container = document.createElement('div')
    container.innerHTML = `
        <h2>Producto: ${producto.nombre}</h2>
        <h3>ID: ${producto.id}</h3>
        <p>Precio: $${producto.precio}</p>
        <p>Precio con IVA: $${producto.precio * 1.21}</p>
        <button id="${producto.id}" class="btn">Agregar al carrito</button>
        `
    container.style.border = '1px solid black'
    container.style.padding = '15px'
    container.style.margin = '15px'
    document.body.appendChild(container)
    }
    return productos
}

/*function Carrito() {}*/
    const productos = ListaDeLosProductos()
        const carrito = []
        let botones = document.querySelectorAll(".btn")
        for (const boton of botones) {
            boton.onclick = (e) => {
                const productoSeleccionado = productos.find(producto => producto.id == e.target.id)
                swal({
                    title: "quieres agregar este producto al carrito ?",
                    text: `Producto: ${productoSeleccionado.nombre}. Precio: ${productoSeleccionado.precio}$`,
                    buttons: ['Cancelar', 'Aceptar'],
                }).then((respuesta) => {
                    if (respuesta) {
                        console.log(carrito);
                        carrito.push(productoSeleccionado);
                    }
                }) 
            }
        }
        let botonFinalizar = document.createElement('button')
        botonFinalizar.innerHTML = 'Finalizar compra'
        botonFinalizar.onclick = () => {
            swal({
                title: 'Quiere finalizar su compra ?',
                text: `Tenes ${carrito.length} productos dentro del carrito y son: 
                ${carrito.map((p) =>p.nombre).join('\n')}`,
                buttons: ['No, quiero cambiar mis productos', 'Si, quiero comprar mis productos'],
            }).then((respuestaDeLaCompra) => {
                if (respuestaDeLaCompra) {
                swal({
                    title: "Felicideades, tu compra se a realizado con exito, disfrute de sus productos :D",
                    icon: "success",
                })}
            })
        localStorage.setItem('carrito', JSON.stringify(carrito))
        }
        document.body.appendChild(botonFinalizar)

        let botonMostrarCarrito = document.createElement('button')
        botonMostrarCarrito.innerText = 'Mostrar carrito'
        botonMostrarCarrito.onclick = (e) => {
        const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))
        console.log(carritoLocalStorage)
        const nombreProductos = carritoLocalStorage.map((productos) => productos.nombre)
    
        alert(`Los productos en el carrito son: ${nombreProductos}`)
        }
        document.body.appendChild(botonMostrarCarrito)


/*function listaDeInformacionDeLosProductos() {}*/
    let boton = document.getElementById('botonDeInformacion')
    boton.onclick = () => {
        let spinner = document.getElementById('spinner')
        spinner.style.display = 'block'
        fetch('carrito.json')
        .then((response) => response.json())
        .then(data => {
            setTimeout(() =>{
                for (const producto of data) {
                    let contenedor = document.createElement('div')
                    contenedor.innerHTML = `
                    <h2>ID: ${producto.id}</h2>
                    <h3>Nombre: ${producto.nombre}</h3>
                    <p>informacion: ${producto.informacion}</p>
                `
                contenedor.className = 'card card card-body my-3'
                contenedor.style.width = '18rem'
                document.body.appendChild(contenedor)
                }
            },1000)
            spinner.style.display = 'none'
        })
    }
