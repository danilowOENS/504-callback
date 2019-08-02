let lista = document.querySelector("ol");
let corpo = document.querySelector("body");

let raizes = [
    {nome:"Rabanete"},
    {nome:"gengibre"},
    {nome: "cenoura"}
]

let imprimirRaizes = (cor) =>{
    for(let raiz of raizes){
        lista.innerHTML += `<li>${raiz.nome}</li>`
    }
    corpo.style.backgroundColor = cor
}

let adicionarRaizes = (callback) =>{
    setTimeout(() => {
        raizes.push({nome:"Batata"});
        callback("blue");
    },2000);
}

adicionarRaizes(imprimirRaizes);