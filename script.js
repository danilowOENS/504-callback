function abrirAlert(nome){
    alert(nome);
}

function receberNome(callbackNome){
    let nome = "danilo"
    callbackNome(nome);
}

receberNome(abrirAlert);