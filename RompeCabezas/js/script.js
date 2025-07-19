const Rompecabezas = document.getElementById("Rompecabezas")
const piezas = [];

for(var i= 1; i<9; i++){
    const img = document.createElement (`img`)
    img.src = `img/img${i}.png`
    img.classList.add("pieza");
    img.draggable = true;
    img.dataset.orden = i;
    piezas.push(img)
}

piezas.sort(()=> Math.random() -0.5);

piezas.forEach(pieza => Rompecabezas.appendChild(pieza));

let piezaArrastrada = null;

Rompecabezas.addEventListener("dragstart", e=>{
    if(e.target.classList.contains("pieza")){
        piezaArrastrada =e.target;
    }
});

Rompecabezas.addEventListener("dragover", e => {
    e.preventDefault();
})

Rompecabezas.addEventListener("drop", e => {
    if(e.target.classList.contains("pieza")&& piezaArrastrada !==e.target){
        const nodo1= piezaArrastrada;
        const nodo2= e.target;

        const cloneNodo1= nodo1.cloneNode(true)
        const cloneNodo2= nodo2.cloneNode(true)

        Rompecabezas.replaceChild(cloneNodo1, nodo2);
        Rompecabezas.replaceChild(cloneNodo2, nodo1);


        verificarRompecabezas();
    }
})

function verificarRompecabezas() {
    const piezasActuales = [...Rompecabezas.children];
    const correcto = piezasActuales.every((pieza, i)=> parseInt(pieza.dataset.orden) === i+1)
    if(correcto){
        d
        ocument.getElementById("sonido").play();
        alert("Ganaste!!!")
    }
}
function ejecutarSonido(){
    const audio = document.getElementById("sonido");
    audio.play();
}