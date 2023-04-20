// script llenado dinamico
// script accordion ???

console.log(lugaresCampus);

    const div = document.querySelector(`#contenedor-tarjetas`);
    const button = document.querySelectorAll(`.xopen`);
    const tarjetas = document.querySelectorAll(`.tarjetas`);
    const main = document.querySelector(`main`);
    const divModal = document.createElement(`div`);

lugaresCampus.forEach(lugarCa => {
    const divcreate = document.createElement(`div`);
   
    const {lugar , detalle, disponibilidad, imagen, id} = lugarCa; 
    
    divcreate.innerHTML = 
`
<div class="tarjetas">
<p> ${lugar}</p>
<img src="../images/${imagen}">
<button class="xopen" id=${id}> Ver datos </button>
</div>
`


div.appendChild(divcreate);

});
document.addEventListener(`DOMContentLoaded`, ()=>{
    getdetails();
   

})

function getdetails()
{
    div.addEventListener(`click`, details)
}

function details(e){
    const idLu = e.target.id || undefined;
    console.log(idLu);
    lugaresCampus.forEach(lugarCa => {
        const {lugar , detalle, disponibilidad, imagen, id} = lugarCa; 

        if (idLu == id)
        {
            console.log(idLu);

            divModal.classList.add(`posModal`);
            divModal.classList.remove(`modal`);
    divModal.innerHTML = `
    <div id="modal-contenido">
            <table class="labels">
                <h1>Servicios</h1>
                <tr>
                    <th>Nombre</th>
                    <th> Detalle </th>
                    <th> Disponibilidad </th>
                </tr>
                <tr>
                    <td>${lugar}</td>
                    <td>${detalle}</td>
                    <td>${disponibilidad}</td>
            </tr>
        
            </table>
            <button onclick="removeModal()">Cerrar</button>
        </div>
    `
    main.appendChild(divModal);
        }
    })
   

 
}

function removeModal(){
    divModal.classList.add(`modal`);
}
