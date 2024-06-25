/*
Renderizar un carrito:
Un array de items llamado carrito
Cada item tiene el sig formato
object:
    nombre: string
    id: numero positivo distinto de 0
    precio: numero positivo distinto de 0
    cantidad: numero positivo distinto de 0
    img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$
Cada item mostrado en HTML va a tener este formato
Div
    h3: {nombre} id:#{id}
    img: el src tendra el valor {img} y el ancho en 100px
    span: Precio unitario: ${precio} x {cantidad} unidades
    span: Total: ${precio * cantidad}

*/

const carritoHTML = document.getElementById("carrito")



const carrito = [
{
    nombre: "Iphone 15 Pro max" , 
    id: 3 ,
    precio: 800,
    cantidad: 2,
    img: 'https://cdn-ipoint.waugi.com.ar/26705-thickbox_default/iphone-15-pro-max-256gb.jpg' ,
    },

{
        nombre: "Iphone 14" , 
        id: 2 ,
        precio: 750,
        cantidad: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSTInW7cakPhwktcldnYjdQ6TvYgI1ouVcg&s' ,
        },

{
            nombre : "Iphone 13" , 
            id : 1 ,
            precio : 400,
            cantidad : 7,
            img : 'https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2022/01/iPhone_13_mini_Blue_PDP_Image_position-1A__CLCO_v1-removebg-preview.png' ,
            },

{
                nombre : "Iphone 14 Pro " , 
                id : 4 ,
                precio : 600,
                cantidad : 1,
                img : 'https://tienda.personal.com.ar/images/720/webp/i_Phone_14_Pro_Deep_Purple_8cf879729e.png' ,
                }
]



const renderizarCarrito = (carrito) => {
    let plantillaCarrito = ''
let totaly = 0

for(const compra of carrito){
    console.log(compra);
    plantillaCarrito = plantillaCarrito + `
    <h3> ${compra.nombre} id:#${compra.id}</h3>
    <img src = ${compra.img} width="100px">
    <span> Precio unitario: $${compra.precio} x $${compra.cantidad} unidades </span>
    <span> Total: $${compra.precio * compra.cantidad} </span>
    `
    totaly = totaly +(compra.precio * compra.cantidad)

}

carritoHTML.innerHTML = plantillaCarrito

const totalJTML = document.getElementById("total")

totalJTML.innerHTML = `El precio total es $${totaly}`
}

renderizarCarrito(carrito)


/*Crear la funcion llamada agregarItemAlCarrito(item)
Item es un objeto con 
{
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}
Buscar si en carrito ya existe un elemento con ese id
SI existe unicamente incrementaran su cantidad en 1

SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada cantidad y con el valor 1

EJEMPLO DE USO:

agregarItemAlCarrito({
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Va a incrementar la cantidad de toyota en 1 en el carrito PORQUE YA EXISTE

agregarItemAlCarrito({
        nombre: 'Honda Civic',
        id: 20,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Se agrega al array carrito pero con la propiedad cantidad en 1

*/
agregarItemAlCarrito = (itemNew) => {
    const IdDelItem = carrito.find((item) => item.id === itemNew.id)

    if(IdDelItem){
        IdDelItem.cantidad += 1
    }
    else{
        itemNew.cantidad = 1
        carrito.push(itemNew)
    }
    renderizarCarrito(carrito)
}

itemNuevo = {
    nombre: 'Iphone 15',
    id: Number(prompt("Ingresa un numero de id")),
    precio: 950,
    img: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/12/iPhone15_Plus_Pink_PDP_Image_Position-1__MXLA.jpg"
}

agregarItemAlCarrito(itemNuevo)



