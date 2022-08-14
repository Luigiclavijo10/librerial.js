class Producto {
    constructor(nombre,marca,precio,stock){
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto("TV", "sonny", 12.5, 8)
const producto2 = new Producto("TV", "LG", 52,8)
const producto3 = new Producto("TV", "Smasung", 80, 8)
const producto4 = new Producto("TV", "AVC", 12.5, 8)
const producto5 = new Producto("TV", "TOSHIBA", 50, 8)
const producto6 = new Producto("TV", "sonny", 14, 8)
 

const productos = [producto1,producto2,producto3,producto4,producto5,producto6]

const botoncarrito = document.getElementById("carrito")
const divProductos = document.getElementById("divProductos")

productos.forEach((Producto, indice) => {
    divProductos.innerHTML += `
    <div class="card border-secondary mb-3" id="Producto${indice}" style="max-width: 40rem; margin: 5px">
        div class="card-header">${Producto.nombre}</div>
           <div class="card-body">
               <h4 class="card-title">${Producto.marca}</h4>
               <p class="card-text">$${Producto.precio}</p>
               <p class="card-text">${Producto.stock}</p>
               <button class="btn btn-secondary"><i class="fa-solid fa-cart-plus"></i></button>
            </div>
     </div>
`   
})

 productos.forEach((Producto, indice) => { 
    document.getElementById(`Producto${indice}`).lastElementChild.
    lastElementChild.addEventListener('click', () => {
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            //destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,//
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "rigth", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){
              console.log("diste click")
            }
          }).showToast();

    })
})

botoncarrito.addEventListener("click", () => {
    Swal.fire({
        title: 'Carrito',    
        showCancelButton: true,
        cancelButtonText:'Seguir Comprando',
        confirmButtonText: 'Finalizar Compra',
      }).then((result) => {        
        if (result.isConfirmed) {
          Swal.fire('Comprar Finalizada', '', 'success')
        }
      })

})


