const menu = document.getElementById("comida-pedida");
const comida1 = document.getElementById("comida-primera");
const comida2 = document.getElementById("comida-segunda")
const comida3 = document.getElementById("comida-tercera")
const comida4 = document.getElementById("comida-cuarta")
const comida5 = document.getElementById("comida-quinta")
const comida6 = document.getElementById("comida-sexta")

let cantidad = 0;

function agregaruno(a){ //boton 1
    menu.classList.add("comida-pedida");
    const btn = comida1.cloneNode(true);
    switch(a){
        case 'A':
            console.log(++cantidad);
        break;
    }
    menu.appendChild(btn);
};

function agregardos(b){//boton 2
    menu.classList.add("comida-pedida");
    const btn = comida2.cloneNode(true)
    switch(b){
        case 'B':
            console.log(++cantidad);
        break;
    }
    menu.appendChild(btn)
};

function agregartres(c){//boton 3
    menu.classList.add("comida-pedida");
    const btn = comida3.cloneNode(true)
    switch(c){
        case 'C':
            console.log(++cantidad);
        break;
    }
    menu.appendChild(btn)
};

function agregarcuatro(d){//boton 4
    menu.classList.add("comida-pedida");
    const btn = comida4.cloneNode(true)
    switch(d){
        case 'D':
            console.log(++cantidad);
        break;
    }
    menu.appendChild(btn)
};

function agregarquinto(e){//boton 5
    menu.classList.add("comida-pedida");
    const btn = comida5.cloneNode(true)
    switch(e){
        case 'E':
            console.log(++cantidad);
        break;
    }
    menu.appendChild(btn)
};

function agregarsexto(f){//boton 6
    menu.classList.add("comida-pedida");
    const btn = comida6.cloneNode(true)
    switch(f){
        case 'F':
            console.log(++cantidad);
        break;
    }
    menu.appendChild(btn)
};

function comprar(){
    const comprarProducto = document.getElementById("comprar");
    
    if(cantidad !== 0){
        comprarProducto.disabled=true;
        location.href="../Comprado.html";
    }else{
        
        location.href="../Error.html ";
    }
}

function volver(){
    location.href="../index.html";
}