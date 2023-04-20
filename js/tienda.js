//script funcionalidad de carrito y tienda

console.log(comidas);

    const div = document.querySelector(`#contenedor-tarjetas`);
    const main = document.querySelector(`main`);
    const divxd = document.createElement(`div`);
    const gettargetas = document.querySelector(`#tarjetasxd`);
    divxd.classList.add(`cart-products`, `cart-products-close`);
    const totalcomida = document.querySelector(`#totalcomida`);
    divxd.innerHTML =`
<div class="close-btn">
<a class="close-btn" id="closeModal"> X</a>
</div>

<h2> Mi carrito</h2>
<div class="foodcontainer">
</div>
<div class="cart-products"id="tarjetasxd">

</div>
<h2 id="total">Total $</h2>
`;

document.addEventListener(`DOMContentLoaded`, ()=>{

});
const modales = document.querySelector(`modales`);
    main.appendChild(divxd);

comidas.forEach(comida =>{
    console.log(comida);
    const {nombre, imagen, precio, id} = comida;
    const creatediv = document.createElement(`div`);
    creatediv.classList.add(`carts`, `item-content`);
    
    creatediv.innerHTML = 
`
<div >
<img src="/images/${imagen}"></img>
<h3>${nombre}</h3>
<p>$${precio}</p>
<br>
<a class="openModal" id=${id}>AÑADIR AL CARRITO</a>
</div>
`;

/////////////////////////////////////////


div.appendChild(creatediv);
});

const foodcont = document.querySelector(`.foodcontainer`);


let comidaComprar = [];
div.addEventListener(`click`, showFood);
function showFood(e){
    const idLu = e.target.id || undefined;
    console.log(idLu);
comidas.forEach(comida =>{
    const {nombre, imagen, precio,id} = comida;
    const createModal = document.createElement(`div`);
    if(idLu == id ){
        createModal.innerHTML = 
        `
        <img src="/images/${imagen}">
        <p> ${nombre} </p>
        <p> ${precio} </p>
        <p> cantidad</p>
         <a class="delete-product" id="${id}"> X </a> 
         <br>
         <br>
         <h3 ></h3>

        `

        comidaComprar = [...comidaComprar, comida];
        console.log(comidaComprar);
        foodcont.appendChild(createModal);
        console.log(comidaComprar.length);
        let precioTotal = 0;
        comidaComprar.forEach(comidaC =>{
            const {precio} = comidaC;
            precioTotal += precio;
            let total = document.querySelector(`#total`);
            total.textContent =`Total $${precioTotal}`;

        });
        totalcomida.textContent = `${comidaComprar.length}`;
    };
})
   
}

const cartNav  = document.querySelector(`#cartNav`);

cartNav.addEventListener(`click`, ()=> {
    divxd.classList.remove(`cart-products-close`);
});

const closeModal = document.querySelector(`#closeModal`);

closeModal.addEventListener(`click`, ()=>{
    divxd.classList.add(`cart-products-close`);
    
});

foodcont.addEventListener(`click`, (e)=>{
    let idLu = e.target.id || undefined
    console.log(idLu);
    comidas.forEach(food =>{
        const {id} = food;
        if(idLu == id){
            comidaComprar = comidaComprar.filter((xd) => xd.id !== idLu);
            console.log(comidaComprar);
            showFood();
        }
    });

});

