//vaviable x
const menu = document.getElementById("comida-pedida");
let cantidad = 0;
let btn1;
let btn2;
let btn3;
let btn4;
let btn5;
let btn6;

//variables comida
const comida1 = document.getElementById("comida-primera");
const comida2 = document.getElementById("comida-segunda");
const comida3 = document.getElementById("comida-tercera");
const comida4 = document.getElementById("comida-cuarta");
const comida5 = document.getElementById("comida-quinta");
const comida6 = document.getElementById("comida-sexta");


function agregaruno(a){ //boton 1
    menu.classList.add("comida-pedida");
     let bla = btn1 = comida1.cloneNode(true);
    switch(a){
        case 'A':
            ++cantidad;
            ++bla;
        break;
    }
    menu.appendChild(btn1);

    if(cantidad > 0){
        btn1.onclick=false  
    }
    /*if( cantidad > 1){
        //btn.parentNode.removeChild(btn); //POSIBLE SOLCUION, solo se puede poner 1 ves la comida
    }*/ 
    
    
}; 

function agregardos(b){//boton 2
    menu.classList.add("comida-pedida");
    btn2 = comida2.cloneNode(true)
    switch(b){
        case 'B':
            ++cantidad;
        break;
    }
    menu.appendChild(btn2)
    if(cantidad > 0){
        btn2.onclick=false
    }
};

function agregartres(c){//boton 3
    menu.classList.add("comida-pedida");
    btn3 = comida3.cloneNode(true)
    switch(c){
        case 'C':
            ++cantidad;
        break;
    }
    menu.appendChild(btn3)
    if(cantidad > 0){
        btn3.onclick=false
    }
};

function agregarcuatro(d){//boton 4
    menu.classList.add("comida-pedida");
    btn4 = comida4.cloneNode(true)
    switch(d){
        case 'D':
            ++cantidad;
        break;
    }
    menu.appendChild(btn4)
    if(cantidad > 0){
        btn4.onclick=false
    }
};

function agregarquinto(e){//boton 5
    menu.classList.add("comida-pedida");
    btn5 = comida5.cloneNode(true)
    switch(e){
        case 'E':
            ++cantidad;
        break;
    }
    menu.appendChild(btn5)
    if(cantidad > 0){
        btn5.onclick=false
    }
};

function agregarsexto(f){//boton 6
    menu.classList.add("comida-pedida");
    btn6 = comida6.cloneNode(true)
    switch(f){
        case 'F':
            ++cantidad;
        break;
    }
    menu.appendChild(btn6)
    if(cantidad > 0){
        btn6.onclick=false
    }
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
/*function eliminar(){
    if(cantidad > 0){
        console.log("funciono1")
        btn1.parentNode.removeChild(btn1);
    }if(cantidad > 0){
        console.log("funciono2")
        btn2.parentNode.removeChild(btn2);
    }
}*/
function volver(){
    location.href="../index.html";
}