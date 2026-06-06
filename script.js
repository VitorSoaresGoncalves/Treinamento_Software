const imagens = document.querySelectorAll("#galeria-de-fotos img");

let atual = 1; 

imagens[atual].classList.add("selecionada");

document.getElementById("esquerda").addEventListener("click", () => {
    imagens[atual].classList.remove("selecionada");

    atual--;
    if (atual < 0) {
        atual = imagens.length - 1; 
    }

    imagens[atual].classList.add("selecionada");
});

document.getElementById("direita").addEventListener("click", () => {
    imagens[atual].classList.remove("selecionada");

    atual++;
    if (atual >= imagens.length) {
        atual = 0;  
    }

    imagens[atual].classList.add("selecionada");
});